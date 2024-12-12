import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Papa from 'papaparse';

const csvFiles = [
    '01-renewable-share-energy.csv',
    '02-modern-renewable-energy-consumption.csv',
    '03-modern-renewable-prod.csv',
    '04-share-electricity-renewables.csv',
    '05-hydropower-consumption.csv',
    '06-hydro-share-energy.csv',
    '07-share-electricity-hydro.csv',
    '08-wind-generation.csv',
    '09-cumulative-installed-wind-energy-capacity-gigawatts.csv',
    '10-wind-share-energy.csv',
    '11-share-electricity-wind.csv',
    '12-solar-energy-consumption.csv',
    '13-installed-solar-PV-capacity.csv',
    '14-solar-share-energy.csv',
    '15-share-electricity-solar.csv',
    '16-biofuel-production.csv',
    '17-installed-geothermal-capacity.csv',
];

const years = [1960, 1970, 1980, 1990, 2000, 2010, 2020]; // Lista de años específicos

function Dashboard() {
    const [energyData, setEnergyData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [region, setRegion] = useState('');
    const [zoomRange, setZoomRange] = useState([1960, 2020]); // Rango de zoom inicial

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allData = [];
                for (const file of csvFiles) {
                    const response = await fetch(`./src/data/${file}`);
                    if (!response.ok) {
                        throw new Error(`Error al cargar el archivo CSV: ${file}`);
                    }
                    const csvText = await response.text();

                    // Verifica si el contenido es un CSV
                    if (csvText.startsWith('<!doctype html>')) {
                        console.error(`El archivo ${file} no es un CSV válido.`);
                        continue;
                    }

                    // Procesar el archivo CSV con PapaParse
                    Papa.parse(csvText, {
                        header: true, // Usa la primera fila como encabezados
                        skipEmptyLines: true, // Ignora filas vacías
                        complete: (results) => {
                            allData.push(...results.data); // Combina los datos de todos los archivos
                        },
                        error: (error) => {
                            console.error(`Error al procesar el CSV: ${file}`, error);
                        },
                    });
                }
                setEnergyData(allData); // Guarda los datos combinados en el estado
                console.log(allData);
                
            } catch (error) {
                console.error('Error al cargar los archivos:', error);
            }
        };

        fetchData();
    }, []);

    const handleFilter = () => {
        const data = energyData
            .filter(item => item.Entity.toLowerCase() === region.toLowerCase())
            .map(item => ({
                ...item,
                Year: parseInt(item.Year, 10),
                'Geo Biomass Other - TWh': parseFloat(item['Geo Biomass Other - TWh']) || 0,
                'Hydro Generation - TWh': parseFloat(item['Hydro Generation - TWh']) || 0,
                'Solar Generation - TWh': parseFloat(item['Solar Generation - TWh']) || 0,
                'Wind Generation - TWh': parseFloat(item['Wind Generation - TWh']) || 0,
            }))
            .filter(item => years.includes(item.Year)) // Filtrar solo los años que están en la lista
            .reduce((acc, item) => {
                const year = item.Year;
                if (!acc[year]) {
                    acc[year] = { Year: year, 'Geo Biomass Other - TWh': 0, 'Hydro Generation - TWh': 0, 'Solar Generation - TWh': 0, 'Wind Generation - TWh': 0 };
                }
                acc[year]['Geo Biomass Other - TWh'] += item['Geo Biomass Other - TWh'];
                acc[year]['Hydro Generation - TWh'] += item['Hydro Generation - TWh'];
                acc[year]['Solar Generation - TWh'] += item['Solar Generation - TWh'];
                acc[year]['Wind Generation - TWh'] += item['Wind Generation - TWh'];
                return acc;
            }, {}); // Ordenar por año

        setFilteredData(Object.values(data));
    };

    const handleZoomChange = (e) => {
        const { name, value } = e.target;
        setZoomRange(prevRange => {
            const newRange = [...prevRange];
            if (name === 'startYear') {
                newRange[0] = parseInt(value, 10);
            } else if (name === 'endYear') {
                newRange[1] = parseInt(value, 10);
            }
            return newRange;
        });
    };

    const zoomedData = filteredData.filter(item => item.Year >= zoomRange[0] && item.Year <= zoomRange[1]);

    return (
        <Container>
            <h1>Dashboard</h1>
            <Form>
                <Form.Group controlId="region">
                    <Form.Label>Región</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese la región"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleFilter} className="mt-3">
                    Filtrar
                </Button>
            </Form>
            <Form className="mt-3">
                <Form.Group controlId="zoomRange">
                    <Form.Label>Rango de Zoom</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control
                                type="number"
                                name="startYear"
                                value={zoomRange[0]}
                                onChange={handleZoomChange}
                                placeholder="Año de inicio"
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                name="endYear"
                                value={zoomRange[1]}
                                onChange={handleZoomChange}
                                placeholder="Año de fin"
                            />
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
            <Row>
                <Col md={12}>
                    <h2>Producción de Energía Renovable por Fuente</h2>
                    <ResponsiveContainer width="100%" height={500}>
                        <BarChart data={zoomedData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Year" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Geo Biomass Other - TWh" fill="#8884d8" />
                            <Bar dataKey="Hydro Generation - TWh" fill="#82ca9d" />
                            <Bar dataKey="Solar Generation - TWh" fill="#ffc658" />
                            <Bar dataKey="Wind Generation - TWh" fill="#ff8042" />
                        </BarChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
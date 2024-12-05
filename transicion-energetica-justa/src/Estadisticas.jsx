import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Estadisticas() {
    const [consumoTotal, setConsumoTotal] = useState('');
    const [porcentajeRenovable, setPorcentajeRenovable] = useState(null);

    const capacidadesRenovables = {
        eolica: 1000, // kWh
        solar: 500, // kWh
        hidroelectrica: 2000, // kWh
        geotermica: 300, // kWh
    };

    const calcularPorcentajeRenovable = (event) => {
        event.preventDefault();
        const totalRenovable = Object.values(capacidadesRenovables).reduce((acc, val) => acc + val, 0);
        const porcentaje = (totalRenovable / consumoTotal) * 100;
        setPorcentajeRenovable(porcentaje.toFixed(2));
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <h2>Estimación del porcentaje de energía renovable</h2>
                    <Form onSubmit={calcularPorcentajeRenovable}>
                        <Form.Group controlId="consumoTotal">
                            <Form.Label>Consumo eléctrico total (kWh)</Form.Label>
                            <Form.Control
                                type="number"
                                value={consumoTotal}
                                onChange={(e) => setConsumoTotal(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">
                            Calcular
                        </Button>
                    </Form>
                    {porcentajeRenovable !== null && (
                        <div className="mt-3">
                            <h4>Porcentaje de energía renovable: {porcentajeRenovable}%</h4>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Estadisticas;
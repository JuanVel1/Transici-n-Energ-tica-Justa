import { useEffect } from "react";
import Papa from "papaparse";
import ColumnFilter from "../table/ColumnFilter";
import CountryFilter from "../table/CountryFilter";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [jsonData, setJsonData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [yearRange, setYearRange] = useState([0, 0]);

  // Paleta de colores para los gráficos
  const COLORS = [
    "#E6F7E6",   // Verde Suave
    "#007BFF",   // Azul Brillante
    "#E6F2FA",   // Azul Claro
    "#003B73",   // Azul Oscuro
    "#FFC107",   // Amarillo Solar
    "#FFF9DB",   // Amarillo Suave
  ];

  // Cargar archivo CSV y procesarlo
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const data = result.data.map((row) =>
          Object.fromEntries(
            Object.entries(row).map(([key, value]) => [key.trim(), value.trim()])
          )
        );
        setJsonData(data);
        setColumns(Object.keys(data[0]));
        setVisibleColumns(Object.keys(data[0]));

        // Determinar años disponibles
        const years = [...new Set(data.map((row) => parseInt(row.year) || 0))];
        years.sort((a, b) => a - b);
        setYearRange([years[0], years[years.length - 1]]);
        setFilteredData(data);
      },
    });
  };

  // Filtrar datos
  const applyFilters = () => {
    const filtered = jsonData.filter((row) => {
      const year = parseInt(row.year) || 0;
      return (
        (!selectedCountries.length ||
          selectedCountries.includes(row.entity || "")) &&
        year >= yearRange[0] &&
        year <= yearRange[1]
      );
    });
    setFilteredData(filtered);
  };

  // Datos para gráficos
  const generateBarChartData = () => ({
    labels: filteredData.map((row) => row.entity),
    datasets: visibleColumns
      .filter((col) => col.toLowerCase().includes("generation"))
      .map((col, index) => ({
        label: col,
        data: filteredData.map((row) => parseFloat(row[col]) || 0),
        backgroundColor: COLORS[index % COLORS.length],
      })),
  });

  const generatePieChartData = () => {
    const total = visibleColumns
      .filter((col) => col.toLowerCase().includes("electricity"))
      .map((col) =>
        filteredData.reduce((sum, row) => sum + (parseFloat(row[col]) || 0), 0)
      );

    return {
      labels: visibleColumns.filter((col) =>
        col.toLowerCase().includes("electricity")
      ),
      datasets: [
        {
          data: total,
          backgroundColor: COLORS.slice(0, total.length),
        },
      ],
    };
  };

  const generateLineChartData = () => ({
    labels: [...new Set(filteredData.map((row) => row.year))].sort(),
    datasets: visibleColumns
      .filter((col) => col.toLowerCase().includes("capacity"))
      .map((col, index) => ({
        label: col,
        data: filteredData
          .filter((row) => row[col])
          .map((row) => parseFloat(row[col]) || 0),
        borderColor: COLORS[index % COLORS.length],
        fill: false,
      })),
  });

  const generateAreaChartData = () => ({
    labels: [...new Set(filteredData.map((row) => row.year))].sort(),
    datasets: visibleColumns
      .filter((col) => col.toLowerCase().includes("energy"))
      .map((col, index) => ({
        label: col,
        data: filteredData
          .filter((row) => row[col])
          .map((row) => parseFloat(row[col]) || 0),
        backgroundColor: `${COLORS[index % COLORS.length]}80`, // Opacidad
        borderColor: COLORS[index % COLORS.length],
        fill: true,
      })),
  });

  // Aplicar filtros automáticamente cuando cambien
  useEffect(() => {
    applyFilters();
  }, [selectedCountries, yearRange, visibleColumns, jsonData]);

  return (
    <div className="p-6 bg-blue-50 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Dashboard de Energía Renovable
      </h1>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="hidden"
        id="file-upload"
      />
      <label
        htmlFor="file-upload"
        className="mt-2 w-full bg-blue-700 text-white p-2 rounded hover:bg-blue-800 transition duration-300 text-center block"
      >
        Elegir archivo
      </label>

      <div className="grid grid-cols-4 gap-6">
        {/* Filtros */}
        <div className="col-span-1 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-blue-700">Filtros</h2>
          <ColumnFilter
            headers={columns}
            visibleColumns={visibleColumns}
            setVisibleColumns={setVisibleColumns}
          />
          <CountryFilter
            uniqueCountries={[...new Set(jsonData.map((row) => row.entity))]}
            selectedCountries={selectedCountries}
            setSelectedCountries={setSelectedCountries}
          />
          <div className="mt-4">
            <label className="block font-semibold text-gray-600 mb-2">
              Rango de Años:
            </label>
            <input
              type="number"
              className="p-2 border rounded w-full mb-2"
              value={yearRange[0]}
              onChange={(e) =>
                setYearRange([parseInt(e.target.value), yearRange[1]])
              }
            />
            <input
              type="number"
              className="p-2 border rounded w-full"
              value={yearRange[1]}
              onChange={(e) =>
                setYearRange([yearRange[0], parseInt(e.target.value)])
              }
            />
          </div>
        </div>

        {/* Gráficos */}
        <div className="col-span-3 grid grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              Producción de Energía Renovable
            </h3>
            <Bar data={generateBarChartData()} options={{ responsive: true }} />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              Participación de Energías Renovables
            </h3>
            <Pie data={generatePieChartData()} options={{ responsive: true }} />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              Tendencia en la Capacidad Instalada
            </h3>
            <Line
              data={generateLineChartData()}
              options={{ responsive: true }}
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              Comparación de Energías Renovable y Convencional
            </h3>
            <Line
              data={generateAreaChartData()}
              options={{
                responsive: true,
                elements: { line: { tension: 0.4 } },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

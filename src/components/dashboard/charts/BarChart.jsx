import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: [
      "Generación Eólica",
      "Consumo de Energía Solar",
      "Consumo de Hidroeléctrica",
      "Producción de Biocombustibles",
      "Capacidad Instalada Geotérmica",
    ],
    datasets: [
      {
        label: "Producción de Energía (TWh)",
        data: [200, 150, 300, 100, 50],
        backgroundColor: [
          "#007BFF",     // Azul Brillante
          "#FFC107",     // Amarillo Solar
          "#E6F7E6",     // Verde Suave
          "#FF5722",     // Un color de contraste
          "#003B73"      // Azul Oscuro
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { 
        display: true, 
        position: "top",
        labels: {
          color: "#343A40" // Gris Oscuro para texto de leyenda
        }
      },
    },
  };

  return (
    <div className="bg-blue-50 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Producción de Energía Renovable
      </h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
import React from "react";
import { Line } from "react-chartjs-2";

const AreaChart = () => {
  const data = {
    labels: ["2010", "2012", "2014", "2016", "2018", "2020"],
    datasets: [
      {
        label: "Consumo de Energía Renovable (TWh)",
        data: [100, 200, 300, 400, 500, 600],
        backgroundColor: "rgba(0, 59, 115, 0.5)", // Azul Oscuro con transparencia
        borderColor: "#003B73",
        fill: true,
      },
      {
        label: "Consumo de Energía Convencional (TWh)",
        data: [800, 700, 600, 500, 400, 300],
        backgroundColor: "rgba(108, 117, 125, 0.5)", // Gris Medio con transparencia
        borderColor: "#6C757D",
        fill: true,
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
        Comparación de Energías
      </h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default AreaChart;
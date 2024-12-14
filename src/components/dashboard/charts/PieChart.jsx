import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const data = {
    labels: [
      "Energías Renovables",
      "Eólica",
      "Solar",
      "Hidro",
    ],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: [
          "#003B73",   // Azul Oscuro
          "#007BFF",   // Azul Brillante
          "#FFC107",   // Amarillo Solar
          "#E6F7E6"    // Verde Suave
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
        Distribución de Energías Renovables
      </h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;

import React, { useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const MonthlyActivityChart = () => {
  const chartRef = useRef(null);

  const [data, setData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Appointments",
        data: [30, 45, 35, 55, 40, 60, 45],
        borderColor: "#5754a7", // Tailwind blue
        backgroundColor: "rgba(87, 84, 167, 0.3)", // Semi-transparent blue fill
        pointBorderColor: "#5754a7",
        tension: 0.4, // Smooth lines
        fill: "start", // Fill below the line
        hoverRadius: 5,
        hoverBorderWidth: 3,
      },
      {
        label: "New Patients",
        data: [50, 30, 75, 30, 70, 40, 100],
        borderColor: "#38cae0", // Tailwind green
        backgroundColor: "rgba(0, 0, 0, 0)", // No background color
        pointBackgroundColor: "#38cae0",
        tension: 0.4,
        hoverRadius: 5,
        hoverBorderWidth: 3,
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            family: "Poppins, sans-serif",
          },
          color: "#374151", // Tailwind gray-700
        },
      },
      title: {
        display: true,
        text: "Dynamic Appointments Over Time",
        font: {
          size: 20,
          family: "Poppins, sans-serif",
          weight: "600",
        },
        color: "#1F2937", // Tailwind gray-800
      },
      tooltip: {
        backgroundColor: "#1F2937",
        titleFont: {
          size: 14,
          family: "Poppins, sans-serif",
        },
        bodyFont: {
          size: 12,
          family: "Poppins, sans-serif",
        },
        padding: 10,
        borderWidth: 1,
        borderColor: "#4B5563",
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0)", // Remove gridlines
          drawBorder: false,
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 12,
            family: "Poppins, sans-serif",
          },
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0)", // Remove gridlines
          drawBorder: false,
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 12,
            family: "Poppins, sans-serif",
          },
        },
        beginAtZero: true,
      },
    },
    animation: {
      duration: 500, // Smooth animation between updates
      easing: "easeInOutQuad",
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-8">
      <h2 className="font-semibold mb-3">Activity</h2>
      <div className="">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default MonthlyActivityChart;

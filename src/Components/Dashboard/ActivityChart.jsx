
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
  Filler,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

const MonthlyActivityChart = () => {
  const chartRef = useRef(null);

  const [data, setData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Appointments",
        data: [30, 45, 35, 55, 40, 60, 45],
        borderColor: "#5754a7", // Line color
        backgroundColor: (ctx) => {
          const chart = ctx.chart;
          const { ctx: canvasCtx, chartArea } = chart;

          if (!chartArea) {
            return "#dddbff"; // Fallback for initial render
          }

          // Create gradient
          const gradient = canvasCtx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, "#c8c4ff"); // Semi-transparent top color
          gradient.addColorStop(1, "rgba(255, 255, 255, 0.3)"); // More transparent bottom color
          return gradient;
        },
        pointBorderColor: "#5754a7",
        tension: 0.4,
        fill: true, // Enable gradient fill
        order: 1, // Draw first (background layer)
      },
      {
        label: "New Patients",
        data: [50, 30, 75, 30, 70, 40, 100],
        borderColor: "#38cae0", // Line color
        backgroundColor: "rgba(0, 0, 0, 0)", // Transparent
        pointBackgroundColor: "#38cae0",
        borderWidth: 3, // Thicker line
        pointRadius: 3, // Larger points
        tension: 0.4, // Smooth curve
        fill: false, // No fill
        order: 2, // Draw on top
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
          color: "#374151",
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
        color: "#1F2937",
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
      duration: 500,
      easing: "easeInOutQuad",
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 2xl:p-6 mb-8">
      <h2 className="font-semibold 2xl:text-xl mb-3">Activity</h2>
      <div>
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default MonthlyActivityChart;

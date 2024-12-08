// import React, { useRef, useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
//   Filler,
// } from "chart.js";

// // ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
//   Filler
// );

// const MonthlyActivityChart = () => {
//   const chartRef = useRef(null);

//   // const [data, setData] = useState({
//   //   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   //   datasets: [
//   //     {
//   //       label: "Appointments",
//   //       data: [30, 45, 35, 55, 40, 60, 45],
//   //       borderColor: "#5754a7", // Line color
//   //       backgroundColor: (ctx) => {
//   //         const chart = ctx.chart;
//   //         const { ctx: canvasCtx, chartArea } = chart;

//   //         if (!chartArea) {
//   //           return "#dddbff"; // Fallback for initial render
//   //         }

//   //         // Create gradient
//   //         const gradient = canvasCtx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
//   //         gradient.addColorStop(0, "#c8c4ff"); // Semi-transparent top color
//   //         gradient.addColorStop(1, "rgba(255, 255, 255, 0.3)"); // More transparent bottom color
//   //         return gradient;
//   //       },
//   //       pointBorderColor: "#5754a7",
//   //       tension: 0.4,
//   //       fill: true, // Enable gradient fill
//   //       order: 1, // Draw first (background layer)
//   //     },
//   //     {
//   //       label: "New Patients",
//   //       data: [50, 30, 75, 30, 70, 40, 100],
//   //       borderColor: "#38cae0",
//   //       backgroundColor: "rgba(0, 0, 0, 0)",
//   //       // pointBackgroundColor: "#38cae0",
//   //       // borderWidth: 3,
//   //       // pointRadius: 3,
//   //       tension: 0.4,
//   //       fill: false,
//   //       order: 2,
//   //       // hoverBorderWidth: 3,
//   //     },
//   //   ],
//   // });

//   // const options = {
//   //   responsive: true,
//   //   plugins: {
//   //     legend: {
//   //       position: "top",
//   //       labels: {
//   //         font: {
//   //           size: 14,
//   //           family: "Poppins, sans-serif",
//   //         },
//   //         color: "#374151",
//   //       },
//   //     },
//   //     title: {
//   //       display: true,
//   //       text: "Dynamic Appointments Over Time",
//   //       font: {
//   //         size: 20,
//   //         family: "Poppins, sans-serif",
//   //         weight: "600",
//   //       },
//   //       color: "#1F2937",
//   //     },
//   //     tooltip: {
//   //       backgroundColor: "#1F2937",
//   //       titleFont: {
//   //         size: 14,
//   //         family: "Poppins, sans-serif",
//   //       },
//   //       bodyFont: {
//   //         size: 12,
//   //         family: "Poppins, sans-serif",
//   //       },
//   //       padding: 10,
//   //       borderWidth: 1,
//   //       borderColor: "#4B5563",
//   //     },
//   //   },
//   //   scales: {
//   //     x: {
//   //       grid: {
//   //         color: "rgba(0, 0, 0, 0)", // Remove gridlines
//   //       },
//   //       ticks: {
//   //         color: "#6B7280",
//   //         font: {
//   //           size: 12,
//   //           family: "Poppins, sans-serif",
//   //         },
//   //       },
//   //     },
//   //     y: {
//   //       grid: {
//   //         color: "rgba(0, 0, 0, 0)", // Remove gridlines
//   //       },
//   //       ticks: {
//   //         color: "#6B7280",
//   //         font: {
//   //           size: 12,
//   //           family: "Poppins, sans-serif",
//   //         },
//   //       },
//   //       beginAtZero: true,
//   //     },
//   //   },
//   //   animation: {
//   //     duration: 500,
//   //     easing: "easeInOutQuad",
//   //   },
//   // };

//   const [data, setData] = useState({
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "Appointments",
//         data: [30, 45, 35, 55, 40, 60, 45],
//         borderColor: "#5754a7", // Line color
//         backgroundColor: (ctx) => {
//           const chart = ctx.chart;
//           const { ctx: canvasCtx, chartArea } = chart;

//           if (!chartArea) {
//             return "#dddbff"; // Fallback for initial render
//           }

//           // Create gradient
//           const gradient = canvasCtx.createLinearGradient(
//             0,
//             chartArea.top,
//             0,
//             chartArea.bottom
//           );
//           gradient.addColorStop(0, "#c8c4ff"); // Semi-transparent top color
//           gradient.addColorStop(1, "rgba(255, 255, 255, 0.3)"); // More transparent bottom color
//           return gradient;
//         },
//         tension: 0.4,
//         pointRadius: 0, // Hide points by default
//         pointHoverRadius: 7, // Show points on hover
//         fill: true, // Maintain the gradient background
//       },
//       {
//         label: "New Patients",
//         data: [50, 30, 75, 30, 70, 40, 100],
//         borderColor: "#38cae0", // Line color
//         // backgroundColor: "rgba(0, 0, 0, 0)",
//         tension: 0.4,
//         pointRadius: 0, // Hide points by default
//         pointHoverRadius: 7, // Show points on hover
//       },
//     ],
//   });

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "bottom",

//         labels: {
//           font: {
//             size: 14,
//             family: "Poppins, sans-serif",
//           },
//           color: "#374151",
//         },
//       },
//       title: {
//         display: true,
//         text: "Dynamic Appointments Over Time",
//         font: {
//           size: 20,
//           family: "Poppins, sans-serif",
//           weight: "600",
//         },
//         color: "#1F2937",
//       },
//       tooltip: {
//         enabled: true, // Ensure tooltips are enabled
//         backgroundColor: "#1F2937",
//         titleFont: {
//           size: 14,
//           family: "Poppins, sans-serif",
//         },
//         bodyFont: {
//           size: 12,
//           family: "Poppins, sans-serif",
//         },
//         padding: 10,
//         borderWidth: 1,
//         borderColor: "#4B5563",
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           color: "rgba(0, 0, 0, 0)", // Remove gridlines
//         },
//         ticks: {
//           color: "#6B7280",
//           font: {
//             size: 12,
//             family: "Poppins, sans-serif",
//           },
//         },
//       },
//       y: {
//         grid: {
//           color: "rgba(0, 0, 0, 0)", // Remove gridlines
//         },
//         ticks: {
//           color: "#6B7280",
//           font: {
//             size: 12,
//             family: "Poppins, sans-serif",
//           },
//         },
//         beginAtZero: true,
//       },
//     },
//     animation: {
//       duration: 500,
//       easing: "easeInOutQuad",
//     },
//   };



//   return (
//     <div className="bg-white shadow rounded-lg p-4 2xl:p-6 mb-8">
//       <h2 className="font-semibold 2xl:text-xl mb-3">Activity</h2>
//       <div>
//         <Line ref={chartRef} data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default MonthlyActivityChart;








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
import { color } from "chart.js/helpers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

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
          const gradient = canvasCtx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "#c8c4ff"); // Semi-transparent top color
          gradient.addColorStop(1, "rgba(255, 255, 255, 0.3)"); // More transparent bottom color
          return gradient;
        },
        tension: 0.4,
        pointRadius: 0, // Hide points by default
        pointHoverRadius: 7, // Show points on hover
        fill: true, // Maintain the gradient background
      },
      {
        label: "New Patients",
        data: [50, 30, 75, 30, 70, 40, 100],
        borderColor: "#38cae0", // Line color
        tension: 0.4,
        pointRadius: 0, // Hide points by default
        pointHoverRadius: 7, // Show points on hover
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 10, // Adjust width of legend boxes
          boxHeight: 10,
          
          font: {
            size: 14,
            family: "Poppins, sans-serif",
          },
          color: "#374151",
          generateLabels: (chart) => {
            const labels = chart.data.datasets.map((dataset) => ({
              text: dataset.label,
              fillStyle: dataset.borderColor, // Legend background color same as border color
              strokeStyle: dataset.borderColor, // Legend border color same as line color
              lineWidth: 2, // Set the border thickness
            }));
            return labels;
          },
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
        // position: 'top',
        enabled: true,
        backgroundColor: "#1F2937",
        color: '#1F2937',
        titleFont: {
          size: 14,
          family: "Poppins, sans-serif",
          color: '#1F2937',
        },
        bodyFont: {
          size: 12,
          family: "Poppins, sans-serif",
          color: '#1F2937',
        },
        padding: 10,
        borderWidth: 1,
        borderColor: "#4B5563",
        color: '#1F2937',
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


import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 2",
      data: [20, 150, 122, 18, 196, 155, 80, 20, 60, 30, 70, 120],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function DashboardCharts() {
  return (
    <div className={"h-[500px] w-full p-5"}>
      <Bar options={options} data={data} />
    </div>
  );
}

export default DashboardCharts;

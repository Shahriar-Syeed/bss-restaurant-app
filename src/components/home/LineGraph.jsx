import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend
);

export default function LineGraph() {
  // const options = {};

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const lineChartData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Steps by s",
        data: [3000, 5000, 4000, 6000, 8000, 7000, 9000],
        borderColor: "rgb(75, 192, 192)",
        borderRadius: '3rem',
        fill: false,
        tension: '0.5',
      },
      {
        label: "Steps by a",
        data: [2500, 4500, 5500, 5000, 1200, 3000, 6500],
        borderColor: "red",
        fill: true,
        // backgroundColor: 'yellow',
        tension: '0.5',
        stepped: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };
  return (
    <>
      <Line options={options} data={lineChartData} className="bg-white rounded-lg p-9 shadow-xl max-h-96 max-w-full" />
    </>
  );
}

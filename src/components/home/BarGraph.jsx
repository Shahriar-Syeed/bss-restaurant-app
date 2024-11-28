import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
 BarElement,
  Title,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Legend
);

export default function BarGraph() {
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

    ],
    datasets: [
      {
        label: "Steps by s",
        data: [3000, 5000, 4000, 6000, 8000, 7000, ],
        borderColor: ["blue", "green", "orange", "black", "yellow","pink"],
        borderWidth: 3,
        backgroundColor: 'skyblue',
        fill: false,
        borderRadius: '1.5rem',
      },
      {
        label: "Steps by a",
        data: [2500, 4500, 5500, 5000, 1200, 3000, 6500],
        borderColor: "red",
        fill: false,
      },
    ],
  };
  return (
    <>
      <Bar options={options} data={lineChartData} className="bg-white rounded-lg p-9 shadow-xl  max-w-full max-h-96" />
    </>
  );
}

import BarGraph from "../components/home/BarGraph.jsx";
import LineGraph from "../components/home/LineGraph.jsx";


export default function HomePage() {
  return (
    <div className="grid xl:grid-cols-2 gap-3">
      <LineGraph/>
      <BarGraph/>

    </div>
  )
}

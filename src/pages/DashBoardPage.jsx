import { createBrowserRouter } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/Navbar";
import EmployeePage from "./EmployeePage";
import HomePage from "./HomePage";


const router = createBrowserRouter([
  {path:'/bss-restaurant-app/admin/', element:<HomePage/> },
  {path:'/bss-restaurant-app/admin/', element:<HomePage/> },
  {path:'/bss-restaurant-app/admin/', element:<HomePage/> },
  {path:'/bss-restaurant-app/admin/', element:<HomePage/> },
]);

export default function DashBoard() {
  return (
    <>
      <Sidebar />

      <div className="lg:ml-64 bg--page min-h-svh">
        <Navbar />
        <div className="xl:p-10 lg:p-8 md:p-6 sm:p-4 p-2">
          <EmployeePage/>
        </div>
      </div>
    </>
  );
}

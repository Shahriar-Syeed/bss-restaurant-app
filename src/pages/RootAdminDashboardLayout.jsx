import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/Navbar";


export default function RootAdminDashboardLayout() {
  return (
    <>
      <Sidebar/>

      <div className="xl:ml-64 bg--page min-h-svh">
        <Navbar/>
        <div className="xl:p-10 lg:p-8 md:p-6 sm:p-4 p-2">
          <Outlet/>
        </div>
      </div>
    </>
  )
}

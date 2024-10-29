import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/Navbar";
import CartWithDrawer from "../components/dashboard/CartWithDrawer";

export default function RootAdminDashboardLayout() {
  return (
    <>
      <div className="xl:ml-64 bg--page min-h-svh">
        <Navbar>
          <div className="items-stretch self-stretch flex-grow flex gap-1">
            <Link
              to="/bss-restaurant-app/admin"
              className="button-primary--dark cursor-pointer py-3 rounded-md px-6 hidden sm:block"
            >
              Admin
            </Link>
            <CartWithDrawer />
            <Sidebar />
          </div>
        </Navbar>
        <div className="xl:p-10 lg:p-8 md:p-6 sm:p-4 p-2">
          <Outlet />
        </div>
      </div>
    </>
  );
}

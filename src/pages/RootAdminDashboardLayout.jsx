import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/Navbar";
import CartWithDrawer from "../components/new-order/CartWithDrawer";

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
            <Sidebar />
            <CartWithDrawer />
          </div>
        </Navbar>
        <div className="xl:p-10 lg:p-8 md:p-6 sm:p-4 p-2 pb-1 xl:pb-4 lg:pb-3 md:pb-2 sm:pb-1 relative min-h-[calc(100svh-5rem)] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}

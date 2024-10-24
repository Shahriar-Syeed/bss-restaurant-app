import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/Navbar";
import Button from "../components/UI/Button";

export default function RootAdminDashboardLayout() {
  return (
    <>
      <Sidebar />

      <div className="xl:ml-64 bg--page min-h-svh">
        <Navbar>
          <div className="items-stretch self-stretch flex-grow flex gap-2">
            <Link
              to="/bss-restaurant-app/admin"
              className="button-primary--dark cursor-pointer py-3 rounded-md px-6 hidden sm:block"
            >
              Admin
            </Link>
            <Button className=" relative rounded-md hover:bg-red-800 px-5">
              <svg
                className="h-6 fill-white css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ShoppingBasketIcon"
              >
                <path d="m17.21 9-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM9 9l3-4.4L15 9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"></path>
              </svg>
              <span className="absolute right-3 top-0">0</span>
            </Button>
          </div>
        </Navbar>
        <div className="xl:p-10 lg:p-8 md:p-6 sm:p-4 p-2">
          <Outlet />
        </div>
      </div>
    </>
  );
}

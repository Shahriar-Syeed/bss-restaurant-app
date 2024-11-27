import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import adminImage from "../../assets/admin.png";
import Button from "../UI/Button.jsx";
import LogoutIcon from "../svg/LogoutIcon.jsx";
import HomeIcon from "../svg/HomeIcon.jsx";
import EmployeeIcon from "../svg/EmployeeIcon.jsx";
import OrderIcon from "../svg/OrderIcon.jsx";
import NewOrderIcon from "../svg/NewOrderIcon.jsx";
import FoodIcon from "../svg/FoodIcon.jsx";
import TableIcon from "../svg/TableIcon.jsx";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState();

  const sidebarRef = useRef();
  const navigate = useNavigate();

  const userInfo = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    const handler = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        setShowSidebar(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const sidebarCss = showSidebar
    ? "shadow-xl fixed sm:top-0 bottom-0 sm:bottom-auto end-0 sm:end-auto start-0 z-50 sm:w-64 sm:h-screen transition-transform  transform-none"
    : "shadow-xl fixed sm:top-0 bottom-0 sm:bottom-auto end-0 sm:end-auto start-0 z-40 sm:w-64 sm:h-screen transition-transform xl:translate-x-0 sm:-translate-x-full";

  function sidebarToggle() {
    setShowSidebar((prev) => !prev);
  }

  function goToLoginPage() {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    navigate("/bss-restaurant-app/login");
  }

  return (
    <div ref={sidebarRef} className="flex sm:ps-4 ">
      <Button
        aria-controls="defaultSidebar"
        type="button"
        className="hidden sm:flex items-center p-1 text-sm text-primary rounded-lg xl:hidden hover:bg-red-800 focus:outline-none outline-none"
        onClick={sidebarToggle}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
        </svg>
      </Button>
      <Button
        onClick={goToLoginPage}
        className="flex sm:hidden items-center p-1 text-sm text-primary rounded-lg xl:hidden hover:bg-red-800 focus:outline-none outline-none "
        type="button"
      >
        <LogoutIcon className="w-6 h-6 fill-white" />
      </Button>

      <aside id="defaultSidebar" className={sidebarCss} aria-label="Sidebar">
        <div className="sm:h-full sm:px-3 py-4 overflow-y-auto bg-gray-50 sm:flex sm:justify-between sm:flex-col">
          <ul className="sm:space-y-2 font-medium sm:h-full flex flex-wrap sm:block justify-around">
            <li className="hidden sm:list-item">
              <Link
                to="/bss-restaurant-app/admin"
                className="flex items-center p-2 text-primary rounded-lg text-primary"
              >
                <div className="h-10 w-10 ">
                  <img
                    src={adminImage}
                    alt="User Image"
                    className="w-full h-full object-cover rounded-50"
                  />
                </div>
                <div className="ms-3 d">
                  <h5>{userInfo.fullName}</h5>
                  <p>{userInfo.email}</p>
                </div>
              </Link>
              <hr />
            </li>
            <li>
              <NavLink
                to="/bss-restaurant-app/admin/home"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-primary rounded-lg  bg-rose-100 text-primary group"
                    : "flex items-center p-2 text-primary rounded-lg  hover:bg-rose-100 text-primary group"
                }
                onClick={sidebarToggle}
                end
              >
                <HomeIcon className="flex-shrink-0 w-5 h-5 text-primary transition duration-75" />
                <span className="flex-1 ms-3 whitespace-nowrap hidden sm:inline">
                  Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bss-restaurant-app/admin/employee/employee-list"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-primary rounded-lg  bg-rose-100 text-primary group"
                    : "flex items-center p-2 text-primary rounded-lg  hover:bg-rose-100 text-primary group"
                }
                onClick={sidebarToggle}
              >
                <EmployeeIcon className="flex-shrink-0 w-5 h-5 text-primary transition duration-75" />
                <span className="flex-1 ms-3 whitespace-nowrap hidden sm:inline">
                  Employees
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bss-restaurant-app/admin/tables"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-primary rounded-lg  bg-rose-100 text-primary group"
                    : "flex items-center p-2 text-primary rounded-lg  hover:bg-rose-100 text-primary group"
                }
                onClick={sidebarToggle}
              >
                <TableIcon className="flex-shrink-0 w-5 h-5 text-primary transition duration-75" />
                <span className="flex-1 ms-3 whitespace-nowrap hidden sm:inline">
                  Tables
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bss-restaurant-app/admin/foods"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-primary rounded-lg  bg-rose-200 text-primary group"
                    : "flex items-center p-2 text-primary rounded-lg  hover:bg-rose-100 text-primary group"
                }
                onClick={sidebarToggle}
              >
                <FoodIcon className="flex-shrink-0 w-5 h-5 text-primary transition duration-75" />
              
                <span className="flex-1 ms-3 whitespace-nowrap hidden sm:inline">
                  Foods
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bss-restaurant-app/admin/order"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-primary rounded-lg  bg-rose-100 text-primary group"
                    : "flex items-center p-2 text-primary rounded-lg  hover:bg-rose-100 text-primary group"
                }
                onClick={sidebarToggle}
              >
                <NewOrderIcon className="flex-shrink-0 w-5 h-5 text-primary  transition duration-75" />
                
                <span className="flex-1 ms-3 whitespace-nowrap hidden sm:inline">
                  New Order
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bss-restaurant-app/admin/new-order"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-primary rounded-lg  bg-rose-100 text-primary group"
                    : "flex items-center p-2 text-primary rounded-lg  hover:bg-rose-100 text-primary group"
                }
                onClick={sidebarToggle}
              >
                <OrderIcon className="flex-shrink-0 w-5 h-5 text-primary transition duration-75" />
               
                <span className="flex-1 ms-3 whitespace-nowrap hidden sm:inline">
                  Orders
                </span>
              </NavLink>
            </li>
          </ul>
          <ul className="hidden sm:block">
            <li>
              <Button
                onClick={goToLoginPage}
                className="w-full button__outline--primary rounded-lg"
                type="button"
              >
                <LogoutIcon className="w-5 h-5 fill-inherit" />
                <span>Logout</span>
              </Button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

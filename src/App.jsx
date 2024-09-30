import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import EmployeeListPage from "./pages/EmployeeListPage.jsx";
import EmployeeAddPage from "./components/employee/EmployeeAddPage.jsx";
import EmployeeDetailPage from "./components/employee/EmployeeDetailPage.jsx";
import EmployeeEditPage from "./components/employee/EmployeeEditPage.jsx";
import FoodsPage from "./pages/FoodsPage.jsx";
import EmployeeTablesListPage from "./pages/EmployeeTablesListPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import NewOrderPage from "./pages/NewOrderPage.jsx";
import RootAdminDashboardLayout from "./pages/RootAdminDashboardLayout.jsx";
import TableAddPage from "./components/employee-table/TableAddPage.jsx";
import RootLayout from "./pages/Root.jsx";
import RootEmployeeLayout from "./pages/RootEmployee.jsx";
import RootEmployeeTables from "./pages/RootEmployeeTables.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import UserInfoPage from "./pages/UserInfoPage.jsx";
// import { employeeLoader } from "./components/employee/employeeLoader.js";

const router = createBrowserRouter([
  {
    path: "/bss-restaurant-app",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      // {
      //   path: '/logout',
      //   loader: () => {
      //     return redirect('/bss-restaurant-app')
      //   },
      // },
      {
        path: "admin",
        element: <RootAdminDashboardLayout />,
        children: [
          { index: true, element: <UserInfoPage /> },
          { path: "home", element: <HomePage /> },
          {
            path: "employee",
            element: <RootEmployeeLayout />,
            children: [
              {
                index: true,
                element: <EmployeeListPage />,
                // loader: employeeLoader,
              },
              {
                path: "employee-add",
                element: <EmployeeAddPage />,
              },
              {
                path: ":employeeId",
                element: <EmployeeDetailPage />,
              },
              {
                path: ":employeeId/employee-edit",
                element: <EmployeeEditPage />,
              },
            ],
          },

          {
            path: "tables",
            element: <RootEmployeeTables />,
            children: [
              { index: true, element: <EmployeeTablesListPage /> },
              { path: "add-table", element: <TableAddPage /> },
            ],
          },
          { path: "foods", element: <FoodsPage /> },
          { path: "order", element: <OrderPage /> },
          {
            path: "new-order",
            element: <NewOrderPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

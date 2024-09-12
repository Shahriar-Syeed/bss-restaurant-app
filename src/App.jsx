import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import EmployeePage from "./pages/EmployeePage.jsx";
import EmployeeAddPage from "./pages/EmployeeAddPage.jsx";
import EmployeeDetailPage from "./pages/EmployeeDetailPage.jsx";
import EmployeeEditPage from "./pages/EmployeeEditPage.jsx";
import FoodsPage from "./pages/FoodsPage.jsx";
import TablePage from "./pages/TablePage.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import NewOrderPage from "./pages/NewOrderPage.jsx";
import RootAdminDashboardLayout from "./pages/RootAdminDashboardLayout.jsx";
import TableAddPage from "./pages/TableAddPage.jsx";
import RootLayout from "./pages/Root.jsx";
import RootEmployeeLayout from "./pages/RootEmployee.jsx";
// import { employeeLoader } from "./components/employee/employeeLoader.js";

const router = createBrowserRouter([
  {
    path: "/bss-restaurant-app",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "admin",
        element: <RootAdminDashboardLayout />,
        children: [
          { path: "home", element: <HomePage /> },
          {
            path: "employee",
            element: <RootEmployeeLayout />,
            children: [
              {
                index: true,
                element: <EmployeePage />,
                // loader: employeeLoader,
              },
              {
                path: ":employeeId",
                element: <EmployeeDetailPage />,
              },
              {
                path: "employee-add",
                element: <EmployeeAddPage />,
              },
              {
                path: ":employeeId/employee-edit",
                element: <EmployeeEditPage />,
              },
            ],
          },
          { path: "table", element: <TablePage /> },
          { path: "table/table-add", element: <TableAddPage /> },
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

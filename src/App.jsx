
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import EmployeePage from './pages/EmployeePage.jsx';
import EmployeeAddPage from './pages/EmployeeAddPage.jsx';
import EmployeeDetailPage from './pages/EmployeeDetailPage.jsx';
import EmployeeEditPage from './pages/EmployeeEditPage.jsx';
import FoodsPage from './pages/FoodsPage.jsx';
import TablePage from './pages/TablePage.jsx';
import OrderPage from './pages/OrderPage.jsx';
import NewOrderPage from './pages/NewOrderPage.jsx';
import RootAdminDashboardLayout from './pages/RootAdminDashboardLayout.jsx';
import TableAddPage from './pages/TableAddPage.jsx';


const router = createBrowserRouter([
  {
    path: '/bss-restaurant-app/',
    element: <LoginPage/>,
  },
  {
    path: '/bss-restaurant-app/admin/',
    element: <RootAdminDashboardLayout/>,
    children: [
      { path: "/bss-restaurant-app/admin/", element: <HomePage /> },
      { path: "/bss-restaurant-app/admin/employee", element: <EmployeePage /> },
      {
        path: "/bss-restaurant-app/admin/employee/:employeeId",
        element: <EmployeeDetailPage />,
      },
      {
        path: "/bss-restaurant-app/admin/employee/employee-add",
        element: <EmployeeAddPage />,
      },
      {
        path: "/bss-restaurant-app/admin/employee/:employeeId/employee-edit",
        element: <EmployeeEditPage />,
      },
      { path: "/bss-restaurant-app/admin/table", element: <TablePage /> },
      { path: "/bss-restaurant-app/admin/table/table-add", element: <TableAddPage/> },
      { path: "/bss-restaurant-app/admin/foods", element: <FoodsPage /> },
      { path: "/bss-restaurant-app/admin/order", element: <OrderPage /> },
      {
        path: "/bss-restaurant-app/admin/new-order",
        element: <NewOrderPage />,
      },
    ],
  },
  
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoard from './pages/DashBoard.jsx';
import LoginPage from './pages/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: '/bss-restaurant-app/',
    element: <LoginPage/>,
  },
  {
    path: '/admin',
    element: <DashBoard/>
  },
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

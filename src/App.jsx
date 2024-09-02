
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoardPage from './pages/DashBoardPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: '/bss-restaurant-app/',
    element: <LoginPage/>,
  },
  {
    path: '/bss-restaurant-app/admin/',
    element: <DashBoardPage/>
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

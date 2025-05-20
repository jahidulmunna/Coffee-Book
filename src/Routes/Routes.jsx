import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Coffees from './../Pages/Coffees/Coffees';
import Dashboard from './../Pages/Dashboard/Dashboard';
import CoffeeCards from '../Componants/CoffeeCards/CoffeeCards';

const routes = createBrowserRouter([
  {
  path: '/',
  element:<MainLayout> </MainLayout>,
  children:[
    {
        path: '/',
        element: <Home> </Home>,
        loader: () => fetch('../../../public/categories.json'),
        children: [
          {
            path: '/',
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch('../../public/coffees.json')
          },
          {
            path: '/category/:category',
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch('../../public/coffees.json')
          },
        ],
    },
    {
      path: '/coffees',
      element: <Coffees> </Coffees>,
       loader: () => fetch('../../public/coffees.json')
    },
    {
      path: '/dashboard',
      element: <Dashboard> </Dashboard>
    },
   

  ],
},
])
export default routes
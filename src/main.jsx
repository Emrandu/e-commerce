import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Order from './components/Order/Order.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login.jsx';
import cartProductsLoader from './loader/cartProductsLoader.js';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children:[
      {
        path:'/',
        element:<Shop />
      },
      {
        path:'/orders',
        element:<Order />,
        loader: cartProductsLoader
      },
      {
        path:'/inventory',
        element:<Inventory />
      },
      {
        path:'/login',
        element:<Login />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

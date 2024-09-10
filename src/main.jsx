import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Cover from './Homepage/Cover';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[{
      path:'/',
      element:<Cover></Cover>
    }]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

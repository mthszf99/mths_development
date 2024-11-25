import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import Contatos from "./Routes/Contatos.jsx";
import Sobre from './Routes/Sobre.jsx';
import Newsletter from './Routes/Newsletter.jsx';


const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
  children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "sobre",
        element: <Sobre />
      },
      {
        path: "contatos",
        element: <Contatos />
      },
      {
        path: "newsletter",
        element: <Newsletter />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/inicio/Inicio";
import Auth from "../pages/auth/Auth";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
    errorElement: <h1>La pagina no existe</h1>
  },
  {
    path: '/gestion-de-sesion',
    element: <Auth />,

  }
])
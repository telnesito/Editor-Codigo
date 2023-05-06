import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/inicio/Inicio";
import Auth from "../pages/auth/Auth";
import Login from "../componentes/auth/login/Login";
import SingUp from "../componentes/auth/singup/SingUp";
import CodeEditor from "../pages/codeEditor/CodeEditor";

const Router = createBrowserRouter([

  {
    path: '/',
    element: <Inicio />
  },
  {
    path: '/authenticator',
    element: <Auth />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'singup',
        element: <SingUp />
      }
    ]
  },
  {
    path: '/editor',
    element: <CodeEditor />
  }

])

export default Router

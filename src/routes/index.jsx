import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/inicio/Inicio";
import Auth from "../pages/auth/Auth";
import Login from "../componentes/auth/login/Login";
import SingUp from "../componentes/auth/singup/SingUp";
import CodeEditor from "../pages/codeEditor/CodeEditor";
import IndexEditor from "../componentes/codeEditor/code/IndexEditor";
import Projects from "../componentes/codeEditor/projects/projects";

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
    path: '/home',
    element: <CodeEditor />,
    children: [
      {
        path: 'proyectos',
        element: <Projects />
      },
      {
        path: 'editor',
        element: <IndexEditor />
      },
      {
        path: 'ajustes',
        element: <h1>Proyectos</h1>
      }
    ]
  }

])

export default Router


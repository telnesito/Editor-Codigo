import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/inicio/Inicio";
import Auth from "../pages/auth/Auth";
import Login from "../componentes/auth/login/Login";
import SingUp from "../componentes/auth/singup/SingUp";
import CodeEditor from "../pages/codeEditor/CodeEditor";
import IndexEditor from "../componentes/codeEditor/code/IndexEditor";
import Projects from "../componentes/codeEditor/projects/Projects";
import Python from "../componentes/codeEditor/code/Python.";
import Javascript from "../componentes/codeEditor/code/Javascript";
import Web from "../componentes/codeEditor/code/Web";
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
        path: 'ruby',
        element: <IndexEditor />
      },
      {
        path: 'python',
        element: <Python />
      },
      {
        path: 'javascript',
        element: <Javascript />
      },
      {
        path: 'web',
        element: <Web />
      },
      {
        path: 'proyectos',
        element: <Projects />
      },
      {
        path: 'ajustes',
        element: <h1>Proyectos</h1>
      }
    ]
  },


])

export default Router


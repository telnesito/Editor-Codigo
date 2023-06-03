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
import Home from "../componentes/doc/Home";
import Demo from "../componentes/Demo/Demo";
import ErrorPage from "../componentes/Error/ErrorPage";
import AdminView from "../componentes/AdminView/AdminView";
import AdminUsers from "../componentes/AdminView/AdminUsers";
import AdminProjects from "../componentes/AdminView/AdminProjects";
import Admins from "../componentes/AdminView/Admins";
const Router = createBrowserRouter([

  {
    path: '/',
    element: <Inicio />,
    errorElement: <ErrorPage />
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
    path: '/demo',
    element: <Demo></Demo>,
  },
  {
    path: '/home',
    element: <CodeEditor />,
    errorElement: <ErrorPage />,
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
        path: 'doc',
        element: <Home />
      }
    ]
  },
  {
    path: '/administracion',
    element: <AdminView />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'usuarios',
        element: <AdminUsers />
      },
      {
        path: 'proyectos',
        element: <AdminProjects />
      },
      {
        path: 'admins',
        element: <Admins />
      }


    ]
  }


])

export default Router


import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, ScrollRestoration } from 'react-router-dom'
import Router from './routes/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router}>
    <ScrollRestoration />
    <App />
  </RouterProvider>,
)

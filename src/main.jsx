import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ScrollToTop from './functions/ScrollToTop.js'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} >
    <ScrollToTop />
    <App />
  </RouterProvider>,
)

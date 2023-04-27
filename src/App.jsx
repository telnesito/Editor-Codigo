import './App.css'
import Inicio from './pages/inicio/Inicio'
import { Routes, Route } from 'react-router-dom'
import Auth from './pages/auth/Auth'
function App() {

  return (
    <>
      {/* Protitipos de rutas */}

      <Routes >
        <Route path='/' element={<Inicio />} ></Route>
        <Route path='/gestion-de-sesion' element={<Auth />}></Route>

        <Route path='*' element={<h1>Pagina no encontrada</h1>}></Route>
      </Routes>
    </>
  )
}

export default App

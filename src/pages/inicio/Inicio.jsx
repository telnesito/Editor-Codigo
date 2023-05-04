import Beneficios from "../../componentes/inicio/beneficios/Beneficios"
import Header from "../../componentes/inicio/header/Header"
import Hero from "../../componentes/inicio/Hero/Hero"
import Footer from "../../componentes/inicio/footer/Footer"
import Lenguajes from "../../componentes/inicio/lenguajes/Lenguajes"
import Manual from "../../componentes/inicio/manualUsuario/Manual"
const Inicio = () => {
  return (
    <div className="c-page-inicio">
      <Header />
      <Hero />
      <Lenguajes />
      <Manual />
      <Beneficios />
      <Footer />
    </div>
  )
}

export default Inicio
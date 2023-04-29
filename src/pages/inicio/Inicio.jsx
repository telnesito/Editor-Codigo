import Beneficios from "../../componentes/inicio/beneficios/Beneficios"
import Header from "../../componentes/inicio/header/Header"
import Hero from "../../componentes/inicio/Hero/Hero"
import Plantillas from "../../componentes/inicio/plantillas/Plantillas"
import Footer from "../../componentes/inicio/footer/Footer"
import Lenguajes from "../../componentes/inicio/lenguajes/Lenguajes"
const Inicio = () => {
  return (
    <div className="c-page-inicio">
      <Header />
      <Hero />
      <Plantillas />
      <Lenguajes />
      <Beneficios />
      <Footer />
    </div>
  )
}

export default Inicio
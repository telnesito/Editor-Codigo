import Beneficios from "../../componentes/inicio/beneficios/Beneficios"
import Header from "../../componentes/inicio/header/Header"
import Hero from "../../componentes/inicio/Hero/Hero"
import Plantillas from "../../componentes/inicio/plantillas/Plantillas"
import Diviver from "../../componentes/utils/Diviver"
import Footer from "../../componentes/inicio/footer/Footer"
const Inicio = () => {
  return (
    <div className="c-page-inicio">
      <Header />
      <Hero />
      <Diviver />
      <Plantillas />
      <Diviver />
      <Beneficios />
      <Diviver />
      <Footer />
    </div>
  )
}

export default Inicio
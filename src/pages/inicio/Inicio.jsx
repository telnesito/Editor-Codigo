import Beneficios from "../../componentes/inicio/beneficios/Beneficios"
import Header from "../../componentes/inicio/header/Header"
import Hero from "../../componentes/inicio/Hero/Hero"
import Plantillas from "../../componentes/inicio/plantillas/Plantillas"
import Diviver from "../../componentes/utils/Diviver"
const Inicio = () => {
  return (
    <div className="c-page-inicio">
      <Header />
      <Hero />
      <Diviver />
      <Plantillas />
      <Diviver />
      <Beneficios />
    </div>
  )
}

export default Inicio
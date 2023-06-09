import { useEffect, useRef } from "react"
import { useContext } from "react"
import { ContextCode } from "../../../hooks/context/CodeContext"
import OutputComponent from "./OutputComponent"

const Output = () => {

  const refOutput = useRef()
  const refError = useRef()
  const { Code, setCode } = useContext(ContextCode)
  let salida = ''

  const puts = (...argumentos) => {
    for (let i = 0; i < argumentos.length; i++) {
      salida += argumentos[i] + ' '
    }
    salida += '<br/>'
  }
  useEffect(() => {

    const compileCode = () => {

      try {
        console.log = puts
        let output = Opal.compile(Code)
        eval(output)

        if (salida) {
          refError.current.innerHTML = ''
          refOutput.current.innerHTML = salida
        }

      } catch ({ name, message, backtrace }) {
        refOutput.current.innerHTML = ''
        refError.current.innerHTML = `${name}: ${message} <br/> ${backtrace[0]}`
      }
    }
    compileCode()

  }, [Code])




  return (
    <OutputComponent refError={refError} refOutput={refOutput} />
  )
}

export default Output

// Azul oscuro: #007ACC
// Rojo oscuro: #D16969
// Verde oscuro: #3FA33F
// Amarillo oscuro: #EFD090
// Naranja oscuro: #FFA500
// Morado oscuro: #B33FB3
// Gris oscuro: #1E1E1E
// Gris medio: #4D4D4D
// Gris claro: #CCCCCC
import { useEffect, useRef } from "react"
import { useContext } from "react"
import { ContextCode } from "../../../hooks/context/CodeContext"
import OutputComponent from "./OutputComponent"
const JavaScriptOutput = () => {

  const refOutput = useRef()
  const refError = useRef()
  const { Code, setCode } = useContext(ContextCode)
  let salida = ''

  const consoleLog = (...argumentos) => {
    for (let i = 0; i < argumentos.length; i++) {
      salida += argumentos[i] + ' '
    }
    salida += '<br/>'
  }

  useEffect(() => {

    const compileCode = () => {

      try {

        console.log = consoleLog
        eval(Code)

        if (salida) {
          refError.current.innerHTML = ''
          refOutput.current.innerHTML = salida
        }

      } catch ({ message }) {
        refOutput.current.innerHTML = ''
        refError.current.innerHTML = `${message}`
      }
    }
    compileCode()

  }, [Code])


  return (
    <OutputComponent refError={refError} refOutput={refOutput} />
  )
}

export default JavaScriptOutput
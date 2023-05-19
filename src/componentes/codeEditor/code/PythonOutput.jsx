import { useRef } from "react"

import { useContext, useEffect } from "react"
import { ContextCode } from "../../../hooks/context/CodeContext"
import { runCode, setEngine, setOptions } from 'client-side-python-runner';
import OutputComponent from "./OutputComponent";
const PythonOutput = () => {

  const refOutput = useRef()
  const refError = useRef()
  const { Code, setCode } = useContext(ContextCode)
  let salida = ''
  // Funcion para redefinir el console.log
  const print = (...argumentos) => {
    for (let i = 0; i < argumentos.length; i++) {
      salida += argumentos[i] + ' '
    }
    salida += '<br/>'
  }
  //Configurar el compilador
  const settingsPython = async () => {
    // Opciones del compilador
    setOptions({
      output: print,
      loadVariablesBeforeRun: true,
      storeVariablesAfterRun: true
    })
    // Motor de compilacion
    await setEngine('pyodide')
  }
  // Funcion para compilar el codigo python

  useEffect(() => {

    const compileCode = async () => {
      settingsPython()
      try {

        await runCode(Code)

        if (salida) {
          refError.current.innerHTML = ''
          refOutput.current.innerHTML = salida
        }

      } catch ({ lineNumber, message }) {
        refOutput.current.innerHTML = ''
        refError.current.innerHTML = `${lineNumber}: ${message}`
      }
    }
    compileCode()
  }, [Code])



  // LLamada de funciones



  return (
    <OutputComponent refError={refError} refOutput={refOutput} />
  )
}

export default PythonOutput
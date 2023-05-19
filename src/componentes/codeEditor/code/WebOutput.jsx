import { useRef, useContext, useEffect } from 'react'
import { ContextWeb } from "../../../hooks/context/WebContext"
const WebOutput = () => {
  const { Html, setHtml, Css, setCss, Js, setJs } = useContext(ContextWeb)
  const refIframe = useRef()


  useEffect(() => {
    const CrearEstructura = () => {
      const estructura = {
        html: Html,
        css: Css,
        js: Js
      }
      return `
      ${estructura.html}
      <style>${estructura.css}</style>
      <script>${estructura.js}</script>
  `
    }

    const html = CrearEstructura()
    refIframe.current.setAttribute('srcDoc', html)

  }
    , [Html, Css, Js])



  return (
    <iframe style={{ height: '30%', width: '100%', boxShadow: '0px -6px 10px #00000040' }} ref={refIframe} ></iframe>
  )
}

export default WebOutput
import { createContext, useState } from "react";

const ContextWeb = createContext(null)

const WebContextProvider = ({ children }) => {
  const [Html, setHtml] = useState('')
  const [Js, setJs] = useState('')
  const [Css, setCss] = useState('')

  return (
    <ContextWeb.Provider value={{ Html, setHtml, Css, setCss, Js, setJs }}>
      {children}
    </ContextWeb.Provider>
  )
}

export { ContextWeb, WebContextProvider }
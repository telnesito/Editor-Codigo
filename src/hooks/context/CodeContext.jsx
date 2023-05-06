import { createContext, useState } from "react";

const ContextCode = createContext(null)

const CodeContextProvider = ({ children }) => {
  const [Code, setCode] = useState('')
  const [Output, setOutput] = useState('')
  return (
    <ContextCode.Provider value={{ Code, setCode, Output, setOutput }}>
      {children}
    </ContextCode.Provider>
  )
}

export { ContextCode, CodeContextProvider }
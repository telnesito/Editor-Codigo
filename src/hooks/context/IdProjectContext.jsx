import { createContext, useState } from "react";

const ContextIdProject = createContext(null)

const IdPrjectContextProvider = ({ children }) => {
  const [idProject, setIdProject] = useState('')
  return (
    <ContextIdProject.Provider value={{ idProject, setIdProject, }}>
      {children}
    </ContextIdProject.Provider>
  )
}

export { ContextIdProject, IdPrjectContextProvider }


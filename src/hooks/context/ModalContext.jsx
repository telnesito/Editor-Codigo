import { createContext, useState } from "react";

const ContextModal = createContext(null)

const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)


  const closeModal = () => setIsOpen(false)

  return (
    <ContextModal.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ContextModal.Provider>
  )
}

export { ContextModal, ModalContextProvider }
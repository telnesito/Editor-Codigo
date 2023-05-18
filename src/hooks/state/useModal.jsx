import { useState } from "react"
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)

  return { openModal, closeModal, isOpen }
}

export default useModal
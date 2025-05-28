import { useState } from "react"

export function useModal(){
  const [isOpen, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }
  
  return{
    isOpen,
    openModal,
    closeModal
  }
}
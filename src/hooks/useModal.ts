import { useState } from "react"

export function useModal(){
  const [isActive, setActive] = useState(false)
  
  const handlerActive = () => {
    if(isActive){
      setActive(false)
    } else {
      setActive(true)
    }
  }

  return {
    isActive,
    handlerActive
  }
}
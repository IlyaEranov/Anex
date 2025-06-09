import { useState } from "react"

export function useModal(){
  const [isActive, setActive] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)

  const handlerActive = (e: React.MouseEvent<HTMLDivElement>) => {
    if(isActive){
      setActive(false)
      setAnchorEl(null)
    } else {
      setActive(true)
      setAnchorEl(e.currentTarget)
    }
  }

  return {
    isActive,
    anchorEl,
    handlerActive
  }
}
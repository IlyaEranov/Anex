import { useState } from "react"

export function useModal(itemIDs?: string[]){
  const [isActive, setActive] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)
  const [backdropActive, setBackdropActive] = useState(false)

  const handlerActive = (e: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(e.currentTarget)
    if(isActive){
      setActive(false)
    } else {
      setActive(true)
    }
  }

  const getAnchorEl = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget
    if(itemIDs?.filter(e => value.getAttribute("itemid") === e).length != 0){
      setAnchorEl(value)
      setBackdropActive(true)
    } else {
      setAnchorEl(null)
      setBackdropActive(false)
    }
  }

  // const disableWithScroll = () => {
  //   useEffect(() => {
  //     const disableModal = () => {
  //       setAnchorEl(null)
  //       setBackdropActive(false)
  //     }
  //     addEventListener("scroll", disableModal)
  //     return () => removeEventListener("scroll", disableModal)
  //   }, [])
  // }

  return {
    isActive,
    anchorEl,
    handlerActive,
    getAnchorEl,
    backdropActive,
    // disableWithScroll
  }
}
import { useLayoutEffect, useState } from "react"

const ModalLayout = () => {

  const [size, setSize] = useState(0)

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize(innerWidth)
    }

    addEventListener("resize", updateSize)

    return () => removeEventListener("resize", updateSize)
  }, [])

  return(
    <></>
  )
}
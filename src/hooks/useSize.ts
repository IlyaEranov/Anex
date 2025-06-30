import { useEffect, useState } from "react";

export function useSize(){
  const [width, setWidth] = useState(innerWidth)

  useEffect(() => {
    const updateSize = () => {
      setWidth(innerWidth)
    }

    addEventListener("resize", updateSize)

    return () => removeEventListener("resize", updateSize)
  }, [])

  return width
}
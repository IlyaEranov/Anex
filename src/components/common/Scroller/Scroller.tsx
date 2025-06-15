import type { FC } from "react"
import s from "./Scroller.module.scss"

interface ScrollerProps {
  widthThumb: number
  position: number
}

const Scroller: FC<ScrollerProps> = ({ widthThumb, position }) => {
  return (
    <div className={s.scroller}>
      <div className={s.scroller__thumb} style={{ width: widthThumb, left: position }}></div>
    </div>
  )
}

export default Scroller
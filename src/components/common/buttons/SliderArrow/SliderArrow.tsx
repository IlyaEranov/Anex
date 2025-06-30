import type { FC } from "react";
import s from "./SliderArrow.module.scss"
import arrow from "../../../../assets/icons/arrow.svg"

interface SliderArrowProps {
  onClick?: () => void
  type: "right" | "left"
}

const SliderArrow: FC<SliderArrowProps> = ({ onClick, type }) => {
  return (
    <div className={`${s.arrow} ${s[`_${type}`]}`} onClick={onClick}>
      <img src={arrow} className={s.arrow__icon} />
    </div>
  )
}

export default SliderArrow
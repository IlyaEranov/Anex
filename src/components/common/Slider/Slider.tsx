import { useRef, useState, type FC, type ReactNode } from "react"
import s from "./Slider.module.scss"
import arrow from "../../../assets/icons/arrow.svg"

interface SliderProps {
  children: ReactNode
  startValue?: number
  blockWidth: number
  countEl: number
  options?: React.HTMLAttributes<HTMLDivElement>
}

const Slider: FC<SliderProps> = ({ children, startValue, blockWidth, countEl }) => {

  const sliderContainer = useRef<HTMLDivElement>(null)
  const offsetValue = blockWidth + 32
  const maxScrollOffset = (countEl - 1) * (offsetValue)
  
  const [offset, setOffset] = useState(startValue || 0)

  const handlerScrollRight = () => {
    const block = sliderContainer.current
    if(block){
      if(block.scrollLeft == maxScrollOffset){
        block.scrollTo({left: 0, behavior: "smooth"})
        setOffset(0)
      } else {
        const value = offset + offsetValue
        block.scrollTo({left: value, behavior: "smooth"})
        setOffset(value)
      }
    }
  }

  const handlerScrollLeft = () => {
    const block = sliderContainer.current
    if(block){
      if(block.scrollLeft == 0){
        block.scrollTo({left: maxScrollOffset, behavior: "smooth"})
        setOffset(maxScrollOffset)
      } else {
        const value = offset - offsetValue
        block.scrollTo({left: value, behavior: "smooth"})
        setOffset(value)
      }
    }
  }

  return (
    <div className={s.slider}>
      <div className={`${s.slider__arrow} ${s._left}`} onClick={handlerScrollLeft}>
        <img className={s.arrow__icon} src={arrow}/>
      </div>
      <div className={s.slider__container} ref={sliderContainer}>
        {children}
      </div>
      <div className={`${s.slider__arrow} ${s._right}`} onClick={handlerScrollRight}>
        <img className={s.arrow__icon} src={arrow}/>
      </div>
    </div>
  )
}

export default Slider
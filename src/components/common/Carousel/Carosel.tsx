import { useState, type FC, type ReactNode } from "react"
import s from "./Carousel.module.scss"
import Scroller from "../Scroller/Scroller"
import SliderArrow from "../buttons/SliderArrow/SliderArrow"

interface CarouselProps {
  el: ReactNode[]
}

const Carousel: FC<CarouselProps> = ({ el }) => {

  const defaultState = [0, 1, 2]
  const [position, setPosition] = useState(defaultState)

  return (
    <div className={s.carousel}>
      <div className={s.carousel__inner}>
        <SliderArrow type="left" onClick={() => setPosition([position[0] - 1, position[1] - 1, position[2] - 1])}/>
        <div className={s.carousel__container}>
          <div className={s.carousel__item}>{el[position[0]]}</div>
          <div className={`${s.carousel__item} ${s._active}`}>{el[position[1]]}</div>
          <div className={s.carousel__item}>{el[position[2]]}</div>
        </div>
        <SliderArrow type="right" onClick={() => setPosition([position[0] + 1, position[1] + 1, position[2] + 1])}/>
      </div>
      <Scroller widthThumb={0} position={0} />
    </div>
  )
}

export default Carousel
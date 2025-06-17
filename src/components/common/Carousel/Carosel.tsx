import { useState, type FC, type ReactNode } from "react"
import s from "./Carousel.module.scss"
import Scroller from "../Scroller/Scroller"

interface el{
  docs: ReactNode
}

interface CarouselProps {
  el: el[]
}

const Carousel: FC<CarouselProps> = ({ el }) => {

  const defaultState = [-1, 0, 1]
  const [current, setCurrent] = useState()
  const [position, setPosition] = useState(defaultState)



  return (
    <div className={s.carousel}>
      <div className={s.carousel__inner}>
        <div className={s.carousel__container}>
          {el.map(e => 
            e.docs
          )}
        </div>
      </div>
      <Scroller widthThumb={0} position={0} />
    </div>
  )
}

export default Carousel
import { useEffect, useRef, useState, type FC, type ReactNode } from "react"
import s from "./Slider.module.scss"
import arrow from "../../../assets/icons/arrow.svg"
import { useDebouncedCallback } from "use-debounce"
import Scroller from "../Scroller/Scroller"

interface SliderProps {
  children: ReactNode
  blockWidth: number
}

const Slider: FC<SliderProps> = ({ children, blockWidth }) => {

  const sliderContainer = useRef<HTMLDivElement>(null)
  const [sliderWidth, setSliderWidth] = useState(0)
  const [sliderScrollWidth, setSliderScrollWidth] = useState(0)

  const [scrollValue, setScrollValue] = useState(0)
  const [thumbValue, setThubmValue] = useState(0)
  const [maxScrollOffset, setMaxScrollOffset] = useState(0)
  const [maxThumbOffset, setMaxThumbOffset] = useState(0)

  useEffect(() => {
    const getWidth = () => {
      if (sliderContainer.current) {
        setSliderWidth(sliderContainer.current.clientWidth)
        setSliderScrollWidth(sliderContainer.current.scrollWidth)
      }
    }
    getWidth()
    addEventListener("resize", getWidth)
    return () => removeEventListener("resize", getWidth)
  }, [])

  useEffect(() => {
    const setParams = () => {
      let countScrolls
      if (innerWidth <= (blockWidth * 2) + 32) {
        countScrolls = Math.ceil(sliderScrollWidth / (blockWidth + 32))
        setScrollValue(blockWidth + 32)
      } else {
        countScrolls = Math.ceil(sliderScrollWidth / (sliderWidth + 32))
        setScrollValue(sliderWidth + 32)
      }
      setThubmValue(sliderWidth / countScrolls)
      setMaxScrollOffset(sliderScrollWidth - sliderWidth)
      setMaxThumbOffset(sliderWidth - (sliderWidth / countScrolls))
    }
    setParams()
    addEventListener("resize", setParams)
    return () => removeEventListener("resize", setParams)
  }, [sliderWidth, sliderScrollWidth])

  const [offset, setOffset] = useState(0)
  const [thumbOffset, setThubmOffset] = useState(0)
  const handlerScroll = (block: HTMLDivElement, value: number) => block.scrollTo({ left: value, behavior: "smooth" })

  useEffect(() => {
    const resetOffset = () => {
      setOffset(0)
      setThubmOffset(0)
      handlerScroll(sliderContainer.current!, 0)
    }
    addEventListener("resize", resetOffset)
    return () => removeEventListener("resize", resetOffset)
  }, [])

  const handlerScrollRight = useDebouncedCallback(() => {
    const block = sliderContainer.current
    if (block) {
      if (block.scrollLeft >= maxScrollOffset) {
        handlerScroll(block, 0)
        setOffset(0)
        setThubmOffset(0)
      } else {
        handlerScroll(block, offset + scrollValue)
        setOffset(offset + scrollValue)
        setThubmOffset(thumbOffset + thumbValue)
      }
    }
  }, 200)

  const handlerScrollLeft = useDebouncedCallback(() => {
    const block = sliderContainer.current
    if (block) {
      if (block.scrollLeft == 0) {
        block.scrollTo({ left: maxScrollOffset, behavior: "smooth" })
        setOffset(maxScrollOffset)
        setThubmOffset(maxThumbOffset)
      } else {
        block.scrollTo({ left: offset - scrollValue, behavior: "smooth" })
        setOffset(offset - scrollValue)
        setThubmOffset(thumbOffset - thumbValue)
      }
    }
  }, 200)

  return (
    <div className={s.slider}>
      <div className={s.slider__inner}>
        <div className={`${s.slider__arrow} ${s._left}`} onClick={handlerScrollLeft}>
          <img className={s.arrow__icon} src={arrow} />
        </div>
        <div className={s.slider__container} ref={sliderContainer}>
          {children}
        </div>
        <div className={`${s.slider__arrow} ${s._right}`} onClick={handlerScrollRight}>
          <img className={s.arrow__icon} src={arrow} />
        </div>
      </div>
      <Scroller widthThumb={thumbValue} position={thumbOffset} />
    </div>
  )
}

export default Slider


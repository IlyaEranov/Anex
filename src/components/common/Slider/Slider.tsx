import { useEffect, useRef, useState, type FC, type ReactNode } from "react"
import s from "./Slider.module.scss"
import arrow from "../../../assets/icons/arrow.svg"
import { useDebouncedCallback } from "use-debounce"

interface SliderProps {
  children: ReactNode
  blockWidth?: number
  countEl?: number
  offsetType: "carousel" | "default"
  options?: React.HTMLAttributes<HTMLDivElement>
}

const Slider: FC<SliderProps> = ({ children, blockWidth = 0, countEl = 0, offsetType }) => {

  const sliderContainer = useRef<HTMLDivElement>(null)
  const [sliderWidth, setSliderWidth] = useState(0)
  const [sliderScrollWidth, setSliderScrollWidth] = useState(0)

  const [offsetValue, setOffsetValue] = useState(0)
  const [thumbValue, setThubmValue] = useState(0)
  const [maxScrollOffset, setMaxScrollOffset] = useState(0)
  const [maxThumbOffset, setMaxThumbOffset] = useState(0)

  const getWidth = () => {
    if (sliderContainer.current) {
      setSliderWidth(sliderContainer.current.clientWidth)
      setSliderScrollWidth(sliderContainer.current.scrollWidth)
    }
  }

  useEffect(() => {
    getWidth()
  }, [])

  useEffect(() => {
    addEventListener("resize", getWidth)
    return () => removeEventListener("resize", getWidth)
  }, [])

  useEffect(() => {
    const countScrolls = Math.ceil(sliderScrollWidth / (sliderWidth + 32))
    if (offsetType == "default") {
      setOffsetValue(sliderWidth + 32)
      setThubmValue(sliderWidth / countScrolls)
      setMaxScrollOffset(sliderScrollWidth - sliderWidth)
      setMaxThumbOffset(sliderWidth - (sliderWidth / countScrolls))
    } else {
      setOffsetValue(blockWidth + 32)
      setThubmValue(sliderWidth / countEl)
      setMaxScrollOffset(sliderScrollWidth - (blockWidth + 32))
      setMaxThumbOffset(sliderWidth - (sliderWidth / countEl))
    }
  }, [sliderWidth, sliderScrollWidth])

  const [offset, setOffset] = useState(0)
  const [thumbOffset, setThubmOffset] = useState(0)
  const handlerScroll = (block: HTMLDivElement, value: number) => block.scrollTo({ left: value, behavior: "smooth" })

  const handlerScrollRight = useDebouncedCallback(() => {
    const block = sliderContainer.current
    if (block) {
      if (block.scrollLeft >= maxScrollOffset) {
        handlerScroll(block, 0)
        setOffset(0)
        setThubmOffset(0)
      } else {
        handlerScroll(block, offset + offsetValue)
        setOffset(offset + offsetValue)
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
        block.scrollTo({ left: offset - offsetValue, behavior: "smooth" })
        setOffset(offset - offsetValue)
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
      <div className={s["slider-scroller"]}>
        <div className={s["slider-scroller__thumb"]} style={{ width: thumbValue, left: thumbOffset }}></div>
      </div>
    </div>
  )
}

export default Slider


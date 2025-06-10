import { Slider } from "@mui/material"
import s from "./ToursSlider.module.scss"
import ToursCard from "../../cards/ToursCard/ToursCard"

import mockImage from "../../../../../../mocks/images/slider/006447d3752bb946fec5df5138cb826a0a651ae1.jpg"

const mockData = {
  country: "ОАЭ",
  city: "Дубай",
  dayStart: 12,
  dayEnd: 18,
  mount: "октября",
  price: 25000
}

function ToursSlider(){
  return(
    <div className={s.slider}>
      <div className={s.slider__container}>
        <ToursCard
          id=""
          path=""
          image={mockImage}
          country={mockData.country}
          city={mockData.city}
          date={{dayStart: mockData.dayStart, dayEnd: mockData.dayEnd, mounth: mockData.mount}}
          price={mockData.price}
        />
      </div>
      <Slider/>
    </div>
  )
}

export default ToursSlider
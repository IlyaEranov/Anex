import ToursCard from "../../cards/ToursCard/ToursCard"

import mockImage from "../../../../../../mocks/images/slider/006447d3752bb946fec5df5138cb826a0a651ae1.jpg"
import Slider from "../../../../common/Slider/Slider"

const mockData = {
  country: "ОАЭ",
  city: "Дубай",
  dayStart: 12,
  dayEnd: 18,
  mount: "октября",
  price: 25000
}

function ToursSlider() {
  return (
    <Slider blockWidth={260}>
      {[...Array(20)].map((_, i) =>
        <ToursCard
          key={`${mockData.country}${i}`}
          id=""
          path=""
          image={mockImage}
          country={mockData.country}
          city={mockData.city}
          date={{ dayStart: mockData.dayStart, dayEnd: mockData.dayEnd, mounth: mockData.mount }}
          price={mockData.price}
        />
      )}
    </Slider>
  )
}

export default ToursSlider
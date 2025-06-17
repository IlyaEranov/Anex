import Carousel from "../../../../common/Carousel/Carosel"
import HotelsCard from "../../cards/HotelsCard/HotelsCard"
import mockImage from "../../../../../../mocks/images/slider/d96efdf3f566822c894d4259e83031bd50c69a12.jpg"

function HotelsCarousel() {

  const array = [...Array(20)].map((e) => 
    e = {
      docs: <HotelsCard
          id=""
          path=""
          image={mockImage}
          hotel="Villa Flori Como"
          hotelRating={4.9}
        />
    }
  )

  return (
    <Carousel el={array}></Carousel>
  )
}

export default HotelsCarousel
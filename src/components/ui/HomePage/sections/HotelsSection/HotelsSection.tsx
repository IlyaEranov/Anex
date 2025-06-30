import { useSize } from "../../../../../hooks/useSize"
import Container from "../../../../common/Container/Container"
import mockImage from "../../../../../../mocks/images/slider/d96efdf3f566822c894d4259e83031bd50c69a12.jpg"
import Carousel from "../../../../common/Carousel/Carosel"
import HotelsCard from "../../cards/HotelsCard/HotelsCard"
import s from "./HotelsSection.module.scss"
import { useState } from "react"
import Button from "../../../../common/buttons/Button/Button"

function HotelsSection() {

  const width = useSize()
  const [limit, setLimit] = useState(3)

  const element = <HotelsCard
    id=""
    path=""
    image={mockImage}
    hotel="Villa Flori Como"
    hotelRating={4.9}
  />

  const arrayEl = [...Array(20)].map(e => e = element)

  return (
    <Container
      h2="ПОПУЛЯРНЫЕ ОТЕЛИ"
      h3="УЮТ И РОСКОШЬ В ЛУЧШИХ ОТЕЛЯХ МИРА"
      styleContainer={{ backgroundColor: "#F8F8F8" }}
      styleLabel={{ textAlign: "center", width: "100%" }}
      id="hotels"
    >
      {width >= 1024 ?
        <Carousel el={arrayEl} />
        :
        <div className={s.hotels}>
          <div className={s.hotels__grid}>
            {[...Array(20)].map((_, i) =>
              i <= limit - 1 &&
              element
            )}
          </div>
          {limit < 20 &&
            <div className={s.hotels__buton}>
              <Button variantColor="white" onClick={() => setLimit(limit + 3)}>Больше отелей</Button>
            </div>
          }
        </div>
      }
    </Container>
  )
}

export default HotelsSection
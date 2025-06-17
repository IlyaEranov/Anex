import Container from "../../../../common/Container/Container"
import HotelsCarousel from "../../sliders/HotelsCarousel/HotelsCarousel"

function HotelSection(){
  return(
    <Container 
      h2="ПОПУЛЯРНЫЕ ОТЕЛИ" 
      h3="УЮТ И РОСКОШЬ В ЛУЧШИХ ОТЕЛЯХ МИРА"
      styleContainer={{backgroundColor: "#F8F8F8"}}
      styleLabel={{textAlign: "center", width: "100%"}}
    >
      <HotelsCarousel/>
    </Container>
  )
}

export default HotelSection
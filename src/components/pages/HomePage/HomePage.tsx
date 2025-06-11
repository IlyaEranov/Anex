import Layout from "../../common/Layout/Layout"
import HeroSection from "../../ui/HomePage/sections/HeroSection/HeroSection"
import HotelSection from "../../ui/HomePage/sections/HotelsSection/HotelSection"
import ToursSection from "../../ui/HomePage/sections/ToursSection/ToursSection"

function HomePage(){
  return(
    <Layout>
      <HeroSection/>
      <ToursSection/>
      <HotelSection/>
    </Layout>
  )
}

export default HomePage
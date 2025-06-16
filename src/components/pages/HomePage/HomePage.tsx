import Layout from "../../common/Layout/Layout"
import FeedbackSection from "../../ui/HomePage/sections/FeedbackSection/FeedbackSection"
import HeroSection from "../../ui/HomePage/sections/HeroSection/HeroSection"
import HotelSection from "../../ui/HomePage/sections/HotelsSection/HotelSection"
import ToursSection from "../../ui/HomePage/sections/ToursSection/ToursSection"

function HomePage(){
  return(
    <Layout>
      <HeroSection/>
      <ToursSection/>
      <HotelSection/>
      <FeedbackSection/>
    </Layout>
  )
}

export default HomePage
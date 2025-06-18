import Layout from "../../common/Layout/Layout"
import FeedbackSection from "../../ui/HomePage/sections/FeedbackSection/FeedbackSection"
import HeroSection from "../../ui/HomePage/sections/HeroSection/HeroSection"
import HotelSection from "../../ui/HomePage/sections/HotelsSection/HotelSection"
import NewsSection from "../../ui/HomePage/sections/NewsSection/NewsSection"
import ReviewSection from "../../ui/HomePage/sections/ReviewSection/ReviewSection"
import ToursSection from "../../ui/HomePage/sections/ToursSection/ToursSection"

function HomePage(){
  return(
    <Layout>
      <HeroSection/>
      <ToursSection/>
      <HotelSection/>
      <FeedbackSection/>
      <ReviewSection/>
      <NewsSection/>
    </Layout>
  )
}

export default HomePage
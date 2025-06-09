import Layout from "../../common/Layout/Layout"
import HeroSection from "../../ui/HomePage/sections/HeroSection/HeroSection"
import ToursSection from "../../ui/HomePage/sections/ToursSection/ToursSection"

function HomePage(){
  return(
    <Layout>
      <HeroSection/>
      <ToursSection/>
    </Layout>
  )
}

export default HomePage
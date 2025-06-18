import Layout from "../../common/Layout/Layout"
import AboutSection from "../../ui/HomePage/sections/AboutSection/AboutSection"
import FeedbackSection from "../../ui/sections/FeedbackSection/FeedbackSection"
import HeroSection from "../../ui/HomePage/sections/HeroSection/HeroSection"
import HotelSection from "../../ui/HomePage/sections/HotelsSection/HotelSection"
import NewsSection from "../../ui/HomePage/sections/NewsSection/NewsSection"
import ReviewSection from "../../ui/HomePage/sections/ReviewSection/ReviewSection"
import ToursSection from "../../ui/HomePage/sections/ToursSection/ToursSection"
import image1 from "../../../assets/img/8e5857643caecfce77e4bdb1d01bc990b742b63d.jpg"
import image2 from "../../../assets/img/3471455ca3fc71aa3a510f2390b927e3028b81d0.jpg"
import s from "./HomePage.module.scss"

function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ToursSection />
      <HotelSection />
      <FeedbackSection
        image={image1}
        h2="НЕ ОПРЕДЕЛИЛИСЬ С ВЫБОРОМ?"
        h3="Оставьте свой номер и наш специалист поможет вам с подбором тура"
      />
      <ReviewSection />
      <NewsSection />
      <AboutSection />
      <div className={s.bottom}>
        <FeedbackSection
          image={image2}
          h2="МЫ ПОМОЖЕМ СОЗДАТЬ ВАШЕ ПУТЕШЕСТВИЕ"
          h3="Оставьте заявку на подбор идеального путешествия"
          center
        />
      </div>
    </Layout>
  )
}

export default HomePage
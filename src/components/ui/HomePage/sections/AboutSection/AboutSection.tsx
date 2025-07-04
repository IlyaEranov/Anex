import Container from "../../../../common/Container/Container"
import image1 from "../../../../../../mocks/images/about/0328083ab7e0abe11f4c9bf5c4511080ae9ff087.jpg"
import image2 from "../../../../../../mocks/images/about/057924e26dfebbb4f4152219944c879758537059.jpg"
import s from "./AboutSection.module.scss"

function AboutSection() {
  return (
    <Container
      h2="О НАС"
      h3="ВДОХНОВЛЯЕМ МИР НА ПУТЕШЕСТВИЯ"
      styleLabel={{ textAlign: "center", width: `100%` }}
      id="about"
    >
      <div className={s["about-container"]}>
        <div className={s["about-container__row"]}>
          <p className={s["about-container__item"]}><span>МЫ</span> — команда профессионалов, влюбленных в искусство путешествий. Наша история началась с мечты о том, чтобы сделать каждое путешествие незабываемым, каждое приключение уникальным.
            Наша миссия — сделать путешествия доступными и незабываемыми.</p>
          <img src={image1} className={s["about-container__item"]} />
        </div>
        <div className={`${s["about-container__row"]} ${s._reverse}`}>
          <p className={s["about-container__item"]}>Мы гордимся нашей командой опытных специалистов, каждый из которых разделяет страсть к туризму и стремление сделать ваше путешествие незабываемым. Мы внимательно следим за последними тенденциями в индустрии, чтобы предложить вам только лучшие и самые актуальные варианты.</p>
          <img src={image2} className={s["about-container__item"]} />
        </div>
      </div>
    </Container>
  )
}

export default AboutSection
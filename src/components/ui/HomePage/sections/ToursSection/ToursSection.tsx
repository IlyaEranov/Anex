import ToursSlider from "../../sliders/ToursSlider/ToursSlider"
import s from "./ToursSection.module.scss"

function ToursSection() {
  return (
    <section className={s.tours__section}>
      <div className={s["tours-label"]}>
        <h2 className={s["tours-label__h2"]}>ГОРЯЩИЕ ТУРЫ</h2>
        <h3 className={s["tours-label__h3"]}>ПОЙМАТЕ МОМЕНТ</h3>
      </div>
      <ToursSlider/>
    </section>
  )
}

export default ToursSection
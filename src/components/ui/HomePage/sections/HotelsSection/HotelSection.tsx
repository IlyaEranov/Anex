import s from "./HotelSection.module.scss"

function HotelSection(){
  return(
    <section className={s["hotel-section"]}>
      <div className={s["hotel-label"]}>
        <h2 className={s["hotel-label__h2"]}>ПОПУЛЯРНЫЕ ОТЕЛИ</h2>
        <h3 className={s["hotel-label__h3"]}>УЮТ И РОСКОШЬ В ЛУЧШИХ ОТЕЛЯХ МИРА</h3>
      </div>
    </section>
  )
}

export default HotelSection
import DateModal from "../../ui/modals/search/DateModal/DateModal"
import DirectionModal from "../../ui/modals/search/DirectionModal/DirectionModal"
import TouristsModal from "../../ui/modals/search/TouristsModal/TouristsModal"
import s from "./Search.module.scss"
import arrow from "../../../assets/icons/diagonal-arrow.svg"
import Button from "../buttons/Button/Button"

function Search() {
  return (
    <div className={s.search}>
      <div className={s["search-wrapper"]}>
        <DirectionModal placeholder="Откуда" />
        <span className={s.hline}></span>
        <DirectionModal placeholder="Куда" />
        <span className={s.hline}></span>
        <DateModal placeholder="Дата" />
        <span className={s.hline}></span>
        <div className={s["search-wrapper__bottom"]}>
          <DateModal placeholder="Количество дней" />
          <span className={s.vline}></span>
          <TouristsModal />
        </div>
        <span className={s.hline}></span>
      </div>
      <div className={s["search-button"]}>
        <Button style="red">
            <span>ПОДОБРАТЬ</span><img src={arrow} />
        </Button>
      </div>
    </div>
  )
}

export default Search
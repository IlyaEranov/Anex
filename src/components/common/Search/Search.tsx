import DirectionModal from "../../ui/modals/search/DirectionModal/DirectionModal"
import s from "./Search.module.scss"
import arrow from "../../../assets/icons/diagonal-arrow.svg"
import Button from "../buttons/Button/Button"
import DateModal from "../../ui/modals/search/DateModal/DateModal"
import TouristsModal from "../../ui/modals/search/TouristsModal/TouristsModal"

function Search() {
  return (
    <div className={s.search}>
      <div className={s["search-wrapper"]}>
        <div className={s["search-wrapper__item"]}>
          <DirectionModal placeholder="Откуда" />
        </div>
        <div className={s["search-wrapper__item"]}>
          <DirectionModal placeholder="Куда" />
        </div>
        <div className={s["search-wrapper__item"]}>
          <DateModal placeholder="Дата" />
        </div>
        <div className={s["search-wrapper__item"]}>
          <div className={s["search-wrapper-bottom"]}>
            <div className={s["search-wrapper-bottom__item"]}><DateModal placeholder="На сколько" /></div>
            <TouristsModal />
          </div>
        </div>
        <div className={s["search-button"]}>
          <Button variantColor="red">
            <span>ПОДОБРАТЬ</span><img src={arrow} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Search
import DirectionModal from "../../ui/modals/search/DirectionModal/DirectionModal"
import s from "./Search.module.scss"
import arrow from "../../../assets/icons/diagonal-arrow.svg"
import Button from "../buttons/Button/Button"
import DateModal from "../../ui/modals/search/DateModal/DateModal"
import TouristsModal from "../../ui/modals/search/TouristsModal/TouristsModal"
import SelectField from "../fields/SelectField/SelectField"
import { useModal } from "../../../hooks/useModal"

function Search() {

  const {anchorEl, handlerActive} = useModal()

  return (
    <div className={s.search}>
      <div className={s["search-wrapper"]}>
        <div className={s["search-wrapper__item"]}>
          <SelectField label="Откуда"/>
        </div>
        <div className={s["search-wrapper__item"]}>
          <SelectField label="Куда"/>
        </div>
        <div className={s["search-wrapper__item"]}>
          <SelectField slotProps={{input: {readOnly: true}}} label="Дата"/>
        </div>
        <div className={s["search-wrapper__item"]}>
          <div className={s["search-wrapper-bottom"]}>
            <div className={s["search-wrapper-bottom__item"]}>
              <SelectField slotProps={{input: {readOnly: true}}} label="На сколько"/>
            </div>
            <SelectField label="Туристы" slotProps={{input: {readOnly: true}}}/>
          </div>
        </div>
        <div className={s["search-button"]}>
          <Button variantColor="red">
            <span>ПОДОБРАТЬ</span><img src={arrow} className={s["search-button__arrow"]}/>
          </Button>
        </div>
      </div>
      <div className={s.search__dropdown}>
        <DirectionModal placeholder="Откуда"/>
        <DirectionModal placeholder="Куда"/>
        <DateModal placeholder="Дата"/>
        <DateModal placeholder="На сколько" />
        <TouristsModal/>
      </div>
    </div>
  )
}

export default Search
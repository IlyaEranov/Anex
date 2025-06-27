import DirectionModal from "../../ui/modals/search/DirectionModal/DirectionModal"
import s from "./Search.module.scss"
import arrow from "../../../assets/icons/diagonal-arrow.svg"
import Button from "../buttons/Button/Button"
import DateModal from "../../ui/modals/search/DateModal/DateModal"
import TouristsModal from "../../ui/modals/search/TouristsModal/TouristsModal"
import SelectField from "../fields/SelectField/SelectField"
import { useModal } from "../../../hooks/useModal"

function Search() {

  const { anchorEl, getAnchorEl, backdropActive } = useModal(["where-from", "where-to", "date", "how-long", "tourists"])

  // disableWithScroll()

  return (
    <>
      <div className={s.search}>
        <div className={s["search-wrapper"]}>
          <div className={s["search-wrapper__item"]}>
            <SelectField itemID="where-from" label="Откуда" onClick={getAnchorEl} />
          </div>
          <div className={s["search-wrapper__item"]}>
            <SelectField itemID="where-to" label="Куда" onClick={getAnchorEl} />
          </div>
          <div className={s["search-wrapper__item"]}>
            <SelectField itemID="date" slotProps={{ input: { readOnly: true } }} label="Дата" onClick={getAnchorEl} />
          </div>
          <div className={s["search-wrapper__item"]}>
            <div className={s["search-wrapper-bottom"]}>
              <div className={s["search-wrapper-bottom__item"]}>
                <SelectField itemID="how-long" slotProps={{ input: { readOnly: true } }} label="На сколько" onClick={getAnchorEl} />
              </div>
              <SelectField itemID="tourists" label="Туристы" slotProps={{ input: { readOnly: true } }} onClick={getAnchorEl} />
            </div>
          </div>
          <div className={s["search-button"]}>
            <Button variantColor="red">
              <span>ПОДОБРАТЬ</span><img src={arrow} className={s["search-button__arrow"]} />
            </Button>
          </div>
        </div>
        <div className={s.search__dropdown}>
          <DirectionModal
            isOpen={Boolean(anchorEl?.getAttribute("itemid") === "where-from")}
            anchorEl={anchorEl}
            closeModal={getAnchorEl}
            placeholder="Откуда"
          />
          <DirectionModal
            isOpen={Boolean(anchorEl?.getAttribute("itemid") === "where-to")}
            anchorEl={anchorEl}
            closeModal={getAnchorEl}
            placeholder="Куда"
          />
          <DateModal
            isOpen={Boolean(anchorEl?.getAttribute("itemid") === "date")}
            anchorEl={anchorEl}
            closeModal={getAnchorEl}
            placeholder="Дата"
          />
          <DateModal
            isOpen={Boolean(anchorEl?.getAttribute("itemid") === "how-long")}
            anchorEl={anchorEl}
            closeModal={getAnchorEl}
            placeholder="На сколько"
          />
          <TouristsModal
            isOpen={Boolean(anchorEl?.getAttribute("itemid") === "tourists")}
            anchorEl={anchorEl}
            closeModal={getAnchorEl}
          />
        </div>
      </div>
      {backdropActive && <div className={s.backdrop} onClick={getAnchorEl}></div>}
    </>
  )
}

export default Search
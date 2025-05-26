import SelectField from "../SelectField/SelectField"
import s from "./SearchField.module.scss"

function SearchField(){
  return(
    <div className={s.search}>
      <div className={s["search-wrapper"]}>
        <SelectField placeholder="Откуда"/>
        <span className={s.hline}></span>
        <SelectField placeholder="Куда"/>
        <span className={s.hline}></span>
        <SelectField placeholder="Вылет"/>
        <span className={s.hline}></span>
        <div className={s["search-wrapper__bottom"]}>
          <SelectField placeholder="На сколько"/>
          <span className={s.vline}></span>
          <SelectField placeholder="Туристы"/>
        </div>
        <span className={s.hline}></span>
      </div>
    </div>
  )
}

export default SearchField
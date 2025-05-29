import s from "./SearchField.module.scss"
import search from "../../../../assets/icons/search.svg"
import arrow from "../../../../assets/icons/diagonal-arrow.svg"

const SearchField = () => {
  return (
    <button className={s.search}>
      <div className={s.search__icon}>
        <img src={search}/>
      </div>
      <input placeholder="Что будем искать?" className={s.search__input}/>
      <button className={`${s.search__icon} ${s.arrow}`}>
        <img src={arrow}/>
      </button>
    </button>
  )
}

export default SearchField
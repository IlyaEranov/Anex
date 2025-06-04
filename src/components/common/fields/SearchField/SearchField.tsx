import s from "./SearchField.module.scss"
import search from "../../../../assets/icons/search.svg"
import arrow from "../../../../assets/icons/diagonal-arrow.svg"
import { Input } from "@mui/material"

const SearchField = () => {
  return (
    <div className={s.search}>
      <div className={s.search__field}>
        <div className={s.search__icon}>
          <img src={search} />
        </div>
        <Input placeholder="Что будем искать?" className={s.search__input}/>
      </div>
      <button className={`${s.search__icon} ${s.arrow}`}>
        <img src={arrow} />
      </button>
    </div>
  )
}

export default SearchField
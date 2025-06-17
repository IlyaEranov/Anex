import type { FC } from "react"
import { Link } from "react-router-dom"
import type { CardProps } from "../../../../../types/CardProps"
import s from "./HotelsCard.module.scss"
import star from "../../../../../assets/icons/star.svg"

const HotelsCard: FC<CardProps> = ({id, name, image, rating}) => {
  return(
    <Link to={`/tours/${id}`} className={s.card__container} style={{backgroundImage: `url(${image})`}}>
      <div className={s["card-rating"]}>
        <div className={s["card-rating__num"]}>
          {rating}
        </div>
        <div className={s["card-rating__star"]}>
          <img src={star}/>
        </div>
      </div>
      <div className={s["card-bottom"]}>
        <div className={s["card-bottom__name"]}>
          {name}
        </div>
        <div className={s["card-bottom__details"]}>узнать подробнее</div>
      </div>
    </Link>
  )
}

export default HotelsCard
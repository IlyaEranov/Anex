import type { FC } from "react"
import { Link } from "react-router-dom"
import type { CardProps } from "../../../../../types/CardProps"
import s from "./HotelsCard.module.scss"
import star from "../../../../../assets/icons/star.svg"

const HotelsCard: FC<CardProps> = ({id, hotel, image, hotelRating}) => {
  return(
    <Link to={`/tours/${id}`} className={s.card__container} style={{backgroundImage: `url(${image})`}}>
      <div className={s["card-rating"]}>
        <div className={s["card-rating__num"]}>
          {hotelRating}
        </div>
        <div className={s["card-rating__star"]}>
          <img src={star}/>
        </div>
      </div>
      <div className={s["card-bottom"]}>
        <div className={s["card-bottom__name"]}>
          {hotel}
        </div>
        <div className={s["card-bottom__details"]}>узнать подробнее</div>
      </div>
    </Link>
  )
}

export default HotelsCard
import type { FC } from "react";
import s from "./ToursCard.module.scss"
import type { CardProps } from "../../../../../types/CardProps";
import { Link } from "react-router-dom";


const ToursCard: FC<CardProps> = ({id, date, price, country, city, image}) => {
  return(
    <Link to={`/tours/${id}`} className={s.card__container} style={{backgroundImage: `url(${image})`}}>
      <div className={s["card-buttons"]}>
        <div className={s["card-buttons__item"]}>
          {date && date.dayEnd - date.dayStart} дней
        </div>
        <div className={s["card-buttons__item"]}>
          от {price} ₽
        </div>
      </div>
      <div className={s["card-bottom"]}>
        <div className={s["card-bottom-item"]}>
          <div className={s["card-bottom-item__name"]}>{country?.toUpperCase()}</div>
          <div>{city?.toUpperCase()}</div>
        </div>
        <div className={s["card-bottom-item"]}>
          {date?.dayStart}-{date?.dayEnd} {date?.mounth}
        </div>
        <Link to={`tours/${id}`} className={s["card-bottom__details"]}>узнать подробнее</Link>
      </div>
    </Link>
  )
}

export default ToursCard
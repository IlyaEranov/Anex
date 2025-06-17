import type { FC } from "react"
import type { CardProps } from "../../../../types/CardProps"
import s from "./ReviewCard.module.scss"
import { Rating } from "@mui/material"

const ReviewCard: FC<CardProps> = ({ image, rating, name, city, gender, country, date, hotel, comment }) => {
  return (
    <div className={s.card__container}>
      <div className={s["card-avatar"]}>
        <div style={{ backgroundImage: `url(${image})` }} className={s["card-avatar__container"]}></div>
      </div>
      <div className={s.card__main}>
        <div className={s.card__rating}>
          <Rating value={rating} readOnly className={s.rating} />
        </div>
        <div className={s["card-person"]}>
          <div className={s["card-person__name"]}>{name?.toUpperCase()} ИЗ {city?.toUpperCase()}</div>
          <div className={s["card-person__route"]}>
            {`Летал${gender == "female" ? "а" : ""} в ${country} ${date?.dayStart}.${date?.mounth}.${date?.year} в отель ${hotel}`}
          </div>
        </div>
      </div>
      <div className={s.card__comment}>
        {comment}
      </div>
    </div>
  )
}

export default ReviewCard
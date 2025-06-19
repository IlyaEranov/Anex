import Button from "../../../common/buttons/Button/Button"
import InputField from "../../../common/fields/InputField/InputField"
import s from "./FeedbackSection.module.scss"
import arrow from "../../../../assets/icons/diagonal-arrow.svg"
import type { FC } from "react"

interface FeedbackSectionProps{
  image: string
  h2: string
  h3: string
  center?: boolean
}

const FeedbackSection: FC<FeedbackSectionProps> = ({image, h2, h3, center}) => {
  return (
    <section className={`${s["feedback-section"]} ${center && s._center}`} style={{backgroundImage: `url(${image})`, }}>
      <div className={s["feedback-section__container"]}>
        <div className={s["feedback-section-label"]}>
          <h2 className={s["feedback-section-label__h2"]}>{h2}</h2>
          <h3 className={s["feedback-section-label__h3"]}>{h3}</h3>
        </div>
        <div className={s["feedback-section__inputs"]}>
          <InputField label="Имя"/>
          <InputField label="Телефон"/>
        </div>
        <div className={s["feedback-section__button"]}>
          <Button variantColor="red" sx={{width: "100%"}}><span>ОТПРАВИТЬ</span><img src={arrow}/></Button>
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection
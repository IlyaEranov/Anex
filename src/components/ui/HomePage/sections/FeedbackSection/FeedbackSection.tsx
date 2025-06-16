import Button from "../../../../common/buttons/Button/Button"
import InputField from "../../../../common/fields/InputField/InputField"
import s from "./FeedbackSection.module.scss"
import arrow from "../../../../../assets/icons/diagonal-arrow.svg"

function FeedbackSection() {
  return (
    <div className={s["feedback-section"]}>
      <div className={s["feedback-section__container"]}>
        <div className={s["feedback-section-label"]}>
          <h2 className={s["feedback-section-label__h2"]}>НЕ ОПРЕДЕЛИЛИСЬ С ВЫБОРОМ?</h2>
          <h3 className={s["feedback-section-label__h3"]}>
            Оставьте свой номер
            и наш специалист поможет вам с подбором тура
          </h3>
        </div>
        <div className={s["feedback-section__inputs"]}>
          <InputField label="Имя"/>
          <InputField label="Телефон"/>
        </div>
        <div className={s["feedback-section__button"]}>
          <Button variantColor="red" sx={{width: "100%"}}><span>ОТПРАВИТЬ</span><img src={arrow}/></Button>
        </div>
      </div>
    </div>
  )
}

export default FeedbackSection
import { useModal } from "../../../../../hooks/useModal"
import Button from "../../../../common/buttons/Button/Button"
import InputField from "../../../../common/fields/InputField/InputField"
import Modal from "../../../../common/Modal/Modal"
import s from "./RequestModal.module.scss"
import arrow from "../../../../../assets/icons/diagonal-arrow.svg"
import close from "../../../../../assets/icons/close.svg"
import IconButton from "../../../../common/buttons/IconButton/IconButton"
import { useState } from "react"
import InputMask from "@mona-health/react-input-mask"
import check from "../../../../../assets/icons/check.svg"

function RequestModal() {

  const [number, setNumber] = useState("")
  const [name, setName] = useState("")
  const [isSuccess, setSuccess] = useState(false)
  const { isActive, handlerActive } = useModal()

  const handlerSubmit = () => {
    const value = `Номер телефона: ${number}\nИмя: ${name}`
    console.log(value)
    setSuccess(true)
  }

  return (
    <>
      <Button variant="text" variantColor="white" onClick={handlerActive}>ОСТАВИТЬ ЗАЯВКУ</Button>
      <Modal open={isActive} onClose={handlerActive}>
        <>
          {
            isSuccess &&
            <div className={s["success-modal"]}>
              <img className={s["success-modal__check"]} src={check} />
              <h2>ЗАЯВКА УСПЕШНО ОТПРАВЛЕНА</h2>
            </div>
          }
          {
            !isSuccess &&
            <div className={s["request-modal"]}>
              <IconButton className={s["request-modal__close"]} path={close} disableRipple onClick={handlerActive} />
              <div className={s["request-modal__label"]}>
                <h2>ПЕРЕЗВОНИТЬ ВАМ?</h2>
                <p>Оставьте свой номер
                  и наш специалист свяжется с вами</p>
              </div>
              <div className={s["request-modal__inputs"]}>
                <InputField label={"Имя"}
                  onChange={e => setName(e.target.value)}
                />
                <InputMask mask={"+7 999 999 99 99"}>
                  <InputField label={"Телефон"} />
                </InputMask>
              </div>
              <Button variantColor="red" onClick={handlerSubmit}><span>Отправить</span><img src={arrow} /></Button>
            </div>
          }
        </>
      </Modal>
    </>
  )
}

export default RequestModal
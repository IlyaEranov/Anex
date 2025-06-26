import React, { useState } from "react"
import SelectField from "../../../../common/fields/SelectField/SelectField"
import { useModal } from "../../../../../hooks/useModal"
import ModalBottom from "../components/ModalBottom/ModalBottom"
import ModalTop from "../components/ModalTop/ModalTop"
import s from "./TouristsModal.module.scss"
import IconButton from "../../../../common/buttons/IconButton/IconButton"
import increment from "../../../../../assets/icons/increment.svg"
import decrement from "../../../../../assets/icons/decrement.svg"
import ModalLayout from "../components/ModalLayout/ModalLayout"

function TouristsModal() {

  const placeholder = "Туристы"
  const [adults, setAdults] = useState(0)
  const [childs, setChilds] = useState(0)
  const { isActive, anchorEl, handlerActive } = useModal()

  const handlerCount = (v: number, f: React.Dispatch<React.SetStateAction<number>>) => {
    if (v >= 0) {
      f(v)
    }
  }

  const handlerReset = () => {
    setAdults(0)
    setChilds(0)
  }

  return (
    <ModalLayout isOpen={isActive} closeModal={handlerActive} anchorEl={anchorEl}>
      <ModalTop placeholder={placeholder} onClick={handlerActive} />
      <div className={s["tourists-modal"]}>
        <div className={s["tourists-modal__item"]}>
          <div className={s["tourists-modal__text"]}>Взрослые</div>
          <div className={s["tourists-modal__counter"]}>
            <IconButton path={decrement} onClick={() => handlerCount(adults - 1, setAdults)} />
            <span>{adults}</span>
            <IconButton path={increment} onClick={() => handlerCount(adults + 1, setAdults)} />
          </div>
        </div>
        <div className={s["tourists-modal__item"]}>
          <div className={s["tourists-modal__text"]}>Дети (0-17 лет)</div>
          <div className={s["tourists-modal__counter"]}>
            <IconButton path={decrement} onClick={() => handlerCount(childs - 1, setChilds)} />
            <span>{childs}</span>
            <IconButton path={increment} onClick={() => handlerCount(childs + 1, setChilds)} />
          </div>
        </div>
      </div>
      <ModalBottom onClick={handlerReset} />
    </ModalLayout>
  )
}

export default TouristsModal
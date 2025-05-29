import s from "./DirectionModal.module.scss"
import { useState, type FC } from "react"
import SelectField from "../../../../common/fields/SelectField/SelectField"
import { useModal } from "../../../../../hooks/useModal"
import Modal from "../../../../common/Modal/Modal"
import api from "../../../../../../mocks/api/api.json"
import CheckBox from "../../../../common/buttons/CheckBox/CheckBox"
import IconButton from "../../../../common/buttons/IconButton/IconButton"
import close from "../../../../../assets/icons/close.svg"
import arrow from "../../../../../assets/icons/diagonal-arrow.svg"
import Button from "../../../../common/buttons/Button/Button"
import SearchField from "../../../../common/fields/SearchField/SearchField"
import ModalTop from "../ModalTop/ModalTop"
import ModalBottom from "../ModalBottom/ModalBottom"

interface DirectionModalProps {
  placeholder: "Откуда" | "Куда"
}

const DirectionModal: FC<DirectionModalProps> = ({ placeholder }) => {

  const [value, setValue] = useState("")
  const [index, setIndex] = useState<number>()
  const { isOpen, openModal, closeModal } = useModal()

  const handlerChoice = (name: string, i: number) => {
    setValue(name)
    setIndex(i)
  }

  const handlerReset = () => {
    setValue("")
    setIndex(undefined)
  }

  return (
    <>
      <SelectField placeholder={placeholder} onClick={openModal} value={value} />
      <Modal isActive={isOpen} onClick={closeModal}>
        <ModalTop placeholder={placeholder} onClick={closeModal}/>
        <div className={s["direction-modal"]}>
          <SearchField/>
          <div className={s["direction-modal__content"]}>
            {placeholder == "Куда" &&
              <div className={s["direction-modal__column"]}>
                <h3>Популярные</h3>
                {api.countries.map((e, i) =>
                  <div key={e.name} className={s["direction-modal-item"]} onClick={() => handlerChoice(e.name, i)}>
                    <CheckBox isActive={index == i ? true : false} />
                    <div className={s["direction-modal-item__name"]}>{e.name}</div>
                  </div>
                )}
              </div>
            }
            <div className={s["direction-modal__column"]}>
              <h3>Все страны</h3>
              {api.countries.map((e, i) =>
                <div key={e.name} className={s["direction-modal-item"]} onClick={() => handlerChoice(e.name, i)}>
                  <CheckBox isActive={index == i ? true : false} />
                  <div className={s["direction-modal-item__name"]}>{e.name}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <ModalBottom onClick={handlerReset}/>
      </Modal>
    </>
  )
}

export default DirectionModal
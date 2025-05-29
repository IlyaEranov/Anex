import s from "./DirectionModal.module.scss"
import { useState, type FC } from "react"
import SelectField from "../../../../common/fields/SelectField/SelectField"
import { useModal } from "../../../../../hooks/useModal"
import Modal from "../../../../common/Modal/Modal"
import api from "../../../../../../mocks/api/api.json"
import CheckBox from "../../../../common/buttons/CheckBox/CheckBox"
import IconButton from "../../../../common/buttons/IconButton/IconButton"
import close from "../../../../../assets/icons/close.svg"
import search from '../../../../../assets/icons/search.svg'
import arrow from "../../../../../assets/icons/diagonal-arrow.svg"
import Button from "../../../../common/buttons/Button/Button"
import SearchField from "../../../../common/fields/SearchField/SearchField"

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

  return (
    <>
      <SelectField placeholder={placeholder} onClick={openModal} value={value} />
      <Modal isActive={isOpen} onClick={closeModal}>
        <div className={s["direction-modal-top"]}>
          <h2 className={s["direction-modal-top__label"]}>{placeholder}</h2>
          <IconButton path={close} onClick={closeModal} />
        </div>
        <div className={s["direction-modal-main"]}>
          <SearchField/>
          <div className={s["direction-modal-main__content"]}>
            {placeholder == "Куда" &&
              <div className={s["direction-modal-main__column"]}>
                <h3>Популярные</h3>
                {api.countries.map((e, i) =>
                  <div className={s["direction-modal-main-item"]} onClick={() => handlerChoice(e.name, i)}>
                    <CheckBox isActive={index == i ? true : false} />
                    <div className={s["direction-modal-main-item__name"]}>{e.name}</div>
                  </div>
                )}
              </div>
            }
            <div className={s["direction-modal-main__column"]}>
              <h3>Все страны</h3>
              {api.countries.map((e, i) =>
                <div className={s["direction-modal-main-item"]} onClick={() => handlerChoice(e.name, i)}>
                  <CheckBox isActive={index == i ? true : false} />
                  <div className={s["direction-modal--main-item__name"]}>{e.name}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={s["direction-modal-bottom"]}>
          <button className={s["direction-modal-bottom-button"]} onClick={() => {
            setValue("")
            setIndex(undefined)
          }}>Очистить</button>
          <Button style="black"><span className={s["direction-modal-bottom-button__text"]}>ВЫБРАТЬ</span><img src={arrow}/></Button>
        </div>
      </Modal>
    </>
  )
}

export default DirectionModal
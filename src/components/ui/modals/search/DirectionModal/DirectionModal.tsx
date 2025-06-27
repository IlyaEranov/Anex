import { useState, type FC } from "react"
import ModalTop from "../components/ModalTop/ModalTop"
import ModalBottom from "../components/ModalBottom/ModalBottom"
import SearchField from "../../../../common/fields/SearchField/SearchField"
import api from "../../../../../../mocks/api/api.json"
import s from "./DirectionModal.module.scss"
import CheckBox from "../../../../common/buttons/CheckBox/CheckBox"
import { FormControlLabel } from "@mui/material"
import ModalLayout, { type ModalLayoutProps } from "../components/ModalLayout/ModalLayout"

interface DirectionModalProps extends ModalLayoutProps {
  placeholder: "Откуда" | "Куда"
}

const DirectionModal: FC<DirectionModalProps> = ({ placeholder, isOpen, closeModal, anchorEl}) => {

  const [index, setIndex] = useState<number | null>(null)

  return (
    <ModalLayout isOpen={isOpen} closeModal={closeModal} anchorEl={anchorEl}>
      <ModalTop placeholder={placeholder} onClick={closeModal} />
      <div className={s["direction-modal"]}>
        <div className={s["direction-modal__search"]}>
          <SearchField />
        </div>
        <div className={s["direction-modal__content"]}>
          {placeholder == "Куда" &&
            <div className={s["direction-modal__column"]}>
              <h3>Популярные</h3>
              {api.countries.map((e, i) =>
                <FormControlLabel
                  control={
                    <CheckBox
                      className={s["direction-modal-item"]}
                      checked={i == index ? true : false}
                      onClick={() => {
                        if (i == index) {
                          setIndex(null)
                        } else {
                          setIndex(i)
                        }
                      }}
                      aria-label={e.name}
                    />
                  }
                  label={e.name}
                />
              )}
            </div>
          }
          <div className={s["direction-modal__column"]}>
            <h3>Все страны</h3>
            {api.countries.map((e, i) =>
              <FormControlLabel
                control={
                  <CheckBox
                    className={s["direction-modal-item"]}
                    checked={i == index ? true : false}
                    onClick={() => {
                      if (i == index) {
                        setIndex(null)
                      } else {
                        setIndex(i)
                      }
                    }}
                  />
                }
                label={e.name}
              />
            )}
          </div>
        </div>
      </div>
      <ModalBottom />
    </ModalLayout>
  )
}

export default DirectionModal
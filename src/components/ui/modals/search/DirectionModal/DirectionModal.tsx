import React, { useState, type FC } from "react"
import SelectField from "../../../../common/fields/SelectField/SelectField"
import { useModal } from "../../../../../hooks/useModal"
import Modal from "../../../../common/Modal/Modal"
import ModalTop from "../components/ModalTop/ModalTop"
import ModalBottom from "../components/ModalBottom/ModalBottom"
import SearchField from "../../../../common/fields/SearchField/SearchField"
import api from "../../../../../../mocks/api/api.json"
import s from "./DirectionModal.module.scss"
import CheckBox from "../../../../common/buttons/CheckBox/CheckBox"
import { FormControlLabel } from "@mui/material"

interface DirectionModalProps {
  placeholder: "Откуда" | "Куда"
}

const DirectionModal: FC<DirectionModalProps> = ({ placeholder }) => {

  const [value, setValue] = useState("")
  const { isActive, handlerActive } = useModal()
  const [index, setIndex] = useState<number | null>(null)

  return (
    <React.Fragment>
      <SelectField label={placeholder} value={value} onClick={handlerActive} /> 
      <Modal open={isActive} onClose={handlerActive}>
        <React.Fragment>
          <ModalTop placeholder={placeholder} onClick={handlerActive}/>
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
                              setValue("")
                              setIndex(null)
                            } else {
                              setValue(e.name)
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
                            setValue("")
                            setIndex(null)
                          } else {
                            setValue(e.name)
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
        </React.Fragment>
      </Modal>
    </React.Fragment>
  )
}

export default DirectionModal
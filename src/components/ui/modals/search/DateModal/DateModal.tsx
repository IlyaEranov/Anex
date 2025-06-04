import React, { type FC } from "react"
import SelectField from "../../../../common/fields/SelectField/SelectField"
import { useModal } from "../../../../../hooks/useModal"
import Modal from "../../../../common/Modal/Modal"
import ModalTop from "../components/ModalTop/ModalTop"
import ModalBottom from "../components/ModalBottom/ModalBottom"
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import s from "./DateModal.module.scss"

interface DateModalProps {
  placeholder: "Дата" | "На сколько"
}

const DateModal: FC<DateModalProps> = ({ placeholder }) => {

  const { isActive, handlerActive } = useModal()

  return (
    <React.Fragment>
      <SelectField label={placeholder} onClick={handlerActive} />
      <Modal open={isActive} onClose={handlerActive}>
        <React.Fragment>
          <ModalTop placeholder={placeholder} onClick={handlerActive}/>
            <LocalizationProvider adapterLocale="ru" dateAdapter={AdapterDayjs}>
              <DateCalendar className={s.date}/>
              <DateCalendar className={s.date}/>
            </LocalizationProvider>
          <ModalBottom />
        </React.Fragment>
      </Modal>
    </React.Fragment>
  )
}

export default DateModal
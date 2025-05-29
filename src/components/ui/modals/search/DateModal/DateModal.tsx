import { useState, type FC } from "react"
import SelectField from "../../../../common/fields/SelectField/SelectField"
import Modal from "../../../../common/Modal/Modal"
import { useModal } from "../../../../../hooks/useModal"
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers"
import s from "./DateModal.module.scss"
import "dayjs/locale/ru"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import ModalTop from "../ModalTop/ModalTop"
import ModalBottom from "../ModalBottom/ModalBottom"

interface DateModalProps {
  placeholder: "Дата" | "Количество дней"
}

const DateModal: FC<DateModalProps> = ({ placeholder }) => {

  const [] = useState()
  const {isOpen, openModal, closeModal} = useModal()

  return (
    <>
      <SelectField placeholder={placeholder} onClick={openModal}/>
      <Modal isActive={isOpen} onClick={closeModal}>
        <ModalTop placeholder={placeholder} onClick={closeModal}/>
        <LocalizationProvider adapterLocale="ru" dateAdapter={AdapterDayjs}>
          <DateCalendar className={s.date}/>
          <DateCalendar className={s.date}/>
        </LocalizationProvider>
        <ModalBottom/>
      </Modal>
    </>
  )
}

export default DateModal
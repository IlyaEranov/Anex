import { type FC } from "react"
import ModalTop from "../components/ModalTop/ModalTop"
import ModalBottom from "../components/ModalBottom/ModalBottom"
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import s from "./DateModal.module.scss"
import ModalLayout, { type ModalLayoutProps } from "../components/ModalLayout/ModalLayout"

interface DateModalProps extends ModalLayoutProps {
  placeholder: "Дата" | "На сколько"
}

const DateModal: FC<DateModalProps> = ({ placeholder, isOpen, anchorEl, closeModal }) => {
  return (
    <ModalLayout defaultPos isOpen={isOpen} closeModal={closeModal} anchorEl={anchorEl}>
      <ModalTop placeholder={placeholder} onClick={closeModal} />
      <LocalizationProvider adapterLocale="ru" dateAdapter={AdapterDayjs}>
        <div className={s.row}>
          <DateCalendar className={s.date} />
          <DateCalendar className={s.date} />
        </div>
      </LocalizationProvider>
      <ModalBottom />
    </ModalLayout>
  )
}

export default DateModal
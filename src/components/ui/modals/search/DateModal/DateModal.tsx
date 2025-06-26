import { type FC } from "react"
import SelectField from "../../../../common/fields/SelectField/SelectField"
import { useModal } from "../../../../../hooks/useModal"
import ModalTop from "../components/ModalTop/ModalTop"
import ModalBottom from "../components/ModalBottom/ModalBottom"
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import s from "./DateModal.module.scss"
import ModalLayout from "../components/ModalLayout/ModalLayout"

interface DateModalProps {
  placeholder: "Дата" | "На сколько"
}

const DateModal: FC<DateModalProps> = ({ placeholder }) => {

  const { isActive, anchorEl, handlerActive } = useModal()

  return (
    <ModalLayout isOpen={isActive} closeModal={handlerActive} anchorEl={anchorEl}>
      <ModalTop placeholder={placeholder} onClick={handlerActive} />
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
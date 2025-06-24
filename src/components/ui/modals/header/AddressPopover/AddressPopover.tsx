import Popover from "../../../../common/Popover/Popover"
import { useModal } from "../../../../../hooks/useModal"
import IconButton from "../../../../common/buttons/IconButton/IconButton"
import s from "./AddressPopover.module.scss"
import location from "../../../../../assets/icons/location.svg"

function AddressPopover(){

  const {isActive, anchorEl, handlerActive} = useModal()

  return(
    <>
      <IconButton path={location} onClick={handlerActive}/>
      <Popover
        open={isActive}
        anchorEl={anchorEl}
        onClose={handlerActive}
      >
        <div className={s.address}>
          Москва, Россошанский проезд, дом 3, (1-й этаж)
        </div>
      </Popover>
    </>
  )
}

export default AddressPopover
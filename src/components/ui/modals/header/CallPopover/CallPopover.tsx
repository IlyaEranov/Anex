import { useModal } from "../../../../../hooks/useModal"
import IconButton from "../../../../common/buttons/IconButton/IconButton"
import Popover from "../../../../common/Popover/Popover"
import call from "../../../../../assets/icons/call.svg"
import s from "./CallPopover.module.scss"

function CallPopover(){

  const {isActive, anchorEl, handlerActive} = useModal()

  return(
    <>
      <IconButton path={call} onClick={handlerActive}/>
      <Popover
        open={isActive}
        onClose={handlerActive}
        anchorEl={anchorEl}
      >
        <div className={s.calls}>
          <span>+ 8 (495) 626-26-96</span>
          <span>+ 8 (925) 826-26-96</span>
        </div>
      </Popover>
    </>
  )
}

export default CallPopover
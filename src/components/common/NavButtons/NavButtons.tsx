import s from "./NavButton.module.scss"
import RequestModal from "../../ui/modals/header/RequestModal/RequestModal"
import CallPopover from "../../ui/modals/header/CallPopover/CallPopover"
import AddressPopover from "../../ui/modals/header/AddressPopover/AddressPopover"

function NavButtons(){
  return(
    <div className={s["nav-buttons"]}>
      <RequestModal/>
      <div className={s["nav-buttons__icons"]}>
        <CallPopover/>
        <AddressPopover/>
      </div>
    </div>
  )
}

export default NavButtons
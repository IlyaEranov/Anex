import Button from "../buttons/Button/Button"
import IconButton from "../buttons/IconButton/IconButton"
import s from "./NavButtons.module.scss"
import location from "../../../assets/icons/location.svg"
import call from "../../../assets/icons/call.svg"

function NavButtons(){
  return(
    <div className={s["nav-buttons"]}>
      <Button style="white">ОСТАВИТЬ ЗАЯВКУ</Button>
      <div className={s["nav-buttons__icons"]}>
        <IconButton path={call}/>
        <IconButton path={location}/>
      </div>
    </div>
  )
}

export default NavButtons
import Button from "../buttons/Button/Button"
import IconButton from "../buttons/IconButton/IconButton"
import s from "./NavButton.module.scss"
import call from "../../../assets/icons/call.svg"
import location from "../../../assets/icons/location.svg"

function NavButtons(){
  return(
    <div className={s["nav-buttons"]}>
      <Button variantColor="white">ОСТАВИТЬ ЗАЯВКУ</Button>
      <div className={s["nav-buttons__icons"]}>
        <IconButton path={call}/>
        <IconButton path={location}/>
      </div>
    </div>
  )
}

export default NavButtons
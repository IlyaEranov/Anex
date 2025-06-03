import { Link } from "react-router-dom"
import logo from "../../../assets/img/logo.svg"
import s from "./Header.module.scss"
import Nav from "../Nav/Nav"
import IconButton from "../buttons/IconButton/IconButton"
import menu from "../../../assets/icons/menu.svg"
import { useState } from "react"
import NavButtons from "../NavButtons/NavButtons"
import DropDown from "../DropDown/DropDown"

function Header() {

  const [isActive, setActive] = useState(false)

  const handlerActive = () => {
    if(isActive){
      setActive(false)
    } else {
      setActive(true)
    }
  }

  return (
    <header>
      <div className={s.header__inner}>
        <Link to={"/"}>
          <img className={"header-logo__icon"} src={logo} />
        </Link>
        <Nav/>
        <div className={s["header-buttons"]}>
          <div className={s["header-buttons_active"]}>
            <NavButtons/>
          </div>
          <IconButton path={menu} onClick={handlerActive}/>
        </div>
      </div>
      <DropDown open={isActive} onClose={handlerActive}/>
    </header>
  )
}

export default Header
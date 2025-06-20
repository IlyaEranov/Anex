import { Link } from "react-router-dom"
import logo from "../../../assets/img/logo.svg"
import s from "./Header.module.scss"
import Nav from "../Nav/Nav"
import IconButton from "../buttons/IconButton/IconButton"
import menu from "../../../assets/icons/menu.svg"
import NavButtons from "../NavButtons/NavButtons"
import Dropdown from "../Dropdown/Dropdown"
import { useModal } from "../../../hooks/useModal"

function Header() {

  const {isActive, handlerActive} = useModal()

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
          <div className={s.menu__button}>
             <IconButton path={menu} disableRipple onClick={handlerActive}/>
          </div>
        </div>
      </div>
      <Dropdown open={isActive} onClose={handlerActive}/>
    </header>
  )
}

export default Header
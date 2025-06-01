import s from "./Header.module.scss"
import { Link } from "react-router-dom"
import logo from "../../../assets/img/logo.svg"
import SideBar from "../Sidebar/Sidebar"
import MenuButton from "../buttons/MenuButton/MenuButton"
import { useState } from "react"
import NavButtons from "../NavButtons/NavButtons"
import Navbar from "../Navbar/Navbar"

function Header() {

  const [active, setActive] = useState(false)

  const handlerActive = () => {
    if (active) {
      setActive(false)
    } else {
      setActive(true)
    }
  }

  return (
    <header>
      <div className={s.header__wrapper}>
        <Link className={s["header-logo"]} to="/">
          <img className={s["header-logo__icon"]} src={logo} />
        </Link>
        <Navbar/>
        <div className={s["header-buttons"]}>
          <div className={s["header-buttons_active"]}>
            <NavButtons/>  
          </div>
          <MenuButton onClick={handlerActive}/>
        </div>
      </div>
      <SideBar isActive={active}/>
    </header>
  )
}

export default Header
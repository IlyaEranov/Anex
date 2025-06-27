import { Link } from "react-router-dom"
import logo from "../../../assets/img/logo.svg"
import s from "./Header.module.scss"
import Nav from "../Nav/Nav"
import IconButton from "../buttons/IconButton/IconButton"
import menu from "../../../assets/icons/menu.svg"
import NavButtons from "../NavButtons/NavButtons"
import { useModal } from "../../../hooks/useModal"
import { useEffect, useState } from "react"
import Drawer from "../Drawer/Drawer"

function Header() {

  const { isActive, handlerActive } = useModal()
  const [isShow, setShow] = useState(true)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handlerScroll = () => {
      setOffset(scrollY)
      if (scrollY < 500) {
        setShow(true)
      } else if(scrollY > offset) {
        setShow(false)
      } else {
        setShow(true)
      }
    }
    addEventListener("scroll", handlerScroll)
    return () => removeEventListener("scroll", handlerScroll)
  }, [scrollY])

  return (
    <header className={`${s.header} ${isShow ? s._active : s._disabled}`}>
      <div className={s.header__inner}>
        <Link to={"/"}>
          <img className={"header-logo__icon"} src={logo} />
        </Link>
        <Nav />
        <div className={s["header-buttons"]}>
          <div className={s["header-buttons_active"]}>
            <NavButtons />
          </div>
          <div className={s.menu__button}>
            <IconButton path={menu} disableRipple onClick={handlerActive} />
          </div>
        </div>
      </div>
      <Drawer open={isActive} onClose={handlerActive} />
    </header>
  )
}

export default Header
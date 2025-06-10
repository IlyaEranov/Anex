import { Drawer, type DrawerProps } from "@mui/material"
import type { FC } from "react"
import s from "./Dropdown.module.scss"
import api from "../../../../mocks/api/api.json"
import { Link } from "react-router-dom"
import { companyLinks, navLinks } from "../../../router/routes"
import NavButtons from "../NavButtons/NavButtons"

const Dropdown: FC<DrawerProps> = ({ ...rest }) => {
  return (
    <Drawer className={s.dropdown} anchor="top" disableScrollLock {...rest}>
      <div className={s.dropdown__main}>
        <div className={s["dropdown-section"]}>
          <h3 className={s["dropdown-section__label"]}>ПОПУЛЯРНЫЕ СТРАНЫ</h3>
          <ul className={s["dropdown-section__list"]}>
            {api.countries.map(e =>
              <li key={e.name} className={s["dropdown-section__item"]}>
                <Link to={"/"}>{e.name}</Link>
              </li>
            )}
          </ul>
        </div>
        <div className={s["dropdown-section"]}>
          <h3 className={s["dropdown-section__label"]}>ТУРИСТАМ</h3>
          <ul className={s["dropdown-section__list"]}>
            {navLinks.map(e =>
              <li key={e.value} className={s["dropdown-section__item"]}>
                <Link to={e.path}>{e.value}</Link>
              </li>
            )}
            <li key={"Как купить тур"} className={s["dropdown-section__item"]}>
              <Link to={"/"}>Как купить тур</Link>
            </li>
          </ul>
        </div>
        <div className={s["dropdown-section"]}>
          <h3 className={s["dropdown-section__label"]}>КОМПАНИЯ</h3>
          <ul className={s["dropdown-section__list"]}>
            {companyLinks.map(e =>
              <li key={e} className={s["dropdown-section__item"]}>
                <Link to={"/"}>{e}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className={s.dropdown__bottom}>
        <NavButtons/>
      </div>
    </Drawer>
  )
}

export default Dropdown
import { Drawer as MuiDrawer, type DrawerProps } from "@mui/material"
import type { FC } from "react"
import s from "./Drawer.module.scss"
import api from "../../../../mocks/api/api.json"
import { Link } from "react-router-dom"
import { companyLinks, navLinks } from "../../../router/routes"
import NavButtons from "../NavButtons/NavButtons"

const Drawer: FC<DrawerProps> = ({ ...rest }) => {
  return (
    <MuiDrawer className={s.drawer} anchor="top" disableScrollLock {...rest}>
      <div className={s.drawer__main}>
        <div className={s["drawer-section"]}>
          <h3 className={s["drawer-section__label"]}>ПОПУЛЯРНЫЕ СТРАНЫ</h3>
          <ul className={s["drawer-section__list"]}>
            {api.countries.map(e =>
              <li key={e.name} className={s["drawer-section__item"]}>
                <Link to={"/"}>{e.name}</Link>
              </li>
            )}
          </ul>
        </div>
        <div className={s["drawer-section"]}>
          <h3 className={s["drawer-section__label"]}>ТУРИСТАМ</h3>
          <ul className={s["drawer-section__list"]}>
            {navLinks.map(e =>
              <li key={e.value} className={s["drawer-section__item"]}>
                <Link to={e.path}>{e.value}</Link>
              </li>
            )}
            <li key={"Как купить тур"} className={s["drawer-section__item"]}>
              <Link to={"/"}>Как купить тур</Link>
            </li>
          </ul>
        </div>
        <div className={s["drawer-section"]}>
          <h3 className={s["drawer-section__label"]}>КОМПАНИЯ</h3>
          <ul className={s["drawer-section__list"]}>
            {companyLinks.map(e =>
              <li key={e} className={s["drawer-section__item"]}>
                <Link to={"/"}>{e}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className={s.drawer__bottom}>
        <NavButtons/>
      </div>
    </MuiDrawer>
  )
}

export default Drawer
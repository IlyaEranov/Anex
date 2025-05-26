import s from "./Sidebar.module.scss"
import { type FC } from "react";
import { navLinks } from "../../../router/routes";
import { Link } from "react-router-dom";
import api from '../../../../mocks/api/api.json'
import NavButtons from "../NavButtons/NavButtons";

const company = [
  "О нас",
  "Отзывы",
  "Контакты",
  "Новости",
  "Priority",
  "Агентам"
]

interface SidebarProps {
  isActive: boolean
}

const Sidebar: FC<SidebarProps> = ({ isActive }) => {
  return (
    <div className={isActive ? `${s.sidebar} ${s._active}` : s.sidebar}>
      <div className={s.sidebar__main}>
        <div className={s["sidebar-section"]}>
          <h3>ПОПУЛЯРНЫЕ СТРАНЫ</h3>
          <ul className={s["sidebar-section__list"]}>
            {api.countries.map(e =>
              <li key={e.name} className={s["sidebar-section__item"]}>
                <Link to={"/"}>{e.name}</Link>
              </li>
            )}
          </ul>
        </div>
        <div className={s["sidebar-section"]}>
          <h3>ТУРИСТАМ</h3>
          <ul className={s["sidebar-section__list"]}>
            {navLinks.map(e =>
              <li key={e.value} className={s["sidebar-section__item"]}>
                <Link to={e.path}>{e.value}</Link>
              </li>
            )}
            <li key={"Как купить тур"} className={s["sidebar-section__item"]}>
              <Link to={"/"}>Как купить тур</Link>
            </li>
          </ul>
        </div>
        <div className={s["sidebar-section"]}>
          <h3>КОМПАНИЯ</h3>
          <ul className={s["sidebar-section__list"]}>
            {company.map(e =>
              <li key={e} className={s["sidebar-section__item"]}>
                <Link to={"/"}>{e}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className={s.sidebar__bottom}>
        <NavButtons />
      </div>
    </div>
  )
}

export default Sidebar
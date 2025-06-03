import { NavLink } from "react-router-dom"
import { navLinks } from "../../../router/routes"
import s from "./Nav.module.scss"

function Nav(){
  return(
    <nav>
      <ul className={s["nav-inner"]}>
        {navLinks.map(e => 
          <li key={e.value}>
            <NavLink
              to={e.path}
              className={({isActive}) => [
                `${s["nav-inner__link"]} ${isActive && s._active}`
              ].join("")}
            >{e.value.toUpperCase()}</NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Nav
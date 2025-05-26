import s from "./Navbar.module.scss"
import { NavLink } from "react-router-dom"
import { navLinks } from "../../../router/routes"

function Navbar(){
  return(
    <nav>
      <ul className={s["nav-wrapper"]}>
        {navLinks.map(e => 
          <li key={e.value}>
            <NavLink
              to={e.path}
              className={({isActive}) => [
                isActive ? `${s["nav-wrapper__link"]} ${s._active}` : s["nav-wrapper__link"]
              ].join("")} 
            >{e.value.toUpperCase()}</NavLink>
          </li>  
        )}
      </ul>
    </nav>
  )
}

export default Navbar
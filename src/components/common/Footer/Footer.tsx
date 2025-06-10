import s from "./Footer.module.scss"
import logo from '../../../assets/img/logo-footer.svg'
import feather from "../../../assets/icons/feather.svg"
import arrow from "../../../assets/icons/diagonal-arrow.svg"
import { companyLinks } from "../../../router/routes"
import { Link } from "react-router-dom"

const mediaIcons = ["facebook", "instagram", "ok", "telegram", "vk", "whatsapp"]

function Footer() {
  return (
    <footer>
      <div className={s.footer__inner}>
        <div className={s.footer__top}>
          <div className={s.footer__logo}>
            <img src={logo} />
          </div>
          <div className={s["footer-cta"]}>
            <div className={s["footer-cta__label"]}>УЗНАВАЙТЕ О ГОРЯЩИХ ТУРАХ ПЕРВЫМИ</div>
            <div className={s["footer-cta__mail"]}>
              <img className={s.mail__feather} src={feather} />
              <input placeholder="Введите почту" className={s.mail__input} />
              <img className={s.mail__arrow} src={arrow} />
            </div>
          </div>
        </div>
        <div className={s["footer-nav"]}>
          <ul className={s["footer-nav__inner"]}>
            {companyLinks.map(e =>
              <li key={e} className={s["footer-nav__item"]}>
                <Link to={"/"}>{e.toUpperCase()}</Link>
              </li>
            )}
          </ul>
        </div>
        <div className={s["footer-media"]}>
          <div className={s["footer-media__inner"]}>
            {mediaIcons.map(e =>
              <img src={new URL(`../../../assets/icons/media/${e}.svg`, import.meta.url).href} />
            )}
          </div>
        </div>
        <div className={s.footer__bottom}>2023 © Anex Tour - Туристическая компания</div>
      </div>
    </footer>
  )
}

export default Footer
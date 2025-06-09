import React from "react"
import s from "./HeroSection.module.scss"
import Search from "../../../../common/Search/Search"

function HeroSection() {
  return (
    <section className={s["hero-section"]}>
      <div className={s["hero-section__inner"]}>
        <div className={s["hero-section__container"]}>
          <h1 className={s["hero-section__label"]}>ПУТЕШЕСТВИЯ МЕЧТЫ</h1>
          <Search/>
        </div>
      </div>
    </section>
  )
}

export default React.memo(HeroSection)
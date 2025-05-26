import React from "react"
import SearchField from "../../../../common/fields/SearchField/SearchField"
import s from "./HeroSection.module.scss"

function HeroSection() {
  return (
    <section className={s["hero-section"]}>
      <div className={s["hero-section__wrapper"]}>
        <div className={s["hero-section__container"]}>
          <h1 className={s["hero-section__label"]}>ПУТЕШЕСТВИЯ МЕЧТЫ</h1>
          <SearchField />
        </div>
      </div>
    </section>
  )
}

export default React.memo(HeroSection)
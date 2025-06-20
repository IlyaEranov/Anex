import Container from "../../../../common/Container/Container"
import s from "./NewsSection.module.scss"
import api from "../../../../../../mocks/api/api.json"
import { useEffect, useState } from "react"
import Button from "../../../../common/buttons/Button/Button"

function NewsSection() {

  const [limit, setLimit] = useState(3)

  const isActive = (i: number) => {
    return i % 6 == 0 || i == 0 ? s._active : ``
  }

  useEffect(() => {
    const getLimit = () => {
      if(innerWidth >= 768){
        setLimit(api.news.length)
      } else {
        setLimit(3)
      }
    }
    getLimit()
    addEventListener("resize", getLimit)
    return () => removeEventListener("resize", getLimit)
  }, [])

  return (
    <Container
      h2="НОВОСТИ"
      h3="СОБЫТИЯ В МИРЕ ТУРИЗМА"
      styleContainer={{ backgroundColor: "#F8F8F8" }}
    >
      <ul className={s["news-list"]}>
        {api.news.map((e, i) =>
          i <= limit - 1 &&
          <li
            key={`${e.title}_${i}`}
            className={`${s["news-list__item"]} ${(i % 5 == 0 && i != 0 ) ? s._disabled : ``} ${isActive(i)}`}
            style={{
              backgroundImage: `url(../../../../../../mocks/images/news/${e.image})`
            }}
          >
            <div className={`${s.title__container} ${isActive(i)}`}>
              <div className={`${s.title} ${isActive(i)}`}>{e.title.toUpperCase()}</div>
              <div className={s.details}>читать</div>
            </div>
          </li>
        )}
      </ul>
      {
        limit < api.news.length &&
        <div className={s.news__button}>
          <Button variantColor="white" onClick={() => setLimit(limit + 3)}>Больше новостей</Button>
        </div>
      }
    </Container>
  )
}

export default NewsSection
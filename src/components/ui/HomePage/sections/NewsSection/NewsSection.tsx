import { ImageList, ImageListItem } from "@mui/material"
import Container from "../../../../common/Container/Container"
import api from "../../../../../../mocks/api/api.json"
import s from "./NewsSection.module.scss"
import { useEffect, useState } from "react"

function NewsSection() {

  const [cols, setCols] = useState(1)
  const [shape, setShape] = useState(1)
  const [disable, setDisable] = useState(false)

  useEffect(() => {
    const handlerResize = () => {
      if(innerWidth >= 1600){
        setCols(5)
      } else if(innerWidth >= 1440){
        setCols(4)
        setShape(2)
        setDisable(true)
      } else if(innerWidth >= 1024){
        setCols(3)
        setShape(2)
        setDisable(false)
      } else if(innerWidth >= 768){
        setCols(2)
        setShape(1)
      } else {
        setCols(1)
      }
    }
    handlerResize()
    addEventListener("resize", handlerResize)
    return () => removeEventListener("resize", handlerResize)
  }, [])

  return (
    <Container
      h2="НОВОСТИ"
      h3="СОБЫТИЯ В МИРЕ ТУРИЗМА"
      styleContainer={{backgroundColor: "#F8F8F8"}}
    >
      <div className={s.image__container}>
        <ImageList
          variant="quilted"
          cols={cols}
          gap={32}
        >
          {api.news.map((e, i) =>
            <ImageListItem 
              sx={{
                display: disable && i == 5 ? "none" : "block"
              }}
              cols={i == 0 || i == 6 ? shape : 1}>
              <div
                className={`${s.image} ${(shape == 2 && (i == 0 || i == 6)) && s._active}`}
                style={{ 
                  backgroundImage: `url(../../../../../../mocks/images/news/${e.image})`, 
                  justifyContent: (i == 0 || i == 6) && shape == 2 ? "center" : "end",
                  alignItems: i == 6 && shape == 2 ? "end" : "start"
                }}
              >
                <div 
                  className={s.text}
                  style={{
                    width: (i == 0 || i == 6) && shape == 2 ? 220 : `100%`
                  }}
                >
                  <div 
                    className={s.title}
                    style={{
                      fontSize: (i == 0 || i == 6) && shape == 2 ? 24 : 16
                    }}
                  >{e.title.toUpperCase()}</div>
                  <div className={s.details}>читать</div>
                </div>
              </div>
            </ImageListItem>
          )}
        </ImageList>
      </div>
    </Container>
  )
}

export default NewsSection
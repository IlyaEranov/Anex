import type { FC, ReactNode } from "react"
import s from "./Container.module.scss"

interface ContainerProps{
  children: ReactNode
  h2: string
  h3: string
  styleContainer?: React.CSSProperties
  styleLabel?: React.CSSProperties
  id?: string
}

const Container: FC<ContainerProps> = ({children, h2, h3, styleContainer, styleLabel, id}) => {
  return(
    <section className={s.container} style={styleContainer} id={id}>
      <div className={s.label} style={styleLabel}>
        <h2 className={s.label__h2} style={styleLabel}>{h2}</h2>
        <h3 className={s.label__h3} style={styleLabel}>{h3}</h3>
      </div>
      {children}
    </section>
  )
}

export default Container
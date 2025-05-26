import s from "./ToursPage.module.scss"
import { useState } from "react";
import SelectField from "../../common/fields/SelectField/SelectField";
import Layout from "../../common/Layout/Layout";

function ToursPage(){

  const [value, setValue] = useState<string | undefined>()
  const [active, setActive] = useState(false)

  const handlerSubmit = () => {
    setValue("Будапешт")
    setActive(false)
  }

  return(
    <Layout>
      <SelectField placeholder={"Откуда"} value={value} onClick={() => setActive(true)}/>
      <span className={s.line}></span>
      <SelectField placeholder={"Откуда"} value={value}/>
      <span className={s.line}></span>
      <SelectField placeholder={"Откуда"} value={value}/>
      <span className={s.line}></span>
      <button onClick={() => setValue("Москва")}>Click</button>
      <button onClick={() => setValue(undefined)}>Click</button>
      {active && <div onClick={handlerSubmit}>Modal</div>}
    </Layout>
  )
}

export default ToursPage
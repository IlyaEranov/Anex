import s from "./ToursPage.module.scss";
import Layout from "../../common/Layout/Layout";
import DirectionModal from "../../ui/modals/search/DirectionModal/DirectionModal";

function ToursPage(){
  return(
    <Layout>
      <DirectionModal placeholder="Откуда"/>
      <DirectionModal placeholder="Куда"/>
    </Layout>
  )
}

export default ToursPage
import { CircularProgress, Container } from "@mui/material";
import s from "./Loader.module.scss";

function Loader(){
  return(
    <Container className={s.loader__container}>
      <CircularProgress size={60} className={s.loader}/>
    </Container>
  )
}

export default Loader
import Container from "../../../../common/Container/Container"
import ReviewSlider from "../../sliders/ReviewSlider/ReviewSlider"

function ReviewSection(){
  return(
    <Container
      h2="ОТЗЫВЫ"
      h3="ВПЕЧАТЛЕНИЯ НАШИХ ПУТЕШЕСТВЕННИКОВ"
    >
      <ReviewSlider/>
    </Container>
  )
}

export default ReviewSection
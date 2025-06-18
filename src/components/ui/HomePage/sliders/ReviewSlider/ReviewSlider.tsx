import Slider from "../../../../common/Slider/Slider";
import ReviewCard from "../../../cards/ReviewCard/ReviewCard";
import avatar from "../../../../../../mocks/images/77b25a31b49e58ea4fbbd69b8d68aba85286a516.jpg"
import { useRef } from "react";

function ReviewSlider() {

  const blockWidth = useRef<HTMLDivElement>(null)

  return (
    <Slider blockWidth={blockWidth.current?.clientWidth || 320}>
      {[...Array(20)].map((_, i) =>
        <ReviewCard
          key={`Александр Г.${i}`}
          image={avatar}
          rating={5}
          name="Александр Г."
          city="Санкт-Петербург"
          country="Тайланд"
          date={{
            dayStart: 10,
            mounth: "05",
            year: 23
          }}
          gender="male"
          hotel="The Silver Palm Wellness Resort"
          comment={`Путешествие в Таиланд оказалось невероятным благодаря вашим услугам.
        Профессиональное планирование, отличные рекомендации по местам для посещения и великолепный выбор отелей. 
        Обязательно вернусь к вам снова.`}
          refDiv={blockWidth}
        />
      )}
    </Slider>
  )
}

export default ReviewSlider
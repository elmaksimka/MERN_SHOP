import leftChevron from '../img/left-chevron.svg'
import rightChevron from '../img/right-chevron.svg'
import { Link } from 'react-router-dom'

function CarouselLine() {
  return (
    <div className="carousel">
    <div className="carousel__content">
        <div>
            <img src={leftChevron} alt="left-chevron" />
        </div>
        <div className="carousel__text carousel_font_black">
            Up to 70% Off.
        </div>
        <Link to='/sales'>
            <div className="carousel__text carousel_text_underline">
                Shop our latest sale styles
            </div>
        </Link>
        <div>
            <img src={rightChevron} alt="right-chevron" />
        </div>
    </div>
  </div>
  )
}

export default CarouselLine
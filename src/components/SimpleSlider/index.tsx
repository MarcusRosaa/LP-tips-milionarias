// Import the necessary components and styles
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slideOne from '../../assets/slider/slider-1.jpeg'
import slideTwo from '../../assets/slider/slider-2.jpeg'
import slideThree from '../../assets/slider/slider-3.jpeg'
import slideFour from '../../assets/slider/slider-4.jpeg'
import slideFive from '../../assets/slider/slider-5.jpeg'
import slideSix from '../../assets/slider/slider-6.jpeg'
import { ImageContainer } from './styles';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <ImageContainer>
        <img src={slideOne} />
      </ImageContainer>
      <ImageContainer>
        <img src={slideTwo}  />
      </ImageContainer>
      <ImageContainer>
        <img src={slideThree} />
      </ImageContainer>
      <ImageContainer>
        <img src={slideFour} />
      </ImageContainer>
      <ImageContainer>
        <img src={slideFive} />
      </ImageContainer>
      <ImageContainer>
        <img src={slideSix} />
      </ImageContainer>
    </Slider>
  );
};

export default SimpleSlider;

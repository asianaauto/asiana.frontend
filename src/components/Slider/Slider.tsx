import { Component } from 'react';
import './Slider.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from '../../assets/Poprobui370x370.jpg';
import Shinomontag from '../../assets/Shinomontag370x370 (1).jpg';
import Promotions from '../Promotions/Promotions';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      autoplaySpeed: 6000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div className="sliderBlock">
        <div className="Promotions-contener">
          <Promotions title="ознакомьтесь с акциями" />
        </div>
        <Slider {...settings}>
          <div className="Slider-slide">
            <img className="slider1" src={image} alt="" />
          </div>
          <div className="Slider-slide">
            <img className="slider1" src={Shinomontag} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AkumuImage from './img/akumu.png';
import VueImage from './img/Vue2.png';
import PortfolioImage from './img/portfolio1.png';
import BlogImage from './img/blog.png'

const slides = [
  {
    image:PortfolioImage,
    alt: 'ポートフォリオver1です',
    text: '初めて作ったポートフォリオです',
    link: 'https://kokotyan.github.io/'
  },
  {
    image: VueImage,
    alt: 'メモ帳アプリです',
    text: 'youtubeを見ながら作りました。',
    link: 'https://kokotyan.github.io/todoapp/'
  },
  {
    image: BlogImage,
    text: '個人的に運営しているブログです',
    link: 'https://hagf.buzz/'
  },
  {
    image: AkumuImage,
    alt: 'SEKAI NO OWARIの銀河街の悪夢をイメージして作りました',
    text: 'SEKAI NO OWARIのファンアートです、絶望した少年を描いています。'
  },
];

const SlideComponent = () => {
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <div key={index} className="slide-container">
{slide.link ? (
  <a href={slide.link} target='_blank' rel='noopener noreferrer'>
    <img src={slide.image} alt={slide.alt} className="slide-image" />
  </a>
) : (
  <img src={slide.image} alt={slide.alt} className="slide-image" />
)}
          <p className="slide-text">{slide.text}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default SlideComponent;

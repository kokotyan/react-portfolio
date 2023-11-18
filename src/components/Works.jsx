import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import KurageImage from './img/kuragechan.png';
import SuikaImage from './img/suika.png';
import AkumuImage from './img/akumu.png';
import VueImage from './img/Vue2.png';

const slides = [
  {
    image: KurageImage,
    alt: 'クラゲをイメージして作ったもの',
    text: '八月に増えるクラゲをイメージして作りました。苦労した点は毒をどう表現しようという単純なものでした。',
  },
  {
    image: SuikaImage,
    alt: '暑い夏をイメージして作りました',
    text: 'これは夏のスイカをイメージして作ったものです。苦労したことは私は基本鉛筆画を描く人なので、なかなかイメージがわかなかったことです。',
  },
  {
    image: AkumuImage,
    alt: '銀河街の悪夢をイメージして作りました',
    text: 'そんなに得意ではありませんが、イラストも描きます。これは私の好きなバンドの曲をモチーフにしていて、絶望した少年を描いています。',
  },
  {
    image: VueImage,
    alt: 'メモ帳アプリです',
    text: 'youtubeを見ながら作りました。',
    link: 'https://kokotyan.github.io/todoapp/',
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

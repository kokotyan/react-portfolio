import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import KurageImage from './img/kuragechan.png';
import SuikaImage from './img/suika.png';
import AkumuImage from './img/akumu.png';

const slides = [
  {
    image: KurageImage,
    alt: 'クラゲ画像',
    concept: '八月に増えるクラゲ、危ないぞというコンセプトで作りました。',
    struggles: '苦労した点は毒をどんな感じで表現しようかという単純なものでした。',
  },
  {
    image: SuikaImage,
    alt: 'スイカ画像',
    concept: 'これを作った頃は特に熱かったので涼しいものをというコンセプトです。',
    struggles: '苦戦したことは基本鉛筆で絵を描くのでどうしてもイメージできなかったところです。',
  },
  {
    image: AkumuImage,
    alt: '銀河街の悪夢',
    concept: 'そんなに上手ではありませんが、イラストも描けます',
    struggles: 'このイラストのコンセプトは絶望した少年を描いてみようということで描きました。苦労した点は雨で濡れた肩を描く時の色に困りました。',
  },
];

const SlideComponent = () => {
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt={slide.alt} />
          <p>{slide.concept}</p>
          <p>{slide.struggles}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default SlideComponent;
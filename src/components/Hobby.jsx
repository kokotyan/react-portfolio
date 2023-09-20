import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import GadgetImage from './img/gadgetpt2.jpeg';
import GameImage from './img/game.jpg';
import SoraImage from './img/photo.jpg';

const SlideComponent = () => {
  return (
    <Carousel>
      <div>
        <img src={GadgetImage} alt="ガジェット画像" />
        <p>配信で使う機材や、ライフハックのために集めてます</p>
      </div>
      <div>
        <img src={GameImage} alt="ゲーム画像" />
        <p>最近やっているのかドラクエXとAC6</p>
      </div>
      <div>
        <img src={SoraImage} alt="空の画像" />
        <p>外で写真を撮るのが好きです</p>
      </div>
    </Carousel>
  );
}

export default SlideComponent;

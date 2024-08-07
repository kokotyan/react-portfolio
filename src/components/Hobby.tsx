import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import GadgetImage from './img/gadgetpt2.jpeg';
import GameImage from './img/game.jpg';
import SoraImage from './img/photo.jpg';
import AmzImage from './img/amazarashi.jpeg'

const SlideComponent: React.FC = () => {
  return (
    <Carousel>
      <div>
        <img src={GadgetImage} alt="ガジェット画像" />
        <p>機材を集めるのが好きです</p>
      </div>
      <div>
        <img src={GameImage} alt="ゲーム画像" />
        <p>最近やっているタイトルはドラクエXとモンスターハンターIBです</p>
      </div>
      <div>
        <img src={SoraImage} alt="空の画像" />
        <p>外で写真を撮るのが好きです</p>
      </div>
      <div>
        <img src={AmzImage} alt="音楽" />
        <p>実はamazarashiというバンドが好きです</p>
      </div>
    </Carousel>
  );
};

export default SlideComponent;

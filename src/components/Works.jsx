import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import KurageImage from './img/kuragechan.png';
import SuikaImage from './img/suika.png';
import AkumuImage from './img/akumu.png';

const SlideComponent = () => {
  return (
    <Carousel>
      <div>
        <img src={KurageImage} alt='クラゲ画像' />
        <p>八月に増えるクラゲ、危ないぞというコンセプトで作りました。</p>
        <p>苦労した点は毒をどんな感じで表現しようかという単純なものでした。</p>
      </div>
      <div>
        <img src={SuikaImage} alt="スイカ画像" />
        <p>これを作った頃は特に熱かったので涼しいものをというコンセプトです。</p>
        <p>苦戦したことは基本鉛筆で絵を描くのでどうしてもイメージできなかったところです。</p>
      </div>
      <div>
        <img src={AkumuImage} alt="銀河街の悪夢" />
        <p>そんなに上手ではありませんが、イラストも描けます</p>
        <p>このイラストのコンセプトは絶望した少年を描いてみようということで描きました</p>
        <p>苦労した点は雨で濡れた肩を描く時の色に困りました。</p>
      </div>
    </Carousel>
  );
}

export default SlideComponent;
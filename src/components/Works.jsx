import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import KurageImage from './img/kuragechan.png';
import SuikaImage from './img/suika.png';
import AkumuImage from './img/akumu.png';

const SlideComponent = () => {
  return(
    <Carousel>
      <div>
        <img src={KurageImage} alt="クラゲをイメージして作ったもの" />
        <p>八月に増えるクラゲをイメージして作りました</p>
        <p>苦労した点は毒をどう表現しようという単純なものでした</p>
      </div>
      <div>
        <img src={SuikaImage} alt="暑い夏をイメージして作りました" />
        <p>これは夏のスイカをイメージして作ったものです</p>
        <p>苦労したことは私は基本鉛筆画を描く人なので</p>
        <p>なかなかイメージがわかなかったことです</p>
      </div>
      <div>
        <img src={AkumuImage} alt="銀河街の悪夢をイメージして作りました" />
        <p>そんなに得意ではありませんが、イラストも描きます</p>
        <p>これは私の好きなバンドの曲をモチーフにしていて</p>
        <p>絶望した少年を描いています</p>
      </div>
    </Carousel>
  )
}

export default SlideComponent;
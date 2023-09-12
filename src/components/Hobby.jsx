import React, { useEffect, useRef } from 'react';
import $ from 'jquery'; // jQueryをインポート
import 'slick-carousel/slick/slick.css'; // Slick.jsのCSSをインポート
import 'slick-carousel/slick/slick-theme.css'; // Slick.jsのテーマCSSをインポート
import 'slick-carousel/slick/slick'; // Slick.js本体をインポート
import GadgetImage from './img/gadget.jpg';
import GameImage from './img/game.jpg';
import PhotoImage from './img/photo.jpg';

const HobbySection = () => {
  const mainSliderRef = useRef(null);

  useEffect(() => {
    $(mainSliderRef.current).slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }, [mainSliderRef]);

  return (
    <section id="hobby">
      <h2>hobby</h2>
      <div id="double-slider">
        <div ref={mainSliderRef} id="main-slider">
          <img src={GadgetImage} alt="gadget" />
          <img src={GameImage} alt="game" />
          <img src={PhotoImage} alt="photo" />
        </div>
        <div id="text-slider">
          <div className="txt">
            <h3>機材集め</h3>
            <p>生粋のガジェット好き</p>
            <p>配信で使う機材や、ライフハックのために集めてます</p>
          </div>
          <div className="txt">
            <h3>オンラインゲーム</h3>
            <p>よくするのはドラクエXとBattlefield。</p>
          </div>
          <div className="txt">
            <h3>写真撮影</h3>
            <p>ふらっと外に出てみたり旅に行きたくなる人なので</p>
            <p>それの記録に写真を撮ってます</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbySection;

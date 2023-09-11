import React from 'react';
import myroomImage from './img/my-room.jpg';
import zidoriImage from './img/zidori.jpg'; 

function MyComponent() {
  return (
    <main id="overview">
      <div className="list-menu">
        <div className="content">
          <img src={myroomImage} alt="部屋の机回り" />
        </div>
        <h2>overview</h2>
        <div className="section">
          <figure>
            <img src={zidoriImage} alt="自撮り" /> 
            <figcaption>2001/02/07 石川県珠洲市にて産声をあげた</figcaption>
          </figure>
          <div>
            <p>金沢出身。</p>
            <p>訓練中のwebデザイナーの卵</p>
            <p>空と音楽、それと美味しいものが好き</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MyComponent;

import React from 'react';
import myroomImage from './img/myroom.jpeg';
import zidoriImage from './img/zidori.jpg';

function MyComponent() {
  return (
    <main id="Home">
      <div className="list-menu">
        <div className="content">
          <img src={myroomImage} alt='' />
        </div>
        <h2>overview</h2>
        <div className="section">
          <figure>
            <img src={zidoriImage} alt=''/>
            <figcaption>2001/02/07 石川県珠洲市にて産声をあげた</figcaption>
          </figure>
          <div className='text'>
            <p>加賀百万石、金沢育ちです。</p>
            <p>フロントエンドエンジニアを目指す者</p>
            <p>空と音楽、それと美味しいものが好き</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MyComponent;

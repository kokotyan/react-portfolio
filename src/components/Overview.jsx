import React from 'react';
import myroomImage from './img/6670F46F-3567-422C-BE4A-3A8FD8949C7A_1_105_c.jpeg';
import zidoriImage from './img/zidori.jpg'; 

function MyComponent() {
  return (
    <main id="overview">
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
          <div>
            <p>金沢出身。</p>
            <p>訓練中なエンジニアの卵</p>
            <p>空と音楽、それと美味しいものが好き</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MyComponent;

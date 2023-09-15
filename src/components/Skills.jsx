import React from 'react';
import Htmlimage from './img/html-5.svg';
import CssImage from './img/css-3.svg';
import JqeryImage from'./img/jquery.svg';
import ReactImage from './img/react.svg';
import IllustratorImage from './img/adobe-illustrator.svg';
import photoshopImage from './img/adobe-photoshop.svg';
import WindowsImage from './img/microsoft-windows-icon.svg';
import AppleImage from './img/apple.svg';
import SlackImage from './img/slack-icon.svg';
import GithubImage from './img/github-icon.svg';
import Awsimage from './img/aws.svg';
import WordpressImage from './img/wordpress-icon-alt.svg';

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="container">
        {/* HTML */}
        <li className="skill-item">
          <img src={Htmlimage} alt='' />
          <p>基本的には不自由なく使いこなせています。</p>
        </li>

        {/* CSS */}
        <li className="skill-item">
          <img src={CssImage} alt='' />
          <p>レスポンシブ化も出来ます。</p>
        </li>

        {/* jQuery */}
        <li className="skill-item">
          <img src={JqeryImage} alt='' />
          <p>プラグインなどを使ってこのサイトを作っています。</p>
        </li>

        {/* React */}
        <li className="skill-item">
          <img src={ReactImage} alt='' />
          <p>現在ポートフォリオVer2をこれで作っています。</p>
        </li>

        {/* Adobe Illustrator */}
        <li className="skill-item">
          <img src={IllustratorImage} alt='' />
          <p>簡単なイラストなら掛けます。</p>
        </li>

        {/* Adobe Photoshop */}
        <li className="skill-item">
          <img src={photoshopImage} alt='' />
          <p>そんなに得意ではないが、軽い画像加工なら出来ます。</p>
        </li>

        {/* Game Development on Microsoft Windows */}
        <li className="skill-item">
          <img src={WindowsImage} alt='' />
          <p>自作PCから配信、versionは11のinsiderprogramに参加しています。</p>
        </li>

        {/* Apple Beta Version */}
        <li className="skill-item">
          <img src={AppleImage} alt='' />
          <p>外では基本macなのでコーディングなどはこちらが多め。beta版使ってます。</p>
        </li>

        {/* Slack */}
        <li className="skill-item">
          <img src={SlackImage} alt='' />
          <p>discord感覚で使えますが、botは作ったことはありません。</p>
        </li>

        {/* GitHub */}
        <li className="skill-item">
          <img src={GithubImage} alt='' />
          <p>これの管理を実際にgitでやってます。</p>
        </li>

        {/* Amazon Web Services (AWS) */}
        <li className="skill-item">
          <img src={Awsimage} alt='' />
          <p>EC2インスタンスは理解できたが、実用には至らなかった。</p>
        </li>

        {/* WordPress */}
        <li className="skill-item">
          <img src={WordpressImage} alt='' />
          <p>ブログ運営として１年ほど使いました。</p>
        </li>
      </div>
    </section>
  );
}

export default Skills;

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
import NodeImage from './img/node-js-icon-454x512-nztofx17.png';
import VueImage from './img/Vue2.png';
import PythonImage from './img/python.png';
import PHPImage from './img/PHP.png';
import NuxtImage from './img/nuxt.png';
import TsImage from './img/ts.png'

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

        {/*node.js*/}
        <li className="skill-item">
          <img src={NodeImage} alt="" />
          <p>progateを修了する程度には出来ます。</p>
        </li>

        {/*vue.js */}
        <li className="skill-item">
          <img src={VueImage} alt="" />
          <p>簡単なメモ帳アプリが作れます。</p>
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
      <h2>I'm studying now</h2>

      {/*python */}
      <li className="skill-item">
          <img src={PythonImage} alt="" />
          <p>11月に入ってから機械学習に興味をもち学習を始めた。最近はpandasやseabornについて触れている。</p>
        </li>

        {/*PHP */}
        <li className="skill-item">
          <img src={PHPImage} alt="" />
          <p>この言語はwordpressで開発を進めるのにあたって触る事になった。udemyで講座受けている。</p>
        </li>

        {/*Nuxt.js */}
        <li className="skill-item">
          <img src={NuxtImage} alt="" />
          <p>モダンな開発がしたいと思ってkindleで書籍を買ってぼちぼち学んでいる。</p>
        </li>

        {/*typescript */}
        <li className="skill-item">
          <img src={TsImage} alt="" />
          <p>これもモダンな開発に必要だと感じkindleで書籍を買い学習中。</p>
        </li>
        
    </section>
  );
}

export default Skills;

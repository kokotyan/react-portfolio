import React from "react";
import Htmlimage from "./img/html-5.svg";
import CssImage from "./img/css-3.svg";
import JqeryImage from "./img/jquery.svg";
import ReactImage from "./img/react.svg";
import PHPImage from "./img/PHP.png";
import WindowsImage from "./img/microsoft-windows-icon.svg";
import AppleImage from "./img/apple.svg";
import SlackImage from "./img/slack-icon.svg";
import GithubImage from "./img/github-icon.svg";
import Awsimage from "./img/aws.svg";
import WordpressImage from "./img/wordpress-icon-alt.svg";
import NodeImage from "./img/node-js-icon-454x512-nztofx17.png";
import VueImage from "./img/Vue2.png";
import PythonImage from "./img/python.png";
import NuxtImage from "./img/nuxt.png";
import TsImage from "./img/ts.png";
import LinuxImage from "./img/ubuntu.png";

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="container">
        {/* HTML */}
        <li className="skill-item">
          <img src={Htmlimage} alt="" />
          <p>基本的には不自由なく使いこなせています。</p>
        </li>

        {/* CSS */}
        <li className="skill-item">
          <img src={CssImage} alt="" />
          <p>レスポンシブなサイトが作れます。</p>
        </li>

        {/* jQuery */}
        <li className="skill-item">
          <img src={JqeryImage} alt="" />
          <p>slickなどを使ってver1のポートフォリオを作りました。</p>
        </li>

        {/* React */}
        <li className="skill-item">
          <img src={ReactImage} alt="" />
          <p>現在のポートフォリオはこれで作られています。</p>
        </li>

        {/* TypeScript */}
        <li className="skill-item">
          <img src={TsImage} alt="" />
          <p>このサイトの大半はこれ、最近jsxからtsxに変えました</p>
        </li>

        {/* vue.js */}
        <li className="skill-item">
          <img src={VueImage} alt="" />
          <p>簡単なメモ帳アプリが作れます。</p>
        </li>

        {/* Game Development on Microsoft Windows */}
        <li className="skill-item">
          <img src={WindowsImage} alt="" />
          <p>自作PC組めます、win11のbeta版を使ってます</p>
        </li>

        {/* Apple Beta Version */}
        <li className="skill-item">
          <img src={AppleImage} alt="" />
          <p>基本macで作業してます、ちなみにbeta版使ってます。</p>
        </li>

        {/* Slack */}
        <li className="skill-item">
          <img src={SlackImage} alt="" />
          <p>基本業務連絡はslack、botは作ったことはありません。</p>
        </li>

        {/* GitHub */}
        <li className="skill-item">
          <img src={GithubImage} alt="" />
          <p>コードの管理はgitでやってます。</p>
        </li>

        {/* WordPress */}
        <li className="skill-item">
          <img src={WordpressImage} alt="" />
          <p>ブログ運営したりバイトで使ってるcmsはこれです。</p>
        </li>
      </div>
      <h3>I'm studying now</h3>

      {/* PHP */}
      <li className="skill-item">
        <img src={PHPImage} alt="" />
        <p>お問い合わせフォームを作る程度にはできます。</p>
      </li>

      {/* node.js */}
      <li className="skill-item">
        <img src={NodeImage} alt="" />
        <p>progateを修了する程度にはできます。</p>
      </li>

      {/* Amazon Web Services (AWS) */}
      <li className="skill-item">
        <img src={Awsimage} alt="" />
        <p>講座は受けたことありますが、実用には至らず。</p>
      </li>

        {/* python */}
        <li className="skill-item">
          <img src={PythonImage} alt="" />
          <p>機械学習に興味をもち学習を始めた。最近はpandasやseabornについて触れている。</p>
        </li>

        {/* Nuxt.js */}
        <li className="skill-item">
          <img src={NuxtImage} alt="" />
          <p>モダンな開発がしたいと思ってkindleで書籍を買ってぼちぼち学んでいる。</p>
        </li>

        {/* linux */}
        <li className="skill-item">
          <img src={LinuxImage} alt="" />
          <p>macの中に仮想環境としてubuntuを構築しました、まだ理解していません。</p>
        </li>
      </section>
    );
}

export default Skills;


import React from "react";

// スキルのデータの型定義
interface Skill {
  src: string;
  alt: string;
  description: string;
}

// スキルのデータ
const skillsData: Skill[] = [
  { src: require("./img/html-5.svg").default, alt: "HTML", description: "基本的には不自由なく使いこなせています。" },
  { src: require("./img/css-3.svg").default, alt: "CSS", description: "レスポンシブなサイトが作れます。" },
  { src: require("./img/jquery.svg").default, alt: "jQuery", description: "slickなどを使ってver1のポートフォリオを作りました。" },
  { src: require("./img/react.svg").default, alt: "React", description: "現在のポートフォリオは基本この言語で作られています。" },
  { src: require("./img/ts.svg").default, alt: "TypeScript", description: "このサイトの大半はこれ、最近jsxからtsxに変えました。" },
  { src: require("./img/vue.svg").default, alt: "Vue.js", description: "簡単なメモ帳アプリが作れます。" },
  { src: require("./img/python.svg").default, alt: "Python", description: "2024/6/2現在この言語で服薬管理のソフトを作成中です" },
  { src: require("./img/vscode.svg").default,alt: "vscode",description: "コーディングは基本的にこのソフトでしてます。"},
  { src: require("./img/windows.svg").default, alt: "Game Development on Microsoft Windows", description: "自作PC組めます、win11のbeta版を使ってます。" },
  { src: require("./img/apple.svg").default, alt: "Apple Beta Version", description: "基本macで作業してます、ちなみにbeta版使ってます。" },
  { src: require("./img/slack.svg").default, alt: "Slack", description: "基本業務連絡はslack、botは作ったことはありません。" },
  { src: require("./img/github.svg").default, alt: "GitHub", description: "コードの管理はgitでやってます。" },
  { src: require("./img/wordpress.svg").default, alt: "WordPress", description: "ブログ運営のcmsはこれです、実務経験は半年です。" },
];

// SkillItemコンポーネント
const SkillItem: React.FC<Skill> = ({ src, alt, description }) => (
  <li className="skill-item">
    <img src={src} alt={alt} />
    <p>{description}</p>
  </li>
);

// Skillsコンポーネント
const Skills: React.FC = () => (
  <section id="skills">
    <h2>Skills</h2>
    <div className="container">
      {skillsData.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </div>
    
    <h3>I'm studying now</h3>
    <div className="container">
      {/* 以下の部分をループで動的に生成 */}
      {[
        { src: require("./img/nodejs.svg").default, alt: "node.js", description: "progateを修了する程度には使えます" },
        { src: require("./img/php.svg").default, alt: "PHP", description: "お問い合わせフォームを作る程度にはできます。" },
        { src: require("./img/nuxt.svg").default, alt: "Nuxt.js", description: "モダンな開発がしたいと思ってkindleで書籍を買ってぼちぼち学んでいる。" },
        { src: require("./img/ubuntu.svg").default, alt: "Linux", description: "macの中に仮想環境としてubuntuを構築しました、まだ理解していません。" },
      ].map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </div>
  </section>
);

export default Skills;
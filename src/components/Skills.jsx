import React from 'react';

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="container">
        {/* HTML */}
        <li className="skill-item">
          <img src="img/html-5.svg" alt="HTML5 Icon" />
          <p>基本的には不自由なく使いこなせています。</p>
        </li>

        {/* CSS */}
        <li className="skill-item">
          <img src="img/css-3.svg" alt="CSS3 Icon" />
          <p>レスポンシブ化も出来ます。</p>
        </li>

        {/* jQuery */}
        <li className="skill-item">
          <img src="img/jquery.svg" alt="jQuery Icon" />
          <p>プラグインなどを使ってこのサイトを作っています。</p>
        </li>

        {/* React */}
        <li className="skill-item">
          <img src="img/react.svg" alt="React Icon" />
          <p>現在ポートフォリオVer2をこれで作っています。</p>
        </li>

        {/* Adobe Illustrator */}
        <li className="skill-item">
          <img src="img/adobe-illustrator.svg" alt="Adobe Illustrator Icon" />
          <p>簡単なイラストなら掛けます。</p>
        </li>

        {/* Adobe Photoshop */}
        <li className="skill-item">
          <img src="img/adobe-photoshop.svg" alt="Adobe Photoshop Icon" />
          <p>そんなに得意ではないが、軽い画像加工なら出来ます。</p>
        </li>

        {/* Game Development on Microsoft Windows */}
        <li className="skill-item">
          <img src="img/microsoft-windows-icon.svg" alt="Microsoft Windows Icon" />
          <p>自作PCから配信、versionは11のinsiderprogramに参加しています。</p>
        </li>

        {/* Apple Beta Version */}
        <li className="skill-item">
          <img src="img/apple.svg" alt="Apple Icon" />
          <p>外では基本macなのでコーディングなどはこちらが多め。beta版使ってます。</p>
        </li>

        {/* Slack */}
        <li className="skill-item">
          <img src="img/slack-icon.svg" alt="Slack Icon" />
          <p>discord感覚で使えますが、botは作ったことはありません。</p>
        </li>

        {/* GitHub */}
        <li className="skill-item">
          <img src="img/github-icon.svg" alt="GitHub Icon" />
          <p>これの管理を実際にgitでやってます。</p>
        </li>

        {/* Amazon Web Services (AWS) */}
        <li className="skill-item">
          <img src="img/aws.svg" alt="AWS Icon" />
          <p>EC2インスタンスは理解できたが、実用には至らなかった。</p>
        </li>

        {/* WordPress */}
        <li className="skill-item">
          <img src="img/wordpress-icon-alt.svg" alt="WordPress Icon" />
          <p>ブログ運営として１年ほど使いました。</p>
        </li>
      </div>
    </section>
  );
}

export default Skills;

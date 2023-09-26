import React from 'react';
class NewsSection extends React.Component {
  render() {
    const newsItems = [
      { date: '2023/09/26', content: 'GitHubPagesにこのサイトを上げました!'},
      { date: '2023/09/19', content: 'ポートフォリオver2にもハンバーガーメニューを作りました'},
      { date: '2023/09/08', content: 'skill欄の星表示を文字にして、実際にどこまで出来るかを表示しました。' },
      { date: '2023/09/06', content: 'ポートフォリオver2をReactで作り始める。'},
      { date: '2023/08/07', content: '作成物の欄を追加しました。' },
      { date: '2023/07/21', content: '文の訂正とhobbyのスライドの速度の低下、使われることのないcontact-usを削除しました。' },
      { date: '2023/06/22', content: 'Googleアナリティクスに対応させました。' },
      { date: '2023/06/13', content: 'adobeのillastratorとphotshop、個人的にReactの学習を始めたのとoverviewの文字を少し訂正しました。' },
      { date: '2023/05/16', content: 'hobby欄のスライダーが早かったので速度の低下、PCで画面いっぱいにした時にTwitter(X)フィードが表示されるようにしました。' },
      { date: '2023/05/08', content: 'skill欄を星表示で見える化したのとハンバーガーメニューのスペルミスを訂正しました。' },
      { date: '2023/05/01', content: 'hobby欄にslick.jsを挿入してスライドショーを実装しました。' },
      { date: '2023/04/27', content: 'ハンバーガーメニューの搭載、およびレスポンシブ対応にしました' },
      { date: '2023/04/04', content: 'お問い合わせフォームをしっかり作る※現在はありません' },
      { date: '2023/03/07', content: 'git及び、GitHubを使い始める。' },
      { date: '2023/03/07', content: 'ポートフォリオver1を作り始める。' },
    ];

    return (
      <section id="news">
        <h2>News</h2>
        <dl>
          {newsItems.map((item, index) => (
            <React.Fragment key={index}>
              <dt>{item.date}</dt>
              <dd>{item.content}</dd>
            </React.Fragment>
          ))}
        </dl>
      </section>
    );
  }
}

export default NewsSection;
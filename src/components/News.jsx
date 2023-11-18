import React from 'react';
class NewsSection extends React.Component {
  render() {
    const newsItems = [

      { date: '2023/11/18', content: '扱えるようになった言語を追加し、works欄にvue.jsの作ったものを貼りつけました'},
      { date: '2023/09/20', content: 'GitHubPagesにこのサイトを上げました!'},
      { date: '2023/09/19', content: 'ポートフォリオver2にもハンバーガーメニューを作りました'},
      { date: '2023/09/06', content: 'ポートフォリオver2をReactで作り始める。'},
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
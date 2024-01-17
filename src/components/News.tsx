import React, { ReactNode } from 'react';

interface NewsItem {
  date: string;
  content: string;
}

class NewsSection extends React.Component {
  renderNewsItems(newsItems: NewsItem[]): ReactNode {
    return newsItems.map((item, index) => (
      <React.Fragment key={index}>
        <dt>{item.date}</dt>
        <dd>{item.content}</dd>
      </React.Fragment>
    ));
  }

  render() {
    const newsItems: NewsItem[] = [
      { date: '2024/01/17', content: '実はamazarashiが好きなのでhobbyのところに追加してみました'},
      { date: '2024/01/12', content: 'このサイトのコンポーネントから何から何までをtypescriptに対応させました' },
      { date: '2024/01/05', content: 'googleアナリティクスを導入しました' },
      { date: '2023/12/27', content: 'いらないコードを削減しました' },
      { date: '2023/12/25', content: 'このサイトを開いたときに何も表示されない不具合を対処しました' },
      { date: '2023/12/21', content: 'worksとskill、それとヘッダーとフッターの変更を加えました' },
      { date: '2023/11/27', content: 'overviewのテキストの位置がいまいちだったので位置を変更しました' },
      { date: '2023/11/18', content: '扱えるようになった言語を追加し、works欄にvue.jsの作ったものを貼りつけました' },
      { date: '2023/09/20', content: 'GitHubPagesにこのサイトを上げました!' },
      { date: '2023/09/19', content: 'ポートフォリオver2にもハンバーガーメニューを作りました' },
      { date: '2023/09/06', content: 'ポートフォリオver2をReactで作り始める。' },
    ];

    return (
      <section id="news">
        <h2>News</h2>
        <dl>{this.renderNewsItems(newsItems)}</dl>
      </section>
    );
  }
}

export default NewsSection;

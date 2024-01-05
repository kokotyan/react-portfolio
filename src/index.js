import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 

import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* ここで名前を変更した部分を反映 */}
  </React.StrictMode>
);

function MainApp() {
  useEffect(() => {
    // ここに useEffect の中で行いたい処理を書く
  }, []); // 第二引数は useEffect が依存する値のリストです。空のリストは初回レンダリング時のみ実行することを意味します

  return (
    <Router>
      {/* ここにアプリケーションのメインコンポーネントを配置 */}
    </Router>
  );
}

export default MainApp;

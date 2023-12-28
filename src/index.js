import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function App() {
  useEffect(() => {
    // Google Analyticsのトラッキングコード
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-TPVYM8M09C';

    script1.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-TPVYM8M09C');
    };

    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.async = true;
    script2.src = `https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID`;

    script2.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'YOUR_GA_MEASUREMENT_ID');
    };

    document.head.appendChild(script2);
  }, []);

  return (
    <Router>
      {/* ここにアプリケーションのメインコンポーネントを配置 */}
    </Router>
  );
}

export default App;

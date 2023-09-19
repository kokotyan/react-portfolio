import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // スクロールイベントを監視してフッターの表示/非表示を制御
    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const isAtBottom = window.scrollY + viewportHeight >= pageHeight;

      setShowFooter(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);

    // コンポーネントがアンマウントされるときにイベントリスナーを削除
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer id="footer" style={{ display: showFooter ? 'block' : 'none' }}>
      <div className="wrapper">
        <p>© 2023 koko's Portfolio</p>
      </div>
      <div className="sns">
        <a href="https://twitter.com/murakumo_yu">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://github.com/kokotyan">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faWordpress } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer">
      <div className="wrapper">
        <p>© 2024 koko's Portfolio</p>
      </div>
      <div className="sns">
        <a href="https://github.com/kokotyan">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://hagf.buzz">
          <FontAwesomeIcon icon={faWordpress} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="wrapper">
        <p>© 2023 koko's Profile</p>
      </div>
      <div className="sns">
        <a href="https://twitter.com/murakumo_yu" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://github.com/kokotyan" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

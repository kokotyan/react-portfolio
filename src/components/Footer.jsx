import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="wrapper">
        <p>© 2023 koko's Portfolio</p>
      </div>
      <div className="sns">
        <a href="https://twitter.com/murakumo_yu" >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://github.com/kokotyan" >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

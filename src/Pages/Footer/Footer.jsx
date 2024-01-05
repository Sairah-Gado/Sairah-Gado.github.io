import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://github.com/Sairah-Gado"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
        </a>
        <a
          href="https://www.linkedin.com/in/sairah-gado-110243258/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" color="blue"/>
        </a>
        <a
          href="https://www.facebook.com/sairah.gado.1?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" color="blue" />
        </a>
      </div>
      <p>&copy; 2023 Sairah Pagcaliwangan Gado. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
  return (
    <div className="footer">
      <div className="singleCol social-media-icons-white d-flex justify-content-evenly">
        <a
          href="https://www.facebook.com/olga.samolevska"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCdgv1x-RtCYk_M3uOlRH86A"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <small className="copyright">
        Copyright &copy; {props.year} LivenLab. All rights reserved
      </small>
    </div>
  );
}

export default Footer;

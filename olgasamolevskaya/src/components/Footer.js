import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
  return (
    <div className="footer">
      <div className="singleCol social-media-icons-white d-flex justify-content-evenly">
        <a href="https://www.facebook.com/olga.samolevska" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCdgv1x-RtCYk_M3uOlRH86A"
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <small>&copy; {props.year} LivenLab. All Rights Reserved</small>
    </div>
  );
}

export default Footer;

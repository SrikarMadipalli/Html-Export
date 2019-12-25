import React from 'react';
import './styles.scss';

function Footer () {
  return(
    <footer id="social_icon_footer">
        <div className="copyright-text">
          <p>CopyRight © 2020 Digital All Rights Reserved</p>
        </div>
        <a href="https://www.facebook.com/" title="facebook">
          <i id="social-fb" className="fa fa-facebook-square fa-3x social"></i>
        </a>
        <a href="https://twitter.com/" title="twitter">
          <i id="social-tw" className="fa fa-twitter-square fa-3x social"></i>
        </a>
        <a href="https://plus.google.com/" title="google">
          <i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i>
        </a>
        <a href="mailto:#" title="mail">
          <i id="social-em" className="fa fa-envelope-square fa-3x social"></i>
        </a>
      </footer>
  );
}

export default Footer;
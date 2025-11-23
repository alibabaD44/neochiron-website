import React from "react";

import "./footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="Fsection1">
          <h3>NEOCHIRON</h3>
          <h4>FRC Team 11000</h4>
        </div>
        <div className="Fsection2">
          <h3>İletişim</h3>
          <h4>Mail adresi</h4>
        </div>
        <div className="Fsection3">
          <h3>Bizi takip edin</h3>
          <a href="https://www.instagram.com/team11000" target="_blank">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;

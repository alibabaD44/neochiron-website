import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="section1">
        <img src="/src/assets/neochiron2.svg" alt="Logo" />
        <div className="text">
          <a href="">NEOCHIRON</a>
        </div>
      </div>

      {/* Side menu (tablet ve mobil) */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#hakkimizda" onClick={() => setMenuOpen(false)}>
              Hakkımızda
            </a>
          </li>
          <li>
            <a href="#misyonumuz" onClick={() => setMenuOpen(false)}>
              Misyonumuz
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div className="section2">
        {/* Hamburger ikon (tablet ve mobil) */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Masaüstü menü */}

        <ul className="desktop-menu">
          <li>
            <a href="#hakkimizda">Hakkımızda</a>
          </li>
          <li>
            <a href="#misyonumuz">Misyonumuz</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

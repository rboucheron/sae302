import React, { useState } from "react";
import IMAGES from "../assets/images/IMAGES";
import { Link } from "react-router-dom";
import Direction from "./Direction";
import { useEffect } from "react";
import { Menu, X } from "lucide-react";
import useScrollPosition from "./Position.jsx";

function Navbar() {
  const scrollPosition = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const color = isMenuOpen ? "transparent" : "#ffffff";
  return (
    <>
      {isMenuOpen && <Modal />}
      <header>
        <Link to="/">
          <img src={IMAGES.image1} alt="first image" />
        </Link>

        <div className="burguer" onClick={toggleMenu}>
          <Menu size={40} color={color} strokeWidth={3} />
        </div>
      </header>
    </>
  );

  function Modal() {
    return (
      <div
        className="modal"
        style={{ top: scrollPosition.y + "px", left: scrollPosition.x + "px" }}
      >
        <div className="burguer" onClick={toggleMenu}>
          <X size={40} color="#ffffff" strokeWidth={3} />
        </div>
        <h2>Choisissez votre direction</h2>

        <Direction />

        <nav className="navigation">
          <Link className="navLink" to="/Article">
            Boucles de la Marne
          </Link>

          <Link className="navLink" to="/audio">
            Le suivi de la faune
          </Link>
          <Link className="navLink" to="/Galerie">
            La Galerie
          </Link>

          <Link className="navLink" to="/Interview">
            Le métier d'écologue
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;

import React, { useRef } from "react";
import IMAGES from "../assets/images/IMAGES";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Parcours = () => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      <div className="Parcours-content">
        <div className="presentation">
          <h3>Le métier d'écologue</h3>
          <p>
            “J’étudie la biodiversité je cartographie les habitats et je
            sensibilise les acteurs du territoire.”
          </p>
          <div className="btns">
            <Link to="/Interview" className="Btn Parcours">
              Commencer
            </Link>
            <div className="Btn Next" onClick={nextSlide}>
              Mission Suivante
            </div>
          </div>
        </div>
        <div className="images">
          <img src={IMAGES.image8} alt="un écologue tenant une carte" />
        </div>
      </div>
      <div className="Parcours-content">
        <div className="presentation">
          <h3>Le suivi de la faune</h3>
          <p>
            “J’observe et comptabilise les oiseaux, les mammifères, les
            poissons, les insectes et la flore également.”
          </p>
          <div className="btns">
            <Link to="/audio" className="Btn Parcours">
              Commencer
            </Link>
            <div className="Btn Next" onClick={nextSlide}>
              Mission Suivante
            </div>
          </div>
        </div>
        <div className="images">
          <img src={IMAGES.image69} alt="un écologue tenant une carte" />
          <p>Image : Lottis Files </p>
        </div>
      </div>
      <div className="Parcours-content">
        <div className="presentation">
          <h3>CPIE Boucles de la Marne</h3>
          <p>
            Théo et Tanguy travaillent pour l’association CPIE Boucles de la
            Marne, anciennement Aven du Grand Voyeux. Cette association met tout
            en œuvre pour préserver la biodiversité depuis plus de 25 ans.
          </p>
          <div className="btns">
            <Link to="/Article" className="Btn Parcours">
              Commencer
            </Link>
            <div className="Btn Next" onClick={nextSlide}>
              Mission Suivante
            </div>
          </div>
        </div>
        <div className="images">
          <img
            src={IMAGES.image71}
            alt="un écologue tenant une carte"
            id="imgoie"
          />
          <p>Image : Lottis Files </p>
        </div>
      </div>
      <div className="Parcours-content">
        <div className="presentation">
          <h3>La galerie</h3>
          <p>
            Dans notre galerie vous pourrez voir les photos prises au Parc du
            Pâtis.
          </p>
          <div className="btns">
            <Link to="/Galerie" className="Btn Parcours">
              Commencer
            </Link>
            <div className="Btn Next" onClick={nextSlide}>
              Mission Suivante
            </div>
          </div>
        </div>
        <div className="images">
          <img src={IMAGES.image70} alt="un écologue tenant une carte" />
          <p>Image : Lottis Files </p>
        </div>
      </div>
    </Slider>
  );
};

export default Parcours;

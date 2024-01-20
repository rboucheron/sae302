import React from "react";
import Navbar from "../components/navbar";
import IMAGES from "../assets/images/IMAGES";
import LinkIntro from "../components/LinkIntro";
import Parcours from "../components/Parcours";
import { useState } from "react";
import Footer from "../components/Footer";
function Introduction() {
  return (
    <>
      <Navbar />
      <div className="blockTitle">
        <h1>L'écho des écologues</h1>
        <p>
          Nous avons suivi Théo et Tanguy, deux écologues de l’association CPIE
          Boucles de la Marne, lors de leur suivi mensuel des oiseaux dans le
          parc du Pâtis.
        </p>
      </div>
      <Parcours />
      <h2 className="title2">Le Parc du Pâtis en quelque chiffres</h2>
      <div className="chiffres">
        <div className="block">
          <h3>150</h3>
          <p>Hectares</p>
        </div>
        <div className="block">
          <h3>130</h3>
          <p>Espèces d'oiseaux</p>
        </div>
        <div className="block">
          <h3>300</h3>
          <p>Espèces d'insectes</p>
        </div>
        <div className="block">
          <h3>12</h3>
          <p>Espèces de mammifères</p>
        </div>
      </div>

      <div className="carte">
        <img src={IMAGES.image72} alt="Carte du parc" />
      </div>
      <Footer />
    </>
  );
}

export default Introduction;

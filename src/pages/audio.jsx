import React from "react";
import Navbar from "../components/navbar";
import Btn from "../components/btn";
import AudioButton from "../components/AudioButton";
import IMAGES from "../assets/images/IMAGES";
import AUDIOS from "../assets/mp3/AUDIOS";
import Footer from "../components/Footer";
import ArticleVictoria from "./ArticleVictoria";

function Audio() {
  document.title = `Le Suivi de la faune - L'écho des écologues`;

  return (
    <>
      <Navbar />

      <div className="background-normal">
        <h2>Le Suivi de la faune</h2>
        <div className="text">
          <p>
            Nous avons accompagné des écologues lors de leur suivi hebdomadaire
            de la nature et avons recueilli leurs témoignages.
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <img src={IMAGES.image25} alt="" />
            <div className="filter">
              <h3>Le Brochet</h3>
              <p>“L'étang de La Nou est une frayére à brochets.”</p>
              <AudioButton audioUrl={AUDIOS.audio1} />
            </div>
          </div>
          <div className="card">
            <img src={IMAGES.image21} alt="" />
            <div className="filter">
              <h3>Le protocole</h3>
              <p>
                “Nous avons essayé de disposer les points d'écoute de manière à
                ce qu'ils soient représentatifs de tous les milieux du parc”
              </p>
              <AudioButton audioUrl={AUDIOS.audio3} />
            </div>
          </div>

          <div className="card">
            <img src={IMAGES.image28} alt="" />
            <div className="filter">
              <h3>Le Patis</h3>
              <p>
                “Le parc du Patis est doté d'un plan de gestion, un gros
                document qui nous donne la marche à suivre dans la gestion du
                parc”
              </p>
              <AudioButton audioUrl={AUDIOS.audio2} />
            </div>
          </div>
        </div>
      </div>

      <ArticleVictoria />

      <Footer />
    </>
  );
}

export default Audio;

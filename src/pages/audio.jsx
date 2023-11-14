import React from "react";
import Navbar from "../components/navbar";
import Btn from "../components/btn";
import AudioButton from "../components/AudioButton";
import IMAGES from "../assets/images/IMAGES";
import AUDIOS from "../assets/mp3/AUDIOS";

function Audio() {
  return (

    <div className="background-normal">
    <Navbar />
    <h2>Le Suivi de la faune</h2>

    <div className="text">
    <p>Nous avons accompagné des écologues lors de leurs suivis mensuels de la nature et avons recueilli leurs témoignages.</p>

    </div>


    
    <div className="cards">
      <div className="card">
        <img src={IMAGES.image2} alt="" />
        <div className="filter">
          <h3>Le Brochet</h3>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
          <AudioButton audioUrl={AUDIOS.audio1} />
        </div>
      </div>

      <div className="card">
        <img src={IMAGES.image3} alt="" />
        <div className="filter">
          <h3>Oie Bernache</h3>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
          <AudioButton audioUrl={AUDIOS.audio1} />
        </div>
      </div>

      <div className="card">
        <img src={IMAGES.image7} alt="" />
        <div className="filter">
          <h3>Le Patis</h3>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
          <AudioButton audioUrl={AUDIOS.audio1} />
        </div>
      </div>
    </div>
  

  </div>


  );
}

export default Audio;
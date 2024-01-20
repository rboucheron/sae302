import React from "react";
import Navbar from "../components/navbar";
import TeamCard from "../components/TeamCard";
import IMAGES from "../assets/images/IMAGES";
import Footer from "../components/Footer";
function Credit() {
  return (
    <>
      <Navbar />

      <div>
        <h2>Crédit</h2>
        <TeamCard
          Nom={"Raphaël Boucheron"}
          nom2={"raphaël boucheron"}
          Img={IMAGES.image66}
          Rules={"Interviewer, Développeur, Designer, Cameraman"}
          Mail={"raphaelboucheron3@gmail.com"}
          liens={
            "https://www.linkedin.com/in/rapha%C3%ABl-boucheron-287b02233/"
          }
        />
        <TeamCard
          Nom={"Yaëlle Jehu"}
          nom2={"yaëlle jehu"}
          Img={IMAGES.image68}
          Rules={"Camerawoman, Ingé son, Photographe, Monteuse vidéo, Designer"}
          Mail={"yaellejehu@gmail.com"}
          liens={"https://www.linkedin.com/in/ya%C3%ABlle-jehu-8bb60a204/"}
        />
        <TeamCard
          Nom={"Victoria Moukielo"}
          nom2={"victoria moukielo"}
          Img={IMAGES.image67}
          Rules={"Camerawoman, Designer, Interviewer, Dévéloppeuse"}
          Mail={"vicmoukielo@gmail.com"}
          liens={"https://www.linkedin.com/in/victoria-moukielo-46662126b/"}
        />
      </div>

      <div className="thank">
        <h2>Remerciements</h2>
        <div className="Team">
          <div className="TeamImage">
            <img src={IMAGES.image76} alt="Tanguy" />
          </div>
          <div className="TeamContent">
            <h3>Tanguy Pieters</h3>
            <h4 className="rules">Écologue</h4>
          </div>
        </div>
        <div className="Team">
          <div className="TeamImage">
            <img src={IMAGES.image77} alt="Tanguy" />
          </div>
          <div className="TeamContent">
            <h3>Théo Hurtrel</h3>
            <h4 className="rules">Écologue</h4>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Credit;

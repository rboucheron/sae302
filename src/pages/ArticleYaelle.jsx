import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import IMAGES from "../assets/images/IMAGES";

function ArticleYaelle() {
  document.title = `CPIE Boucles de la Marne  - L'écho des écologues`;
  return (
    <>
      <Navbar />
      <div className="contente">
        <img src={IMAGES.image65} className="trombone" alt="" />
        <h3>
          CPIE Boucles de la Marne : Sensibiliser à l'importance de la
          biodiversité.{" "}
        </h3>
        <h4>
          Théo et Tanguy travaillent pour l’association CPIE Boucles de la
          Marne, anciennement Aven du Grand Voyeux. Cette association met tout
          en œuvre pour préserver la biodiversité depuis plus de 25 ans.
        </h4>
        <p className="article">
          L'AVEN du Grand-Voyeux est une association qui a été fondée en 1996, à
          l'origine leur objectif était le réaménagement écologique des
          anciennes carrières de sable de Congis-sur-Thérouanne (maintenant
          appelé Domaine du Grand-Voyeux). A cette époque des ornithologues
          amateurs, habitants de Congis-sur-Thérouanne et des environs, ont fait
          de belles observations dans cette boucle de la Marne, où l'on exploite
          industriellement sables et graviers depuis plus de 50 ans. En 1996, il
          décident de créer une association dans le but de transformer ce vaste
          espace en espace naturel. <br /> L’objectif était d’améliorer les
          connaissances scientifiques sur les espèces dépendantes des zones
          humides, de les protéger et de sensibiliser le public, y compris les
          plus jeunes, à s’intéresser à la conservation de ces écosystèmes.
          L'association a rejoint le réseau des Centres Permanents d'Initiatives
          pour les l'Environnement (CPIE) en 2022 et intervient sur le tiers
          nord de la Seine-et-Marne dont la réserve du Grand Voyeux, l'ENS des
          Olivettes ou encore le parc du Pâtis (voir la carte ci-dessous).
        </p>
        <img src={IMAGES.image75} className="ArticlesIMG" alt="Oies Bernache" />
        <p className="article">
          <br />
          Celle-ci comptabilise plus de 200 adhérents, un conseil
          d'administration composé de 16 membres aux compétences diverses et
          complémentaires, plusieurs bénévoles actifs dans la vie associative,
          une équipe de 10 salariés constituée d'écologues, d'éco-animateurs et
          de techniciens zones humides ils prennent également de nombreux
          stagiaires et volontaires en service civique.
          <br />
          Leurs objectifs ? Être acteurs de la transition écologique et
          réfléchir aux alternatives à mettre en place, partager et valoriser
          les connaissances et les savoir-faire acquis en intégrant notamment un
          réseau national d'association, développer la vie associative tout en
          préservant la cohésion entre les adhérents, les salariés et les
          administrateurs Ils souhaitent renforcer l'éducation à l'environnement
          en organisant régulièrement différents projets : sorties observation
          des oiseaux, des insectes et de la botanique, création de potions
          magiques (animation pour Halloween), balades thématiques, ateliers sur
          les plantes, observation des petites bêtes pour le grand public, les
          adhérents et les scolaires.
          <br />
          <br />
          Par Yaëlle Jehu
          <br />
          <br />
          <a href="https://www.cpie-bouclesdelamarne.fr/aven-grand-voyeux">
            Source : https://www.cpie-bouclesdelamarne.fr/aven-grand-voyeux
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default ArticleYaelle;

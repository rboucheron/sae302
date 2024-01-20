import React from "react";
import IMAGES from "../assets/images/IMAGES";

function ArticleVictoria() {
  return (
    <div className="contente">
      <img src={IMAGES.image65} className="trombone" alt="" />

      <h3>Les oies bernaches, une espèce nuisible</h3>
      <h4>
        Il reste très important aujourd’hui de prendre soins des animaux, de les
        protéger, de les préserver, ce que font d’ailleurs les écologues, mais
        il existe aussi de rares cas où ces animaux nuisent au bien-être de tout
        le monde, c’est par exemple le cas des bernaches du Canada qui sont
        devenus une espèce envahissante.
      </h4>
      <p className="article">
        Lors de notre rencontre avec les deux écologues du parc du Pâtis, une
        affiche dans le parc a attiré notre attention. Elle nous interdisait de
        nourrir les oies bernache du Canada ou Outarde qui est une espèce
        classée envahissante depuis 2010. Les écologues nous ont alors parlé de
        leur histoire. Introduite en Europe au XVIIe siècle, cette oiseau qui
        fait partie de la famille Anatidae, servait de décoration et d’objet de
        chasse aux bourgeois. C’est un oiseau qui s’adapte vite à son
        environnement et perd son comportement migratoire. Il est alors facile
        pour elle de s’intégrer dans de nouveaux milieux.
        <br />
        Aujourd’hui l’espèce est présente en masse dans le département de la
        Seine et Marne. Tellement présente qu’elle en est devenue envahissante.
        Son agressivité peut affecter la reproduction ou la présence des espèces
        présentes, en effet, lors de sa période de reproduction, la bernache
        devient plus agressive et empêche les autres oiseaux de s’installer,
        allant même jusqu’à détruire leur nids. Elle peut aussi causer des
        dégâts aux écosystèmes naturels, aux parcs et jardins et aux cultures
        agricoles par son pâturage et son piétinement. Ses déjections sont à
        l'origine de désagréments dans les zones de loisirs et de baignade,
        elles peuvent gêner les baladeurs et causer des risques de santé
        lorsqu’elles sont présentes dans l’eau.
      </p>

      <img src={IMAGES.image3} className="ArticlesIMG" alt="Oies Bernache" />
      <p className="article">
        <br />
        Il faut alors trouver des solutions pour réduire son expansion. L'une de
        ses solutions est d’arrêter de les nourrir. En effet, la bernache du
        Canada peut vivre longtemps à cause de l’abondance de nourriture qui lui
        est proposée. Il a alors été décidé, par un arrêté municipal, qu’il
        serait désormais interdit de les nourrir. D’où l’affiche que l’on a vue
        dans le parc. De plus, ces oies sont naturellement herbivores, d’où leur
        abondance dans les milieux où il y a beaucoup d'herbes. Il y a bien sûr
        d’autres solutions pour lutter contre leur envahissement: rendre leur
        habitat moins attractif, en érigeant des haies car les oies aiment vivre
        dans des environnements où la vue est dégagée ou en mettant des
        épouvantails. Ou encore, une manière plus radicale de les réduire qui
        est de stériliser les œufs, c'est-à -dire de tuer l'embryon à
        l’intérieur de la coquille ou encore de tuer les adultes en les
        euthanasiant de manière éthique. Ce n’est donc pas sans raisons
        aujourd’hui qu’il est interdit de les nourrir.
        <br />
        <br />
        Par Victoria Moukielo
        <br />
        <br />
        source :
        <a href="https://professionnels.ofb.fr/sites/default/files/pdf/RevueFS/FauneSauvage321_2018_Art12.pdf">
          La bernache du Canada en France
        </a>
      </p>
    </div>
  );
}

export default ArticleVictoria;

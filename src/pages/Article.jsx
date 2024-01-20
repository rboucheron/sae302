import React from "react";
import Navbar from "../components/navbar";
import IMAGES from "../assets/images/IMAGES";
import Footer from "../components/Footer";
function Article() {
  return (
    <div className="contente">
      <img src={IMAGES.image65} className="trombone" alt="" />
      <h3>Écologue un métier en vogue</h3>
      <h4>
        Théo Hurtrel est écologue, il cartographie les habitats, sensibilise les
        acteurs du territoire et il fait les suivis de la faune. Au parc du
        Pâtis, il a l’habitude d’observer et de collecter des données sur 150
        Espèces d'oiseaux.{" "}
      </h4>
      <p className="article">
        Sur la rive de l’étang de la Nou, une oie bernache prend son envol. Non
        loin de là, Théo Hurtrel, écologue de profession, l’observe. Proche du
        cœur de la ville de Meaux, le parc du Patis est le lieu où Théo se rend
        pour relever l'identité des oiseaux qu’il entend. Parfois, il s’arrête
        pendant cinq minutes, il écoute, observe à l’aide de ses jumelles et
        prend note de toutes ses observations. Ensuite, il prend son vélo et se
        rend dans un nouveau lieu afin d’effectuer d'autres relevés. Théo
        possède un véritable talent, il peut reconnaître le chant propre à
        chaque espèce d'oiseaux. Ses jumelles ne lui servent presque à rien, il
        n’a qu’à s’arrêter puis attendre que le silence se fasse, puis les
        différentes espèces d’oiseaux se font entendre. Théo connaît aussi
        l’emplacement exact de tous les volatiles. Il sait que les perruches se
        trouvent souvent à l’entrée du parc, juste devant les potagers.
      </p>

      <img src={IMAGES.image20} className="ArticlesIMG" alt="Théo" />
      <p className="article">
        <br />
        Les points d’observations, où Théo à l’habitude de s’arrêter, sont
        toujours les mêmes. Ils ont été définis aux préalables par l’association
        avec laquelle Théo travail, le CPIE Boucles de la Marne. Ces
        emplacements, sont choisis en fonction des différents environnements et
        des espèces présentes, afin d'assurer une bonne représentation de la
        faune et de la flore du Parc. Ainsi, ce protocole permet à Théo
        d’observer, quasiment la totalité des 130 espèces d’oiseaux qui vivent
        au Patis. Lorsque nous avons accompagné Théo, dans le but de
        l’interviewer, le déplacement entre chacun de ces lieux nous parut très
        long. Il nous dit à la fin, qu’il avait l’habitude de le faire à vélo et
        que notre présence l’avait ralentie dans son parcours.
        <br />
        Lorsqu'il présente son métier, Théo le définit comme diversifié. Lors de
        notre rencontre, Théo faisait le suivi ornithologique, mais les oiseaux
        ne sont pas les seuls êtres vivants qu'il observe. Il a aussi l'habitude
        de suivre des insectes, des mammifères et des végétaux. Son travail ne
        s'arrête pas là, il cartographie les habitats et les espèces. Théo
        partage ensuite les données collectées avec son collègue Tanguy Pieters,
        qui les utilise pour mener des études et sensibiliser les différents
        acteurs du territoire. <br />
        Théo à un BTS en gestion et protection de la nature, il a commencé à
        travailler avec les Boucles de la Marne pendant son service civique et à
        présent, il est un des salariés de l'association. Lorsque nous lui avons
        demandé quels étaient, selon lui, les prérequis pour devenir écologue,
        il a répondu « il faut être dans l’échange et le partage ». Celons Théo,
        beaucoup de personnes ont du mal à comprendre l’intérêt de son métier,
        il considère important de leur expliquer et de les sensibiliser à la
        protection de la nature. <br />
        Dans le contexte du changement climatique, les écologues ont une mission
        essentielle, ce métier est primordial pour un avenir durable.
        <br />
        <br />
        Par Raphaël Boucheron
      </p>
    </div>
  );
}

export default Article;

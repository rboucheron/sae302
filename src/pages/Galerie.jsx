import React from "react";
import Navbar from "../components/navbar";
import { Image } from "lucide-react";
import IMAGES from "../assets/images/IMAGES";
import ImageGalerie from "../components/ImageGalerie";
import Footer from "../components/Footer";
function Galerie() {
  document.title = `Galerie - L'écho des écologues`;

  return (
    <>
      <Navbar />
      <h2>
        Galerie <Image size={48} />
      </h2>
      <div className="grid">
        <ImageGalerie IMGSRC={IMAGES.image9} IMGTXT={"Carte du Pâtis"} />
        <ImageGalerie IMGSRC={IMAGES.image11} IMGTXT={"Plage de Meaux"} />
        <ImageGalerie
          IMGSRC={IMAGES.image12}
          IMGTXT={"Résidence de la plage"}
        />
        <ImageGalerie
          IMGSRC={IMAGES.image13}
          IMGTXT={"Théo notant les espèces d'oiseau observées "}
        />
      </div>
      <div className="grid">
        <ImageGalerie IMGSRC={IMAGES.image14} IMGTXT={"Jardins potager"} />
        <ImageGalerie
          IMGSRC={IMAGES.image15}
          IMGTXT={"Théo observe les oiseaux"}
        />
        <ImageGalerie
          IMGSRC={IMAGES.image16}
          IMGTXT={"Théo se rend à un point d'observation "}
        />
        <ImageGalerie
          IMGSRC={IMAGES.image17}
          IMGTXT={"Théo observe les espèces  "}
        />
      </div>

      <div className="grid">
        <ImageGalerie
          IMGSRC={IMAGES.image18}
          IMGTXT={"La Biodiversité au Pâtis"}
        />
        <ImageGalerie
          IMGSRC={IMAGES.image19}
          IMGTXT={"Tanguy observe des espèces "}
        />
        <ImageGalerie
          IMGSRC={IMAGES.image20}
          IMGTXT={"Théo notant les espèces d'oiseau observées "}
        />
        <ImageGalerie
          IMGSRC={IMAGES.image21}
          IMGTXT={"Théo et Tanguy observant les oiseaux "}
        />
      </div>

      <div className="grid">
        <ImageGalerie
          IMGSRC={IMAGES.image22}
          IMGTXT={"Zone d’expansion de crues"}
        />
        <ImageGalerie IMGSRC={IMAGES.image23} IMGTXT={"Marais du Pâtis "} />
        <ImageGalerie IMGSRC={IMAGES.image24} IMGTXT={"Le Cygne"} />
        <ImageGalerie
          IMGSRC={IMAGES.image25}
          IMGTXT={"Théo et Tanguy observant les oiseaux"}
        />
      </div>
      <div className="grid">
        <ImageGalerie IMGSRC={IMAGES.image26} IMGTXT={"Une roselière "} />
        <ImageGalerie IMGSRC={IMAGES.image27} IMGTXT={"Etang de la Nou"} />
        <ImageGalerie
          IMGSRC={IMAGES.image28}
          IMGTXT={"Théo et Tanguy se rendant au point d'obervation"}
        />
        <ImageGalerie IMGSRC={IMAGES.image29} IMGTXT={"Un Etang du Pâtis"} />
      </div>
      <div className="grid">
        <ImageGalerie
          IMGSRC={IMAGES.image30}
          IMGTXT={"Panneau destiné aux enfants"}
        />
        <ImageGalerie IMGSRC={IMAGES.image31} IMGTXT={"Un Etang du Pâtis"} />
        <ImageGalerie IMGSRC={IMAGES.image32} IMGTXT={"Des champignons "} />
        <ImageGalerie
          IMGSRC={IMAGES.image33}
          IMGTXT={"Théo et Tanguy observant les hérons "}
        />
      </div>
      <div className="grid">
        <ImageGalerie IMGSRC={IMAGES.image34} IMGTXT={"Point de pêche"} />
        <ImageGalerie
          IMGSRC={IMAGES.image35}
          IMGTXT={"Colonie d'oie Bernache"}
        />
        <ImageGalerie
          IMGSRC={IMAGES.image36}
          IMGTXT={"Colonie d'oies Bernache avec des cygnes"}
        />
        <ImageGalerie
          IMGSRC={IMAGES.image37}
          IMGTXT={"Colonie d'oies Bernache"}
        />
      </div>
      <div className="grid">
        <ImageGalerie IMGSRC={IMAGES.image38} IMGTXT={"Nid flottant"} />
        <ImageGalerie IMGSRC={IMAGES.image39} IMGTXT={"Petits champignons"} />
        <ImageGalerie
          IMGSRC={IMAGES.image40}
          IMGTXT={"Colonie d'oie Bernache"}
        />
        <ImageGalerie IMGSRC={IMAGES.image41} IMGTXT={"Etang du Pâtis"} />
      </div>
      <div className="grid">
        <ImageGalerie IMGSRC={IMAGES.image42} IMGTXT={"La clairière"} />
        <ImageGalerie IMGSRC={IMAGES.image43} IMGTXT={"La clairière"} />
        <ImageGalerie IMGSRC={IMAGES.image44} IMGTXT={"Etang du Pâtis"} />
        <ImageGalerie IMGSRC={IMAGES.image45} IMGTXT={"Fruit inconnu"} />
      </div>
      <div className="grid">
        <ImageGalerie IMGSRC={IMAGES.image46} IMGTXT={"Baie noire"} />
        <ImageGalerie
          IMGSRC={IMAGES.image47}
          IMGTXT={"Panneau de la grande roselière"}
        />
        <ImageGalerie IMGSRC={IMAGES.image48} IMGTXT={"Petite plante"} />
        <ImageGalerie IMGSRC={IMAGES.image49} IMGTXT={"La Marne"} />
      </div>
      <div className="grid">
        <ImageGalerie
          IMGSRC={IMAGES.image50}
          IMGTXT={"Panneau d'informations pour enfant"}
        />
        <ImageGalerie IMGSRC={IMAGES.image51} IMGTXT={"Red Amiral"} />
        <ImageGalerie IMGSRC={IMAGES.image52} IMGTXT={"Red Amiral"} />
        <ImageGalerie IMGSRC={IMAGES.image53} IMGTXT={"Habitations"} />
      </div>
      <div className="grid">
        <ImageGalerie IMGSRC={IMAGES.image54} IMGTXT={"Petit étang"} />
        <ImageGalerie IMGSRC={IMAGES.image55} IMGTXT={"Petit banc"} />
        <ImageGalerie IMGSRC={IMAGES.image56} IMGTXT={"Un pont"} />
        <ImageGalerie IMGSRC={IMAGES.image63} IMGTXT={"De la vase"} />
      </div>
      <div className="grid">
        <ImageGalerie IMGSRC={IMAGES.image58} IMGTXT={"Lycée Henry IV"} />
        <ImageGalerie
          IMGSRC={IMAGES.image59}
          IMGTXT={"Panneau du bois dormant"}
        />
        <ImageGalerie IMGSRC={IMAGES.image60} IMGTXT={"Un pont"} />
        <ImageGalerie IMGSRC={IMAGES.image61} IMGTXT={"Lycée Henry IV"} />
      </div>

      <Footer />
    </>
  );
}

export default Galerie;

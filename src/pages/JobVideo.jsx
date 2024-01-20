import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { X, BookOpen } from "lucide-react";
import IMAGES from "../assets/images/IMAGES";
import Footer from "../components/Footer";
import Article from "./Article";
import useScrollPosition from "../components/Position";

function JobVideo() {
  const scrollPosition = useScrollPosition();
  document.title = `Interview le métier d'écologue - L'écho des écologues`;

  const [openInfo, setopenInfo] = useState(false);
  const toggleInfo = () => {
    setopenInfo(!openInfo);
  };
  useEffect(() => {
    if (openInfo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openInfo]);
  const color = openInfo ? "transparent" : "#ffffff";
  return (
    <>
      {openInfo && <Infographie />}
      <Navbar />
      <h2>Le métier d'écologue</h2>
      <div className="videocontainer">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/rRjqx_uFl9g?si=doOHUx9gDgo3Rwyf"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          autoPlay
        ></iframe>
      </div>
      <Article />
      <BookOpen
        size={50}
        color={color}
        strokeWidth={2.25}
        className="infofixe"
        onClick={toggleInfo}
      />

      <Footer />
    </>
  );
  function Infographie() {
    return (
      <div
        className="modalinfo"
        style={{ top: scrollPosition.y + "px", left: scrollPosition.x + "px" }}
      >
        <img src={IMAGES.image73} alt="infographie" />
        <X
          size={50}
          color="#ffffff"
          strokeWidth={2.25}
          className="infofixe"
          onClick={toggleInfo}
        />
      </div>
    );
  }
}

export default JobVideo;

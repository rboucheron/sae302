import React from "react";
import { Link } from "react-router-dom";

const LinkIntro = ({ Liens }) => {
  return (
    <Link to={Liens} className="LinkIntro">
      Découvrir maintenant
    </Link>
  );
};

export default LinkIntro;

import React from "react";
import Navbar from "../components/navbar";
import Btn from "../components/btn";
function Home() {
  document.title = `L'écho des écologues`;
  return (
    <div className="background-img">
      <Navbar />
      <h1>L'écho des écologues</h1>
      <div className="space">
        <div className="line">e</div>
      </div>
      <div className="space">
        <Btn />
      </div>
    </div>
  );
}

export default Home;

import React from "react";

const ImageGalerie = (props) => {
  return (
    <div>
      <img src={props.IMGSRC} alt={props.IMGTXT} />
      <br />
      {props.IMGTXT}
    </div>
  );
};

export default ImageGalerie;

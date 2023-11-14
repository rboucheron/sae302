import React from 'react';
import Navbar from '../components/navbar';
import VIDEOS from '../assets/video/VIDEO';
import IMAGES from '../assets/images/IMAGES';




function JobVideo(props) {
    return (
<div>
      <Navbar />

      <div className="videocontainer">
        <video src={VIDEOS.video} className='video' poster={IMAGES.image6} autoPlay controls >
          Votre navigateur ne prend pas en charge la balise vidéo.
        </video>

      
      </div>
    </div>
    );
}

export default JobVideo;
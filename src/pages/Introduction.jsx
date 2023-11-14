import React from 'react';
import Navbar from '../components/navbar';
import IMAGES from '../assets/images/IMAGES';
import LinkIntro from '../components/LinkIntro';
function Introduction() {
    return (
        <div>
            <Navbar />
            <div className='blockTitle'>
            <h1>L echo Des Ecologues</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>
            <div className='blockIMGTXT'>
                <div className="IMG">
                    <img src={IMAGES.image6} alt="" />
                </div>
                <div className="TXT">
                <h3>J’étudie la biodiversité, je cartographie les habitats et je sensibilise les acteurs du territoire.</h3>
               

                <LinkIntro Liens="/Interview"/>

                   
                </div>
            </div>
          
            <div className='blockIMGTXT'>
            
           
            <div className="IMG">
                <img src={IMAGES.image3} alt="" />
            </div>
            <div className="TXT">
            <h3>J’observe les oiseaux, les mamiféres, les poissons, les insectes et la flore également.</h3>
           

            <LinkIntro Liens="/audio"/>

               
            </div>
        </div>
        <div className='blockIMGTXT'>
        <div className="IMG">
                <img src={IMAGES.image7} alt="" />
            </div>
            <div className="TXT">
            <h3>J’étudie ce que mes collégues ont rapporté et je met en place des projets pour préserver la biodiversité.</h3>
           

            <LinkIntro Liens="/article"/>

               
            </div>
         
        </div>

        </div>
    );
}

export default Introduction;
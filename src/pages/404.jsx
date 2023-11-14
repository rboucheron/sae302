import React from 'react';
import IMAGES from '../assets/images/IMAGES';
import Navbar from '../components/navbar';
function Error() {
    return (
        <div>
      
            <Navbar />
         
          
            <h2>404</h2>
            <div className="text">Cette page n existe pas </div>
            
        </div>
    );
}

export default Error;
import React from 'react';
import Navbar from '../components/navbar';
import {Image} from 'lucide-react'; 

function Galerie() {
    return (
        <div>
            <Navbar />
            <h2>Galerie  <Image  size={48}  /></h2>
  
        </div>
    );
}

export default Galerie;
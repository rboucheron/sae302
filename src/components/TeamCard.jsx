import React from 'react';
import {Linkedin, Mail} from 'lucide-react';
import IMAGES from '../assets/images/IMAGES';

function TeamCard(props) {
    return (
        <div className='Team' id={props.Nom}>
        <div className="TeamImage"><img src={props.Img} alt={"Image de " + props.Nom}/></div>
        <div className="TeamContent">
        <h3>{props.Nom}</h3>
        <h4>{props.Rules}</h4>
        <a href={props.liens}><div className="TeamLink"><Linkedin size={30}  color="#ffffff" strokeWidth={2} /><p>{props.nom2}</p></div></a>
       <div className="TeamLink"><Mail size={30}  color="#ffffff" strokeWidth={2} /><p>{props.Mail}</p></div>
   
        </div>

       
        </div>
    );
}

export default TeamCard;
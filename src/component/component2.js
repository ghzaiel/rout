import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Img1 from '../component/Mariem.png'
import Img2 from '../component/Marwa.png'


import {NavLink} from "react-router-dom"
import "./nav.css"
export default function component2() {
    return (
        <div className="lol">
          <img src={Img1}/>
             <img src={Img2}/>
            
            
        <li><NavLink to="/stagiaire">stagiaire</NavLink> </li>
         

          
        </div>
    )
}

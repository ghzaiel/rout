import React from 'react'
import "./nav.css"
import Img1 from '../component/directeur.png'
import Img2 from '../component/secretaire.jpg'


export default function component3() {
    return (
        <div className="lol" >
            <h1>le directeur </h1>
            <img src={Img1}/>
            <h1>la secretaire</h1>
            <img src={Img2}/>
        </div>
    )
}

import React from 'react'
import './nav.css'

import {NavLink} from "react-router-dom"

function navigationnn() {
    return (
    
    <ul>
        <li><NavLink to="/">home</NavLink> </li>
        <li><NavLink to="/category">category</NavLink></li>
        <li><NavLink to="/products">products</NavLink></li>
    </ul>
    )
}
export default navigationnn
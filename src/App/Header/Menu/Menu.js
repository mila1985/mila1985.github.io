import React from 'react'
import {Link} from 'react-router-dom'
import './menu.css'

const Menu = () => {
    return (
    <div className="menu">
        <ul>
            <li><Link to="About me">About me</Link></li>
            <li><Link to="/">Travel</Link></li>
            <li><Link to="Food articles">Food</Link></li>
            <li><Link to="Souvenirs articles">Souvenirs</Link></li>
        </ul>
    </div>
    )
}

export default Menu

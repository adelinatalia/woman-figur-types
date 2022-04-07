import React from 'react'
import { NavLink } from 'react-router-dom'
import hourglass from '../assets/icons/nav-hourglass.png'
import triangle from '../assets/icons/nav-triangle.png'
import invertedTriangle from '../assets/icons/nav-inverted-triangle.png'
import oval from '../assets/icons/nav-oval.png'
import rectangle from '../assets/icons/nav-rectangle.png'
import '../style/navbar.css'

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/" activeclassname="active-link">Home</NavLink>
            <div className="nav-figures">
                <NavLink to="/hourglass" activeclassname="active-link">
                    <img src={hourglass} alt="hourglass" />
                </NavLink>
                <NavLink to="/triangle" activeclassname="active-link">
                    <img src={triangle} alt="triangle" />
                </NavLink>
                <NavLink to="/invertedTriangle" activeclassname="active-link">
                    <img src={invertedTriangle} alt="inverted triangle" />
                </NavLink>
                <NavLink to="/oval" activeclassname="active-link">
                    <img src={oval} alt="" />
                </NavLink>
                <NavLink to="/rectangle" activeclassname="active-link">
                    <img src={rectangle} alt="rectangle" />
                </NavLink>
            </div>
            <NavLink to="/identifyShape" activeclassname="active-link">Identify shape</NavLink>
        </nav>
    )
}

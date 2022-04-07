import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/" activeclassname="active-link">Home</NavLink>
            <NavLink to="/identifyShape" activeclassname="active-link">identify shape</NavLink>
        </nav>
    )
}

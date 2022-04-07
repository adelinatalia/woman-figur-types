import React from 'react'
import Navbar from './Navbar'
import logo from '../assets/logo.png'

export default function header() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <Navbar />
        </header>
    )
}

import React, { useState } from 'react'
import './Header.css'
import { Link } from "react-router-dom"
import { MdHome } from 'react-icons/md'
import { AiFillProject } from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'
import { MdContactMail } from 'react-icons/md'
import { MdAccountCircle } from 'react-icons/md'

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <ul>
                    <li><Link to="/"><MdHome /></Link></li>
                    <li><Link to="/projects"><AiFillProject /></Link></li>
                    <li><Link to="/about"><SiAboutdotme /></Link></li>
                    <li><Link to="/contact"><MdContactMail /></Link></li>
                    <li><Link to="/account"><MdAccountCircle /></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
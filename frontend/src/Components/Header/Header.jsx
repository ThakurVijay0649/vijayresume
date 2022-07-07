import React, { useState } from 'react'
import './Header.css'
import { Link } from "react-router-dom"
import { MdHome } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'
import { AiFillProject } from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'
import {FaUserSecret} from 'react-icons/fa'
import { MdContactMail } from 'react-icons/md'
import { MdAccountCircle } from 'react-icons/md'

const Header = () => {
    const [tab, setTab] = useState(window.location.pathname);
    return (
        <header className='header'>
            <nav>
                <ul>
                    <li>
                        <Link to="/" onClick={() => setTab("/")}>
                            {tab === "/" ? < MdHome style={{ color: "blue" }} /> : <MdHome />}
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={() => setTab("/projects")}>
                            {tab === "/" ? < AiFillProject style={{ color: "blue" }} /> : <AiFillProject />}
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setTab("/about")}>
                            {tab === "/" ? < SiAboutdotme style={{ color: "blue" }} /> : <SiAboutdotme />}
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setTab("contact")}>
                            {tab === "/" ? < MdContactMail style={{ color: "blue" }} /> : <MdContactMail />}
                        </Link>
                    </li>
                    <li>
                        <Link to="/account" onClick={() => setTab("account")}>
                        {tab === "/" ? < MdAccountCircle style={{ color: "blue" }} /> : <MdAccountCircle />}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
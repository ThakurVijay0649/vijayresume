import React, { useState } from 'react'
import './Header.css'
import { Link } from "react-router-dom"
import { MdHome } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { AiFillProject } from 'react-icons/ai'
import { AiTwotoneProject } from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'
import { FaUserSecret } from 'react-icons/fa'
import { MdContactMail } from 'react-icons/md'
import { MdContactPhone } from 'react-icons/md'
import { MdAccountCircle } from 'react-icons/md'
import { MdNoAccounts } from 'react-icons/md'

const Header = () => {
    const [tab, setTab] = useState(window.location.pathname)
    return (
        <header className='header'>
            <nav>
                <ul>
                    <li>
                        <Link to="/" onClick={() => setTab("/")}>
                            {tab === "/" ? <AiOutlineHome style={{ color: "#5fd9be" }} /> : <MdHome />}
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={() => setTab("/projects")}>
                            {tab === "/projects" ? <AiTwotoneProject style={{ color: "#5fd9be" }} /> : <AiFillProject />}
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setTab("/about")}>
                            {tab === "/about" ? <FaUserSecret style={{ color: "#5fd9be" }} /> : <SiAboutdotme />}
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setTab("/contact")}>
                            {tab === "/contact" ? <MdContactPhone style={{ color: "#5fd9be" }} /> : <MdContactMail />}
                        </Link>
                    </li>
                    <li>
                        <Link to="/account" onClick={() => setTab("/account")}>
                            {tab === "/account" ? <MdNoAccounts style={{ color: "#5fd9be" }} /> : <MdAccountCircle />}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
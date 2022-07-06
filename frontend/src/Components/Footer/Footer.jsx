import React from 'react'
import "./Footer.css"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaUserSecret } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-logo">
                <FaUserSecret />Vijay Thakur
            </div>
            <p>Copyright &copy; 2022, All Rights Reserved</p>
            <div className="social-icons">
                <a href="https://github.com/ThakurVijay0649" target="blank"><FaGithub /></a>
                <a href="https://github.com/ThakurVijay0649" target="blank"><FaLinkedin /></a>
            </div>
        </footer>
    )
}

export default Footer

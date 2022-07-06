import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'

const About = ({ about }) => {
    return (
        <div className='about'>
            <div className="aboutImg">
                <img src={about.avatar.url} alt="" />
            </div>
            <div className="aboutInfo">
                <h1>{about.name}</h1>
                <h2>{about.title}</h2>
                <h3>{about.subtitle}</h3>
                <p>{about.description}</p>
                <small>{about.quote}</small>
                <div className="about-button">
                    <Link to="/projects"><button>My Projects</button></Link>
                    <Link to="/contact"><button>Contact Me</button></Link>

                </div>
            </div>
        </div>
    )
}

export default About
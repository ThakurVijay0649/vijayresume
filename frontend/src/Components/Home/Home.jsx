import React from 'react'
import { Link } from 'react-router-dom'
import globe from "../../images/globe.webp"
import { AiFillProject } from 'react-icons/ai'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Home.css'
import TimeLine from '../TimeLine/TimeLine'
 
const Home = ({ timelines, skills }) => {
    return (
        <div className='home'>
            <div className="first-section">
                <div className="left">
                    <h1>Hello! I'm Vijay Thakur</h1>
                    <h2>Welcome to My Portfolio Website</h2>
                    <p>Here You can see my projects that I have made in Web Development technologies like HTML, CSS, JavaScript, ReactJS, NodeJS, BootStrap, TailwandCSS etc.</p>
                    <Link to="/projects"><AiFillProject />Projects</Link>
                </div>
                <div className="right">
                    <img src={globe} alt="" />
                </div>
            </div>
            <TimeLine timelines={timelines} />
            <div className="skills-container">
                <h1>Skills</h1>
                <Carousel showArrows={true} autoPlay={true} interval={2000} swipeable={true} infiniteLoop={true}>
                    <div>
                        <img src={skills.image1.url} alt="skills" />
                    </div>
                    <div>
                        <img src={skills.image2.url} alt="skills" />
                    </div>
                    <div>
                        <img src={skills.image3.url} alt="skills" />
                    </div>
                    <div>
                        <img src={skills.image4.url} alt="skills" />
                    </div>
                    <div>
                        <img src={skills.image5.url} alt="skills" />
                    </div>
                    <div>
                        <img src={skills.image6.url} alt="skills" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Home

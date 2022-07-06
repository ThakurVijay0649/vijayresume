import React from 'react'
import ProjectCard from './ProjectCard';
import "./Projects.css"

const Projects = ({ projects }) => {
    return (
        <div className='projects'>
            {
                projects.map((item, index) => (
                    <ProjectCard
                        index={index}
                        key={index}
                        url={item.url}
                        projectImage={item.image.url}
                        projectTitle={item.title}
                        description={item.description}
                        technologies={item.techStack}
                        isAdmin={false}
                        id={item._id}
                    />
                ))
            }
        </div>
    )
}

export default Projects
import React from 'react'
import "./Projects.css"
import { useDispatch } from 'react-redux'
import { deleteProject, getUser } from '../../actions/user'


const ProjectCard = ({
    index,
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
    id

}) => {

    const dispatch = useDispatch();

    const deleteHandler = async (id) => {
        await dispatch(deleteProject(id))
        dispatch(getUser())
    }


    return (
        <div className='projectCard'>
            <div className="cardImg"><img src={projectImage} alt="" /></div>
            <div className="cardInfo">
                <h1>{index + 1}. {projectTitle}</h1>
                <p>{description}</p>
                <h3>Technology : {technologies}</h3>
                <div style={{ margin: "10px 0", display: "flex", flexWrap: "wrap" }}>
                    <a href={url} target="blank" style={{ marginTop: "10px" }}>View Demo</a>
                    {isAdmin && <button onClick={() => deleteHandler(id)} style={{ marginTop: "10px" }}>Delete</button>}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
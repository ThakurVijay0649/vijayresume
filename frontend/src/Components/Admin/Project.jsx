import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addProject, getUser } from '../../actions/user';
import "../Contact/Contact.css";
import ProjectCard from '../Projects/ProjectCard';
import "../Projects/Projects.css"

const Project = () => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [techStack, setTechStack] = useState("");
    const [image, setImage] = useState("");
    const dispatch = useDispatch();
    const alert = useAlert();
    const { message: loginMessage } = useSelector((state) => state.login);
    const { message, error, loading } = useSelector((state) => state.update);
    const { user } = useSelector((state) => state.user);
    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(addProject(title, url, image, description, techStack))
        dispatch(getUser());
    }
  
    const handleImage = (e) => {
        const file = e.target.files[0];
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setImage(Reader.result)
            }
        }
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: "CLEAR_ERRORS" });
        }
        if (message) {
            alert.success(message);
            dispatch({ type: "CLEAR_MESSAGE" });
        }
        if (loginMessage) {
            alert.success(loginMessage);
            dispatch({ type: "CLEAR_MESSAGE" });
        }

    }, [dispatch, error, message, alert, loginMessage]);


    return (
        <>
            <div className='contact'>
                <h1>Project</h1>
                <form onSubmit={submitHandler}>
                    <div className="input-label">
                        <label>Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
                    </div>
                    <div className="input-label">
                        <label>Link</label>
                        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter Url" />
                    </div>
                    <div className="input-label">
                        <label>Image</label>
                        <input type="file" accept='image/*' onChange={handleImage} style={{ color: "white" }} />
                    </div>
                    <div className="input-label">
                        <label>Description</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" />
                    </div>
                    <div className="input-label">
                        <label>Technology</label>
                        <input type="text" value={techStack} onChange={(e) => setTechStack(e.target.value)} placeholder="Enter Technology" />
                    </div>
                    <button type="submit" disabled={loading}>Add</button>
                    <div className="timeline-project">
                        <Link to="/account">Back</Link>
                    </div>
                </form>
                <div className="projects" style={{background:"black"}}>
                    {user && user.projects && user.projects.map((item, index) => (
                        <ProjectCard
                            key={item._id}
                            id={item._id}
                            index={index}
                            url={item.url}
                            projectImage={item.image.url}
                            projectTitle={item.title}
                            description={item.description}
                            technologies={item.techStack}
                            isAdmin={true}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Project;
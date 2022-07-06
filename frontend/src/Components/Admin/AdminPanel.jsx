import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logout, updateUser } from '../../actions/user';
import "../Contact/Contact.css"

const AdminPanel = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [skills, setSkills] = useState({});
    const [about, setAbout] = useState({});
    const dispatch = useDispatch();
    const alert = useAlert();
    const { message: loginMessage } = useSelector((state) => state.login);
    const { message, error, loading } = useSelector((state) => state.update);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser(name, email, password, skills, about));
    }

    const logoutHandler = () => {
        dispatch(logout())
    }

    const handleAboutImage = (e) => {
        const file = e.target.files[0];
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setAbout({ ...about, avatar: Reader.result })
            }
        }
    }


    const handleImages = (e, val) => {
        const file = e.target.files[0];
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        Reader.onload = () => {
            if (Reader.readyState === 2) {
                if (val === 1) {
                    setSkills({ ...skills, image1: Reader.result })
                }
                if (val === 2) {
                    setSkills({ ...skills, image2: Reader.result })
                }
                if (val === 3) {
                    setSkills({ ...skills, image3: Reader.result })
                }
                if (val === 4) {
                    setSkills({ ...skills, image4: Reader.result })
                }
                if (val === 5) {
                    setSkills({ ...skills, image5: Reader.result })
                }
                if (val === 6) {
                    setSkills({ ...skills, image6: Reader.result })
                }
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
        <div className='contact'>
            <h1>Admin Panel</h1>
            <form onSubmit={submitHandler}>
                <div className="input-label">
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
                </div>
                <div className="input-label">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
                </div>/
                <div className="input-label">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
                </div>
                <div className="input-label">
                    <label>Skill 1</label>
                    <input type="file" accept='image/*' onChange={(e) => handleImages(e, 1)} style={{ color: "white" }} />
                </div>
                <div className="input-label">
                    <label>Skill 2</label>
                    <input type="file" accept='image/*' onChange={(e) => handleImages(e, 2)} style={{ color: "white" }} />
                </div>
                <div className="input-label">
                    <label>Skill 3</label>
                    <input type="file" accept='image/*' onChange={(e) => handleImages(e, 3)} style={{ color: "white" }} />
                </div>
                <div className="input-label">
                    <label>Skill 4</label>
                    <input type="file" accept='image/*' onChange={(e) => handleImages(e, 4)} style={{ color: "white" }} />
                </div>
                <div className="input-label">
                    <label>Skill 5</label>
                    <input type="file" accept='image/*' onChange={(e) => handleImages(e, 5)} style={{ color: "white" }} />
                </div>
                <div className="input-label">
                    <label>Skill 6</label>
                    <input type="file" accept='image/*' onChange={(e) => handleImages(e, 6)} style={{ color: "white" }} />
                </div>
                <fieldset style={{ padding: "7px" }}>
                    <legend>About</legend>
                    <div className="input-label">
                        <label>Name</label>
                        <input type="text" value={about.name} onChange={(e) => setAbout({ ...about, name: e.target.value })} placeholder="Enter Your Name" />
                    </div>
                    <div className="input-label">
                        <label>Title</label>
                        <input type="text" value={about.title} onChange={(e) => setAbout({ ...about, title: e.target.value })} placeholder="Enter Your Title" />
                    </div>
                    <div className="input-label">
                        <label>Subtitle</label>
                        <input type="text" value={about.subtitle} onChange={(e) => setAbout({ ...about, subtitle: e.target.value })} placeholder="Enter Your Subtitle" />
                    </div>
                    <div className="input-label">
                        <label>Description</label>
                        <input type="text" value={about.description} onChange={(e) => setAbout({ ...about, description: e.target.value })} placeholder="Enter Your Description" />
                    </div>
                    <div className="input-label">
                        <label>Quote</label>
                        <input type="text" value={about.quote} onChange={(e) => setAbout({ ...about, quote: e.target.value })} placeholder="Enter Your Quote" />
                    </div>
                    <div className="input-label">
                        <label>Avatar</label>
                        <input type="file" accept='image/*' onChange={handleAboutImage} style={{ color: "white" }} />
                    </div>
                </fieldset>
                <div className="timeline-project">
                    <Link to="/admin/timeline">Timeline</Link>
                    <Link to="/admin/project">Projects</Link>
                </div>
                <button type="submit" disabled={loading}>Update</button>
            </form>
            <button className="adminButton" onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default AdminPanel
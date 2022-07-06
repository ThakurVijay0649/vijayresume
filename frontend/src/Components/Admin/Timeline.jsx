import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addTimeline, deleteTimeline, getUser } from '../../actions/user';
import "../Contact/Contact.css";
import "../TimeLine/TimeLine.css"

const Timeline = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const dispatch = useDispatch();
    const alert = useAlert();
    const { message: loginMessage } = useSelector((state) => state.login);
    const { message, error, loading } = useSelector((state) => state.update);
    const { user } = useSelector((state) => state.user);
    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(addTimeline(title, description, date));
        dispatch(getUser());
    }
    const deleteHandler = (id) => {
        dispatch(deleteTimeline(id));
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
                <h1>Timeline</h1>
                <form onSubmit={submitHandler}>
                    <div className="input-label">
                        <label>Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
                    </div>
                    <div className="input-label">
                        <label>Description</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" />
                    </div>/
                    <div className="input-label">
                        <label>Date</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Enter Date" />
                    </div>
                    <button type="submit" disabled={loading}>Add</button>
                    <div className="timeline-project">
                        <Link to="/account">Back</Link>
                    </div>
                </form>

            </div>
            <div className="timelines">
                {user && user.timeline && user.timeline.map((item, index) => (
                    <div className='timeline-info' key={index}>
                        <h2>{index + 1}. {item.title}</h2>
                        <small>{item.date.toString().split("T")[0]}</small>
                        <p>{item.description}</p>
                        <button className="adminButton timelineButton" onClick={() => deleteHandler(item._id)}>Delete</button>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default Timeline
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./Contact.css"
import { useAlert } from "react-alert"
import { contactUs } from '../../actions/user';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, message: alertMessage, error } = useSelector((state) => state.update);

  const contactHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (alertMessage) {
      alert.success(alertMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }

  }, [dispatch, error, alertMessage, alert]);
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <form onSubmit={contactHandler}>
        <div className="input-label">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
        </div>
        <div className="input-label">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
        </div>/
        <div className="input-label">
          <label>Message</label>
          <textarea placeholder='Enter Your Message' value={message} onChange={(e) => setMessage(e.target.value)} cols="30" rows="10"></textarea>
        </div>
        <button type="submit" disabled={loading}>Send</button>
      </form>
    </div>
  )
}

export default Contact
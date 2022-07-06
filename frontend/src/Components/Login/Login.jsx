import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/user';
import "../Contact/Contact.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.login);
  const alert = useAlert();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
  };


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }

  }, [dispatch, error, message, alert]);


  return (
    <div className='contact login'>
      <h1>Login To Continue</h1>
      <form onSubmit={submitHandler}>
        <div className="input-label">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' />
        </div>
        <div className="input-label">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password' />
        </div>
        <button type="submit" disabled={loading}>Login</button>
      </form>
    </div>
  )
}

export default Login
import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from './actions/user';
import AdminPanel from './Components/Admin/AdminPanel';
import Timeline from './Components/Admin/Timeline';
import Project from './Components/Admin/Project';
import Loader from './Components/Loader/Loader';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user)
  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch])

  return (
    <Router>

      {loading ? <Loader/> : (
        <>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home timelines={user.timeline} skills={user.skills} />} />
            <Route exact path="/projects" element={<Projects projects={user.projects} />} />
            <Route exact path="/about" element={<About about={user.about} />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/account" element={isAuthenticated ? <AdminPanel /> : <Login />} />
            <Route exact path="/admin/timeline" element={isAuthenticated ? <Timeline /> : <Login />} />
            <Route exact path="/admin/project" element={isAuthenticated ? <Project /> : <Login />} />
            <Route exact path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;

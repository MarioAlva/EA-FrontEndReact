import { BrowserRouter as Router, Route, Routes, Link, redirect } from 'react-router-dom';
import Logo from './assets/img/logo.png';
import Home from './components/Home';
import Login from './components/Login';
import CreateEvent from './components/CreateEvent';
import Event from './components/Events';
import navOptions from './assets/data/navOptions';
import Logout from './assets/img/logout.png';
import { useState } from 'react';
import './App.css';
import { RequireAuth } from 'react-auth-kit';
import React, { Component, ChangeEvent, FormEvent, } from 'react'

function App() {
  function logout(){
    console.log("loguot");
      localStorage.removeItem("token");
      window.location.assign('/login');
  }
  let [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <Router>
    <div className="main-container">
      {/* <button onClick={() => setNavbarOpen(!navbarOpen)}>
        <img src={Logo} alt="button" />
	</button> */}
        <div className="nav-container">
          <div className="nav-logo">
            <img style={{marginLeft: "13px", marginTop: "20px", marginBottom: "170px"}} width={40} src={Logo} alt="logo" />
          </div>
          <div className="nav-options">
            {navOptions.map((option : any, index : any) => (
				<Link to={option.path} key={index}>
                <div className="nav-option">
				{process.env.TOKEN}
                  <img className='navBar-imageOptions' src={option.icon} alt={option.name} />
                  <div className='navBar-optionName'>{option.name}</div>
                </div>
              </Link>
            ))}
          </div>
          <div onClick={logout} className='logOut-navBar nav-option' style={{height: "auto", padding: "10px 0"}}>
            <img className='navBar-imageOptions' src={Logout} alt="user" />
            <div className='navBar-optionName'>Log out</div>
          </div>
        </div>
      <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/create-event" element={<CreateEvent />}></Route>
            <Route path="/event" element={<Event />}></Route>
          </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;

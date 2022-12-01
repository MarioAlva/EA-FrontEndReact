import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Logo from './assets/img/logo.png';
import Home from './components/Home';
import Login from './components/Login';
import Search from './components/Search';
import CreateEvent from './components/CreateEvent';
import Event from './components/Events';
import navOptions from './assets/data/navOptions';
import Logout from './assets/img/logout.png';
import login from './assets/img/login.png'; 
import './App.css';

function App() {
	const token = localStorage.getItem('token');
  return (
    <Router>
    <div className="main-container">
        <div className="nav-container">
          <div className="nav-logo">
		  	<Link to="/" key="home">
				<img style={{marginLeft: "13px", marginTop: "20px", marginBottom: "18vh"}} width={40} src={Logo} alt="logo" />
			</Link>
          </div>
          <div className="nav-options">
            {navOptions.map((option : any, index : any) => (
				<Link to={option.path} key={index}>
                <div className="nav-option">
                  <img className='navBar-imageOptions' src={option.icon} alt={option.name} />
                  <div className='navBar-optionName'>{option.name}</div>
                </div>
              </Link>
            ))}
          </div>
			{token === null ? <Link className='logOut-navBar nav-option' style={{height: "auto", padding: "10px 0"}} to="/login" key="login">
				<img className='navBar-imageOptions' src={login} alt="user" />
            	<div className='navBar-optionName'>Log in</div>
			</Link>:	
			<div className='logOut-navBar nav-option' style={{height: "auto", padding: "10px 0"}}>
				<img className='navBar-imageOptions' src={Logout} alt="user" />
            	<div className='navBar-optionName'>Log out</div>
			</div>
			}
            
        </div>
      <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/event/create" element={<CreateEvent />}></Route>
            <Route path="/event" element={<Event />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;

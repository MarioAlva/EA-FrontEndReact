import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Logo from './assets/img/logo.png';
import Home from './components/Home';
import Login from './components/Login';
import CreateEvent from './components/CreateEvent';
import Events from './components/Events';
import Event from './components/Event';
import Profile from './components/Profile';
import UpdateUser from './components/UpdateUser';
import Serie from './components/Serie';
import Search from './components/Search';
import UpdateUserValues from './components/UpdateUserValues';
import navOptions from './assets/data/navOptions';
import Logout from './assets/img/logout.png';
import login from './assets/img/login.png'; 
import Chat from './components/Chat';
import Report from './components/Report';
import Config from './components/Configuration';
import './App.css';
import io from 'socket.io-client';


//const socket = io('http://localhost:3001');

function App() {
  function logout(){
      localStorage.removeItem("token");
      window.location.assign('/login');
  }
  



	const token = localStorage.getItem('token');
  const theme = localStorage.getItem('theme') || 'dark';
  console.log(theme);
  return (
    // {`nav-container-${theme}`}
    <Router>
    <div className={`main-container-${theme}`}>
        <div className={`nav-container-${theme}`}>
          <div className="nav-logo">
		  	<Link to="/" key="home">
				<img style={{marginLeft: "13px", marginTop: "20px", marginBottom: "18vh"}} width={40} src={Logo} alt="logo" />
			</Link>
          </div>
          <div className="nav-options">
            {navOptions.map((option : any, index : any) => (
              (option.auth === true && token) || option.auth === false  ? 
                <Link to={option.path} key={index}>
                <div className="nav-option">
                  <img className='navBar-imageOptions' src={option.icon} alt={option.name} />
                  <div className='navBar-optionName'>{option.name}</div>
                </div>
              </Link> : null
            ))}
          </div>
			{token === null ? <Link className='logOut-navBar nav-option' style={{height: "auto", padding: "10px 0"}} to="/login" key="login">
				<img className='navBar-imageOptions' src={login} alt="user" />
            	<div className='navBar-optionName'>Log in</div>
			</Link>:	
			<div onClick={logout} className='logOut-navBar nav-option' style={{height: "auto", padding: "10px 0"}}>
				<img className='navBar-imageOptions' src={Logout} alt="user" />
            	<div className='navBar-optionName'>Log out</div>
			</div>
			}
            
        </div>
      <div className="content-container">
		<div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/event/create" element={<CreateEvent />}></Route>
            <Route path="/event" element={<Events />}></Route>
            <Route path='/profile/:id' element = {<Profile />}></Route>
            <Route path='/updateUser' element = {<UpdateUser />}></Route>
			<Route path='/search' element = {<Search />}></Route>
			<Route path='/serie/:id' element = {<Serie />}></Route>
			<Route path='/event/:id' element = {<Event />}></Route>
            <Route path='/updateUserValues' element = {<UpdateUserValues />}></Route>
            <Route path='/chat' element = {<Chat />}></Route>
            <Route path='report' element = {<Report />}></Route>
            <Route path='/config' element = {<Config />}></Route>

          </Routes>
		  </div>
      </div>
    </div>
    </Router>
  );
}


export default App;

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import CreateEvent from './components/CreateEvent';
import Event from './components/Event';
import navOptions from './data/navOptions';
import './App.css';

function App() {
  let navbarOpen = false;
  return (
    <Router>
    <div className="main-container">
        <div className="nav-container" style={navbarOpen ? {} : {left : "-20vw"}>
          <div className="nav-logo">
            <img src="../assets/logo.png" alt="logo" />
          </div>
          <div className="nav-options">
            {navOptions.map((option : any, index : any) => (
              <Link to={option.path} key={index}>
                <div className={"nav-option" +
                  option.auth ? 'nav-option-auth' : 'nav-option-unauth'}>
                  <img height={10} src={option.icon} alt={option.name} />
                  <p>{option.name}</p>
                </div>
              </Link>
            ))}
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

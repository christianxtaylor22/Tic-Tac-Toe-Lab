import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './Screens/Home';
import Mission from './Screens/Mission';
import Team from './Screens/Team';
import About from './Screens/About';
import './App.css';
import Contact from './Screens/Contact';
import Redux from './Screens/Redux';
import Weather from './Screens/Weather';
import ModeComponent from './Theme/ModeComponent';
import ThemeContext from './Theme/ThemeContext';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext); 
  return (
    <Router>
        <nav className="navbar">
          <Link to="/" className="link">Home</Link>
          <div className="dropdown">
            <Link to="/about" className="link">About</Link>
            <div className="dropdown-content">
              <Link to="/about/team" className="link">Team</Link>
              <Link to="/about/mission" className="link">Mission</Link>
            </div>
          </div>
          <Link to="/contact" className="link">Contact</Link>
          <Link to="/redux" className="link">Redux</Link>
          <Link to="/weather" className="link">Weather</Link>
          <ModeComponent isChecked={theme === 'dark'} onToggle={toggleTheme} />
        </nav>
        

      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/about" element={<About/>}>
          <Route path = "/about/team" element={<Team />}/>
          <Route path = "/about/mission" element={<Mission />}/>
        </Route>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/redux" element={<Redux />}/>
        <Route path="/weather" element={<Weather />}/>
      </Routes>
    </Router>
  );
}

export default App;

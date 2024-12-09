import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import '../App.css'

function About() {
const location = useLocation();
const isAboutBase = location.pathname === '/about';

  return (
    <div>
      {isAboutBase && 
      <div className='about'>
      <h1>About the App</h1>
        <p>This is the Final Exam App that has a nav bar at the top to navigate to different screens that implement different features that were taught in this class!</p>
      </div>
      }
      <Outlet/>
    </div>
  );
}

export default About;

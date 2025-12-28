import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

function Landing() {
  return (
    <div className='home-container'>
      <div className='upper-section'>
        <span className='badge'>Your Daily Companion</span>
        <h1 className='title'>
          Get Things Done with <span className='highlight'>Task Tracker</span>
        </h1>
        <p className='description'>
          A minimal, beautiful task management app to help you stay organized and productive. No clutter, just focus.
        </p>
        <button className='get-started-button'>Get Started</button>
      </div>
    </div>
  );
}

export default Landing;

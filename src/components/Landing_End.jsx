import React from 'react'
import { Link } from 'react-router-dom';
import './landing_end.css';

const Landing_End = () => {
  return (
    <div className='end-container'>
        <h2 className='end-title'>Ready to boost your productivity?</h2>
        <p className='end-description'>Start managing your tasks today. It's simple, fast, and beautiful.</p>
        <Link to='/tasks'>
          <button className='end-get-started-button'>Get Started Now</button>
        </Link>

      
    </div>
  )
}

export default Landing_End;

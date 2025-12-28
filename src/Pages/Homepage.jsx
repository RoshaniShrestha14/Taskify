import React from 'react'
import Landing from '../components/Landing'
import Landing_Card from '../components/Landing_Card'
import Landing_End from '../components/Landing_End'
import Navbar from '../components/Navbar'

const Homepage = () => {
  return (
    <div>
    <Navbar></Navbar>
      <Landing></Landing>
      <Landing_Card></Landing_Card> 
      <Landing_End></Landing_End>
    </div>
  )
}

export default Homepage

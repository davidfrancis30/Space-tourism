import React from 'react'
import { Link } from "react-router-dom"
import "../../styles/welcome-page.css"
const WelcomePage = () => {
  return (
      <div className='main-welcome'>
          <div className='side-welcome'>
               
          </div>
          <div  className='right-welcome'>
              <div  className='welcome-space'><p>SPACE</p></div>
              <div className='welcome-tospace'> <p>WELCOME TO SPACE!!</p></div>
             
              <Link className='get-started' to="/signup">  <p>GET STARTED</p></Link></div>
          
    </div>
  )
}

export default WelcomePage
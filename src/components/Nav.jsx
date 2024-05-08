import React from 'react'
import './Nav.css'


function Nav() {
  return (
    <div className='NavContainer'>
        <div className="logo">
          <img src= './littlelemon_logo.png' className='logoLemon' alt='logo'/>
        </div>
        <div className="NavContent">
          <ul className='NavList'>
            <li className='listItem'>Home </li>
            <li className='listItem'>About </li>
            <li className='listItem'>Service </li>
            <li className='listItem'>Menu </li>
            <li className='listItem'>Reservations </li>
            <li className='listItem'>Order Online</li>
            <li className='listItem'>Login </li>
          </ul>
        </div>
    </div>
  )
}

export default Nav
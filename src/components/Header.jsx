import React from 'react'
import './Header.css'
import restauran from "../images/restauranfood.jpg"

function Header() {
  return (
    <div className='HeaderContainer'>
        <div className="textContent">
            <h1> Little Lemon</h1>
            <h3> Canada </h3>
            <span >Little Lemon Restaurant: A Taste of Delightful Flavors in Every Exquisite Bite!</span>
            <button className='headerButton'>Reserve Table</button>
        </div>
        <div className="imgContent">
            <img src= {restauran} alt="Restaurant Food" className='headerImg' />
        </div>

    </div>
  )
}

export default Header
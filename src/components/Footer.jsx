import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <div className='FooterContainer'>
        <div className="firstBox">
        <img src= './littlelemon_logo.png' className='Lemon' alt='logo'/>
        <span>Little Lemon Restaurant presents a tantalizing menu of delectable dishes, coupled with a charming ambiance and impeccable service, ensuring an unforgettable dining experience for every guest</span>
        </div>
        <div className="secBox">
        <ul className='List'>
            <h1>Importnat Links</h1>
            <li className='listItem'>Home </li>
            <li className='listItem'>About </li>
            <li className='listItem'>Menu </li>
            <li className='listItem'>Reservations </li>
            <li className='listItem'>Order Online</li>
            <li className='listItem'>Login </li>
          </ul>
        </div>
        <div className="thirdBox">
        <ul className='List'>
            <h1>Contacts</h1>
            <li className='listItem'>
                <h3>address: </h3>
                <span>143 king st N </span>
             </li>
            <li className='listItem'> <h3>email:</h3>littlelemon23@hotmail.com </li>
            <li className='listItem'> <h3>phone no </h3>+1 435677890 </li>
          </ul>
        </div>
        <div className="fourthBox">
        <ul className='List'>
            <h1>Social Media Links</h1>
            <li className='listItem'>Facebook </li>
            <li className='listItem'>Instagram</li>
            <li className='listItem'>Twitter </li>
         
          </ul>
        </div>
    </div>
  )
}

export default Footer
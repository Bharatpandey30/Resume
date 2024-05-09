import React from 'react'
import recipes from '../recipes'
import './Main.css'

function Main() {
const Menu = ({recipes}) =>{
    return(
        <div className="menuContent">
            {recipes.map((recipes) =>(
              <div key={recipes.id} className='menuItem'>
                <img src={recipes.image} className='menuImg' alt='img'/>
                <div className='TP'>
                <h2> {recipes.title} </h2>
                <h3>{recipes.price}</h3>
                </div>
                <span>{recipes.description}</span>
                <button className='menuButton'>Order Now</button>
                </div>
            ))}
        </div>
    )

}

  return (
    <div className='MainContainer'>
        <div className="topContent">
            <h1> This Week Specials!</h1>
            <button className='MainButton'>Online Menu</button>
        </div>
        <div className="menuCont">
            <Menu className="box" recipes={recipes}/>
        </div>
    </div>
  )
}

export default Main
import React from 'react'
import MealItem from './MealItem'
import './style.css';

const Meal = () => {
  return (
    <>
      <div className='main'>
      <div className="heading">
        <h1>Search Food Recipe</h1>
        <h4>Contrary to popular belief, Lorem Ipsum is not simply random text.</h4>
      </div>
      <div className="searchBox">
        <input type="text" className='search-bar' placeholder='Enter Food Name' />
      </div>
      <div className="container">
        <MealItem />
        <MealItem />
        <MealItem />
        <MealItem />
        <MealItem />
      </div>
    </div>
    </>
  )
}

export default Meal
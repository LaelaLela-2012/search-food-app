import React from 'react'
import './style.css'

const MealItem = () => {
  return (
      <>
          <div className="card">
            <img src="https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg" alt="" />
            <div className="info">
                <h2>Pancake</h2>
                <p>Amerian Food</p>
            </div>
            <div className="recipe">
                  <h2>Recipe</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <img src="https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg" alt="" />
                <a href="https://www.youtube.com/watch?v=7xL9c39DhjI">Watch Video</a>
            </div>
            </div>
      </>
  )
}

export default MealItem
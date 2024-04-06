import React from 'react';
import style from './recipeModule.css';

const Recipes = (props)=>{
    const ingredients = props.ingredients;
    return(
        <div className="recipe">
              <img className="image" src={props.image} alt="image"/>
            <h1 className=''>{props.title}</h1>
            <p>{props.calories}</p>
            <ol>
          
            {
                ingredients && ingredients.length > 0 &&
                ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))
            }
            </ol>
          
        </div>
    )
}

export default Recipes;
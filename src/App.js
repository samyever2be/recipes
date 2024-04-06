import './App.css';
import React, {useEffect, useState} from 'react';
import Recipes from './Components/Recipes';


const App = ()=> {

  const APP_ID  = "444e8b43";
  const APP_KEY = "7a1bb1b1e6aabffc3af02d0ba5e97787";

  const[recipes, setRecipes] = useState([]);
  const[search,   setSearch] = useState("");
  const[query, setQuery]     = useState('chicken');

  useEffect( () => {
    getRecipes();
  },[query]); //depenedeny for when fully typed & render only when searching time & similiar validation
  
  const getRecipes = async () =>{
  const response   = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data       = await response.json();
  setRecipes(data.hits);
 }

 const updateSearch = e =>{
  setSearch(e.target.value)
  console.log(search);
 }
//whenever hit submit button that time only render component
 const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');// reset search itemes
 }

  return (
    <div className="App">
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type="text" value={search} onChange={updateSearch} placeholder="Search your faviourite recipes..."/>
        <button className='search-button' type="submit">Search</button>
      </form>
      <div className='recipes'>
      {
        recipes && recipes.length > 0 &&
        recipes.map(recipe =>(
          <Recipes 
          key = {recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={ recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
           
        ))}
        </div>
    </div>
  );
}

export default App;

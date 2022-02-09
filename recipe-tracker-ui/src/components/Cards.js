import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Cards.css';
import CardItem from './CardItem';
import Filters from './Filters';
import Individual from './recipe/Individual';

function Cards(props) {
  const showfilter = !props.hidefilter;
  const recipes = props.recipes;

  function setRecipe(recipeID) {
    //window.localStorage.setItem("recipe", recipeID );
    //window.location = "/individual"
  }

  return (
    <div className='cards'>
      {/* <h1>{props.value} Top Recipes</h1> */}
      {showfilter && <Filters />}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
             <Grid container spacing={2}>
          {recipes.map((item) => {
            return (
             
              <Grid item xs={6} sm={3} >
            <CardItem key= {item.id}
              src={item.recipeAlbum[0]}
              title = {item.title}
              text={item.description}
              label={item.restrictions[0]}
              path='/individual'
              render={(props) => (
                <Individual {...props} recipe={item} />
              )}  //**************************************************PASS PROPS THROUGH PATH?
             //onClick= {setRecipe(item.id)} 
            />
            </Grid>
        
           );
            })}</Grid>
          </ul> 
        </div>
      </div>
    </div>
  );
}

export default Cards;
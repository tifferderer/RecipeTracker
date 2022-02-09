import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Reviews from "./Reviews";
import PrintIcon from '@material-ui/icons/Print';
import "./individual.css";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Individual(props) {
  const classes = useStyles();
  let recipeItems2 = props.recipe;

      var config = {
        method: 'get',
        url: 'https://test-digichef-api.fiddlingphotographer.com/recipetracker/recipes/?id=' , // + localStorage.getItem("recipe"),
        headers: { 
          'Content-Type': 'application/json'
        },
      };
      
       axios(config)
      .then(function (response) {
  
     console.log(response.data);
     recipeItems2 = response.data[0];
      })
      .catch(function (error) {
        console.log(error);
      });
 
      const recipeItems = {
        title: "Simple Spaghetti and Meatballs",
        description: "Italian-American culture on a plate. A wonderfully simple yet delicious meal, sure to brighten your day!",
        ingredients: ["ground beef","breadcrumbs","grated parmesan cheese","milk","salt","garlic powder","onion powder","cayenne pepper","black pepper","olive oil","tomato paste","can of crushed tomatoes","dried spaghetti"],
        steps: ["Put the beef, grated cheese, salt, and all the spices in a bowl. Put milk and breadcrumbs in the meat mixture.",
        "Mix together with your fingertips until just combined. Roll the meat into balls about 2 cm wide.",
        "Heat olive oil on moderate heat. Cook meatballs until the first side is browned. Carefully push the meatballs off the pan surface and try to brown the other sides as much as possible, taking care to not let the fond in the pan burn.",
        "Put in the the tomato paste and fry it for a moment. Pour in the crushed tomatoes and de-glaze the pan. Stir frequently until the sauce has reduced.","Boil the spaghetti in salted water until almost done. Drain it and mix it into the sauce and meatballs, adding some of the cooking water if the sauce isn't liquid enough for you. Put it on a plate and top with more grated cheese and fresh herb."],
        user: "MasterChef",
        image: "https://storage.googleapis.com/digichef/images/a087c04e659b4920b450d519fe58295b.png"
      }

  return (
      <Container id = "recipe">
    <div className={classes.root}> 
    <Paper className={classes.paper}>
      <Grid container id= "description" spacing={1}>
        <Grid item xs={12} sm={3}>
          <figure className="center">
              <img src= {recipeItems.image} 
              alt = {recipeItems.title} 
              className="img-fluid img-responsive center" 
             />
              <figcaption>Author: {recipeItems.user}</figcaption>
          </figure>
        </Grid>
        <Grid item xs={12} sm={9}>
          <div className="end">
          
            <div 
              onClick= {() => {window.print()}}
              >
              <PrintIcon />
            </div>
         </div>
              <h1 className= "mb-1">{recipeItems.title}</h1>
              <p className="mb-1">{recipeItems.description}</p>
              <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
       
              <h2>Ingredients:</h2>
              <ul>
                  {recipeItems.ingredients.map((e) => {
                    return (
                     <li key={e}>
                     {e}
                   </li>)
                 })}
              </ul> 
              </Grid>
              <Grid item xs={12} sm={8}>
              <h2>Directions:</h2>
              <ol>
              {recipeItems.steps.map((e) => {
                    return (
                     <li key={e}>
                     {e}
                   </li>)
                 })}
              </ol>
              </Grid>
              </Grid>
        </Grid>
        </Grid>
      </Paper>
    </div>
    <Reviews />
    </Container>
  );
}
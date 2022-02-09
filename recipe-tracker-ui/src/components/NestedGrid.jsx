import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item md={6}>
          <Paper className={classes.paper}> <h2>Guidelines</h2>
        
                <p>The goal of DigiChef is to focus on the recipe 
                  and less of the text that most websites use to 
                  fill. Please keep description to less than 200 
                  characters.
                </p>
                <p>Please be aware your username will be published with 
                  the recipe.
                </p>
              </Paper>
        </Grid>
        <Grid item={6}>
          <form className={classes.form} action="/user" noValidate>
            <Grid item={12}>
              <TextField
                autoComplete="title"
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                autoFocus
              />
            </Grid>
            <Grid item={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                maxRows="3"
                 minRows="3"
                id="description"
                label="Description"
                name="description"
                autoComplete="Description"
              />
            </Grid>
            <Grid item={12}>
              <TextField
                variant="outlined"
                required
               
                id="ingredient"
                label="Ingredient"
                name="ingredient"
                autoComplete="ingredient"
              />
               <Button
            type="submit"
            
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add +
          </Button>
            </Grid>
            <Grid item={12}>
              <TextField
                variant="outlined"
                required
                alignItems="center"
                name="steps"
                label="Steps"
                type="steps"
                id="steps"
                autoComplete="steps"
              />
               <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add +
          </Button>
            </Grid>
            <Grid item={6}>
              <FormControlLabel
                control={<Checkbox value="main" color="primary" />}
                label="Main Dish"
              />
                 <FormControlLabel
                control={<Checkbox value="side" color="primary" />}
                label="Side Dish"
              />
                 <FormControlLabel
                control={<Checkbox value="dessert" color="primary" />}
                label="Dessert"
              />
                 <FormControlLabel
                control={<Checkbox value="drink" color="primary" />}
                label="Drink"
              />
            </Grid>
        
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Publish
          </Button>
        </form>
        </Grid>
      
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item ={12} spacing={1}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

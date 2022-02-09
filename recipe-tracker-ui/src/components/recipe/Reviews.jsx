import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WriteReview from './WriteReview';
import UserReview from './UserReview';
import"./individual.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div id= "reviews"className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><WriteReview /></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <UserReview
              rating = '2'
              reviewText = "Too much garlic for me."
              username = "Jennie"
             />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
            <UserReview
              rating = '4'
              reviewText = "Tasty"
              username = "InternetChef"
             />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
            <UserReview
              rating = '5'
              reviewText = "I make this for my family every week now"
              username = "DigiChefMom"
             />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

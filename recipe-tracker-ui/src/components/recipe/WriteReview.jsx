import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Slider from "./Slider";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function WriteReview() {
    const classes = useStyles();

    const [rating, setRating] = useState(1);
    const [review, setReview] = useState("");

    async function submit(e) {
      e.preventDefault();
      var data = JSON.stringify({
        
          "rating": rating,
          "mainText": review,
          "subText": "no",
          "recommends": true,
          "creationDate": "2021-7-28T16:39:58",
          "recipe": 2 //RECIPE ID HERE
      });

        var config = {
          method: 'post',
          url: 'https://test-digichef-api.fiddlingphotographer.com/recipetracker/reviews/',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };

        axios(config)
        .then(function (response) {
          alert("Submitted!");
        
        })
        .catch(function (error) {
          console.log(error);
        });
       
      }

    return (

    <form className={classes.form} onSubmit = {submit} noValidate>
        <h2>Write Review</h2>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <Slider onChange = {(e) => setRating(e.target.value)}/>
        </Grid>
        <Grid item xs={12}>
            <TextField
            variant="outlined"
            required
            fullWidth
            multiline
            minrows="3"
            name="review"
            label="Write Review"
            id="review"
            onChange = {(e) => setReview(e.target.value)}
            />
        </Grid>
        </Grid>
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled = {!localStorage.getItem('username')}
        >
        Submit
        </Button>
</form>
    );
}
 
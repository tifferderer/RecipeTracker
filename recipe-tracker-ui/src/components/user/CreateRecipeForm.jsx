import React, { useContext, useState } from "react";
import '../../App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import FieldArray from './FieldArray';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    elevation:'0',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'black',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(1, 0, 0, 0),
  },
  root: {
    flexGrow: 1,
  },
  width: {
    width:'75%',
},
  marginBottom: {
    margin: theme.spacing(0, 0, 3, 0),
  }

}));

function handleChange(e, change) {
 change(e.target.value);
  }

  const defaultValues = {
    ingredients: [
      {
        name: "ingredients",
        nestedArray: [{ field1: "Add Ingredient..." }]
      }
    ],
    steps: [
      {
        name: "steps",
        nestedArray: [{ field1: "Add Step..." }]
      }
    ]
  };
  

export default function CreateRecipeForm() {
  const classes = useStyles();
  
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    setValue
  } = useForm({
    defaultValues
  });

  function FormRow() {

    const [stepsList, setStepList] = useState([""]);
    const [ingredientList, setIngredientList] = useState([""]);
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[image, setImage] = useState("");
    const[category, setCategory] = useState("");

  function sendInfo() {

    var data = JSON.stringify({ 
      
        "title": title,
        "description": description,
        "creationDate": "2021-07-27T11:46:00Z",
        "editedDate": null,
        "ingredientList": ["ingredientList"],
        "measurementList": [
            "GRAM"
        ],
        "valueList": [
            100.0
        ],
        "stepList": ["stepsList"],
        "restrictions": [
            "VEGAN",
            "VEGETARIAN",
            "KOSHER"
        ],
        "tags": [
            "roast",
            "italian"
        ],
        "recipeAlbum": [
            "https://storage.googleapis.com/digichef/images/a087c04e659b4920b450d519fe58295b.png",
            "https://storage.googleapis.com/digichef/images/f7bd821df9a6429e8656f24bd21b458a.png",
            "https://storage.googleapis.com/digichef/images/7877e7cf460d4ecabc70aa4e260a75a4.png"
        ],
        "viewCount": 0,
        "user": 20
    
  });

  var config = {
    method: 'post',
    url: 'https://test-digichef-api.fiddlingphotographer.com/recipetracker/recipes/',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    alert("Your recipe is now published!")
  })
  .catch(function (error) {
    console.log(error);
  });
}

  const onSubmit = (data) => console.log("data", data);


    return (
      <React.Fragment>
        <Grid item md={6}>
          <div> <h2 className= "subdued center">Guidelines</h2>
        <ul className="guidelines">
                <li>The goal of DigiChef is to focus on the recipe 
                  and less of the text that most websites use to 
                  fill. Please keep description to less than 200 
                  characters.
                </li>
                <li>Please be aware your username will be published with 
                  the recipe.
                </li>
                </ul>
              </div>
        </Grid>
        <Grid item md={6} className="center">
          <form className={classes.form} onSubmit={handleSubmit(sendInfo)} noValidate>
            <Grid item={10}>
              <TextField
                autoComplete="title"
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                className={classes.marginBottom}
                autoFocus
                value= {title}
                onChange = {(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item={10}>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                maxrows="3"
                 minrows="3"
                id="description"
                label="Description"
                name="description"
                autoComplete="Description"
                className={classes.marginBottom}
                value= {description}
                onChange = {(e) => setDescription( e.target.value)}
              />
            </Grid>
            <Grid item={12} className={classes.marginBottom}>
              <input
               type= "file"
               accept="image/png, image/jpeg"
               variant="outlined"

              />
            </Grid>

            <Grid item={12}  className={classes.marginBottom}>
            <FieldArray
        type="ingredients"
        {...{ control, register, defaultValues, getValues, setValue, errors }}
      />
      <FieldArray
        type="steps"
        {...{ control, register, defaultValues, getValues, setValue, errors }}
      />
</Grid>
          
            <Grid item={6}   className={classes.marginBottom}>
              <FormControlLabel
                control={<Checkbox value="vegan" color="primary" />}
                label="Vegan"
              />
                 <FormControlLabel
                control={<Checkbox value="vegetarian" color="primary" />}
                label="Vegetarian"
              />
                 <FormControlLabel
                control={<Checkbox value="gluten" color="primary" />}
                label="Gluten Free"
              />
                 <FormControlLabel
                control={<Checkbox value="organic" color="primary" />}
                label="Nut-Free"
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

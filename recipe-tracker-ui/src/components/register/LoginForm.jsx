import React, { useContext, useState } from 'react';
import '../../App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'black',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function isEmpty(text) {
  return text === "";
}

export default function Login() {
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("password");

  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);
 
  const classes = useStyles();

  const { register, watch, formState: { errors } } = useForm();


  function handleEmailChange(e) {
    setEmail(e.target.value);
    
    if(typeof e.target.value !== "undefined"){
      const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
      const result = pattern.test(e.target.value);
     setErrEmail(!result);
     setConfirmEmail(!result);
     }
    }
    
  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setErrPassword(isEmpty(e.target.value));
    setConfirmPassword(isEmpty(e.target.value));
  }

  async function verify(e) {
  e.preventDefault();
    var config = {
      method: 'get',
      url: 'https://test-digichef-api.fiddlingphotographer.com/recipetracker/users/?email=' + email,
      headers: { 
        'Content-Type': 'application/json'
      },
    };
    
    await axios(config)
    .then(function (response) {

    if(response.data[0].password === password) { 
      window.localStorage.setItem("username", response.data[0].username);
      window.localStorage.setItem("id", response.data[0].id);
    
     window.location="/user";
    }
    else {
      alert ("Not correct login");
    }
     })
    .catch(function (error) {
      console.log(error);
    });
   
  }

  return (
        <form className={classes.form} noValidate  onSubmit= {verify} action ="/user">
          <Grid container spacing={2}>
          
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="Email Address"
                required
                type="email"
                onKeyUpCapture= {handleEmailChange}
                error={errEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="password"
                onKeyUpCapture = {handlePasswordChange}
                error={errPassword}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled= {confirmEmail | confirmPassword}
             onClick = {verify}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
          {/* <Grid item >
              <Link href="#" variant="body1">
                <a href='#' className="ml" onClick={switchToPassword}>Forgot Password?</a>
              </Link>
            </Grid> */}
            <Grid item>
              <Link href="#" variant="body1">
                Don't have an account? <a href="/createaccount">Create Account</a>
              </Link>
            </Grid>
          </Grid>
        </form>
  );
}
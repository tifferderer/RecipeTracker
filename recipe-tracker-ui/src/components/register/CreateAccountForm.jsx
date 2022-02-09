import React, {  useState} from "react";
import '../../App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
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

export default function SignUp() {
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("password");
  const [cpassword, setCpassword] = useState("cpassword");
  const [username, setUsername] = useState("username");
  const [firstname, setFirstname] = useState("firstname");
  const [lastname, setLastname] = useState("lastname");

  const [errUsername, setErrUsername] = useState(true);
  const [errFirstname, setErrFirstname] = useState(true);
  const [errLastname, setErrLastname] = useState(true);
  const [errEmail, setErrEmail] = useState(true);
  const [errPassword, setErrPassword] = useState(true);
  const [errCpassword, setErrCpassword] = useState(true);
  const classes = useStyles();

  function handleEmailChange(e) {
    setEmail(e.target.value);
    
    if(typeof e.target.value !== "undefined"){
      const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
      const result = pattern.test(e.target.value);
     setErrEmail(!result);
     }
    }

    function handlePasswordChange(e) {
      setPassword(e.target.value);
      setErrPassword(isEmpty(e.target.value));
    }

    function handleFirstnameChange(e) {
      setFirstname(e.target.value);
      setErrFirstname(isEmpty(e.target.value));
    }

    function handleLastnameChange(e) {
      setLastname(e.target.value);
      setErrLastname(isEmpty(e.target.value));
    }

    function handleMatchingPasswordChange(e) {
      setCpassword(e.target.value);
      setErrCpassword(e.target.value !== password);
    }

    function handleUsernameChange(e) {
      setUsername(e.target.value);
      setErrUsername(isEmpty(e.target.value));
    }

    async function handleSubmit(e) {
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
 
      if(response.data.length !== 0) {
       alert("The email is in use already");
      
      }
      else {
        submit();
      }
       })
      .catch(function (error) {
        console.log(error);
      });
     
    }

    function submit(e) {
     
      var data = JSON.stringify({
        "username": username,
        "firstName": firstname,
        "middleName": "Middle",
        "lastName": lastname,
        "email": email,
        "password": password,
        "country": "US",
        "image": "https://storage.googleapis.com/digichef/images/76d671b029d442588608816f032e826b.png",
        "creationDate": "2021-7-28T16:39:58"
      });

        var config = {
          method: 'post',
          url: 'https://test-digichef-api.fiddlingphotographer.com/recipetracker/users/',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };

        axios(config)
        .then(function (response) {
          localStorage.setItem('username', username);
          localStorage.setItem('id', response.data.id);
         
         window.location = "/user"
        
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    const { register, watch, formState: { errors } } = useForm();

  return (
        <form className={classes.form} onSubmit={(handleSubmit)} action="/user">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                onKeyUpCapture = {handleUsernameChange}
                error={errUsername}
                {...register("username")}
              />
            </Grid>  
             <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="Email Address"
                onKeyUpCapture = {handleEmailChange}
                error={errEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="firstname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstname"
                label="First Name"
                autoFocus
                onKeyUpCapture = {handleFirstnameChange}
                error={errFirstname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="lastname"
                name="lastname"
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                autoFocus
                onKeyUpCapture = {handleLastnameChange}
                error={errLastname}
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
                {...register("password")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cpassword"
                label="Confirm Password"
                type="password"
                id="cpassword"
                autoComplete="cpassword"
                onKeyUpCapture = {handleMatchingPasswordChange}
                error={errCpassword}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            className={classes.submit}
            disabled= {errPassword | errEmail | errUsername | errCpassword| errFirstname| errLastname}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? <a href="/signin">
          Sign in
        </a>
              </Link>
            </Grid>
          </Grid>
        </form>
  );
}
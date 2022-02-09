import React, { useContext, useState } from 'react';
import '../../App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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

export default function Password() {
  const [email, setEmail] = useState("email");
  const [errEmail, setErrEmail] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState(true);
 
  const classes = useStyles();

  function handleEmailChange(e) {
    setEmail(e.target.value);
    
    if(typeof e.target.value !== "undefined"){
      const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
      const result = pattern.test(e.target.value);
     setErrEmail(!result);
     setConfirmEmail(!result);
     }
    }

  return (
        <form className={classes.form}>
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
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled= {confirmEmail}
          >
            Reset Password
          </Button>
        </form>
  );
}
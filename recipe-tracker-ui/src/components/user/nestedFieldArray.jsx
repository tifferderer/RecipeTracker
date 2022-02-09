import React from "react";
import { useFieldArray } from "react-hook-form";
import './InputStyles.css';
import Button from '@material-ui/core/Button';
import '../../App.css';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(0, 0, 0, 2),
  },
  marginBottom: {  
    margin: theme.spacing(0, 0, 2, 0),
  },
}));


export default (props) => {
  const classes = useStyles();
  const { nestIndex, control, register, type } = props;
  const { fields, remove, append } = useFieldArray({
    control,
    // Hardcoded since we have two separate nested arrays,
    // this lets us be more clear with labels and the types
    name: `${type}.0.nestedArray`
  });
  return (
    <div id="lists">
      {fields.map((item, k) => {
        return (
          <div key={item.id}>
            <input
              {...register(`${type}.0.nestedArray.${k}.field1`, {
                required: true
              })}
              key={item.id}
              placeholder={`Put ${type} text here`}
              defaultValue={item.value}
              label={type}
              variant="outlined"
              className= "subdued"
            />

            <Button 
              className={classes.submit}
            type="button" 
            variant="contained"
            color="default"
            onClick={() => remove(k)}>
             -
            </Button>
          </div>
        );
      })}

      <Button
        type="button"
        className= {classes.marginBottom}
        variant="contained"
        color="primary"
        onClick={() =>
          append({
            field1: ""
          })
        }
      >
        Add +
      </Button>
    </div>
  );
};


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function GroupedSelect() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Sort By</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>Sort</em>
          </MenuItem>
          <MenuItem value={1}>Recent</MenuItem>
          <MenuItem value={2}>Most Viewed</MenuItem>
          <MenuItem value={3}>Most Popular</MenuItem>
          <MenuItem value={4}>Random</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Filter By</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>Filter</em>
          </MenuItem>
          <MenuItem value={1}>Main Dish</MenuItem>
          <MenuItem value={2}>Side Dish</MenuItem>
          <MenuItem value={3}>Dessert</MenuItem>
          <MenuItem value={4}>Drink</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
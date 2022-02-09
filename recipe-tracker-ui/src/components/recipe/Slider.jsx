import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import "./individual.css";



function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider() {

  return (
    <div>
      <Typography id="slider" gutterBottom>
        Rating
      </Typography>
      <Slider
        defaultValue={1}
        getAriaValueText={parseInt(valuetext)}
        aria-labelledby="slider"
        step={1}
        marks
        min={1}
        max={5}
        valueLabelDisplay="on"
      />
    </div>
  );
}

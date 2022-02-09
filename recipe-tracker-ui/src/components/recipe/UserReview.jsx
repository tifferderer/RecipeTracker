import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function UserReview(props) {
  const [value, setValue] = React.useState(props.rating);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={value} readOnly /> 
      </Box>
      <div>
          <p>"{props.reviewText}"</p>

          <p>-{props.username}</p>
      </div>
    </div>
  
  );
}
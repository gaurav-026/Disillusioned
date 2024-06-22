import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: 'Strongly Disagree',
  },
  {
    value: 25,
    label: 'Disagree',
  },
  {
    value: 50,
    label: 'Neutral',
  },
  {
    value: 75,
    label: 'Agree',
  },
  {
    value: 100,
    label: 'Strongly Agree',
  },
];

function valuetext(value) {
  return `${value}`;
}

const DiscreteSliderMarks = ({ onChange, value}) => {
    return (
      <Box sx={{ width: '70vw' , margin:"auto"}}>
        <Slider
          aria-label="Custom marks"
          defaultValue={0}
          value={value}
          getAriaValueText={valuetext}
          step={25}
          valueLabelDisplay="auto"
          marks={marks}
          onChangeCommitted={(e, value) => onChange(value)}
          sx={{
            '& .MuiSlider-thumb': {
              height: 24,
              width: 24,
            },
            '& .MuiSlider-track': {
              height: 8,
            },
            '& .MuiSlider-rail': {
              height: 8,
            },
            '@media (max-width: 750px)': {
              '& .MuiSlider-markLabel': {
                fontSize: '9px',
                whiteSpace: 'nowrap',
              },
            }
          }}
        />
      </Box>
    );
  };
  
  export default DiscreteSliderMarks;
  

import React from 'react';
import Slider, { SliderThumb } from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip'; 
import { styled } from '@mui/material/styles'; 
function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const CustomSlider = styled(Slider)({
  width: 136, 
  '& .MuiSlider-thumb': {
    width: 12, 
    height: 12, 
    marginTop: -6, 
  },
  '& .MuiSlider-track': {
    height: 4, 
  },
  '& .MuiSlider-rail': {
    height: 4, 
  },
});

const Component = () => {
  return (
    <div>
      <Box sx={{ width: 300 ,marginLeft:'21px'}}>
        <Typography gutterBottom sx={{fontSize:14,fontFamily:'Poppins'}}>Jan</Typography>
        <CustomSlider aria-label="release labels slider" defaultValue={60} valueLabelDisplay="on" />
        <Box sx={{ m: 3 }} />
        <Typography gutterBottom sx={{fontSize:14,fontFamily:'Poppins' }}>Feb</Typography>
        <CustomSlider
          valueLabelDisplay="auto"
          slots={{
            valueLabel: ValueLabelComponent,
          }}
          aria-label="xml slider"
          defaultValue={20}
        />
        <Box sx={{ m: 3 }} />
        <Typography gutterBottom sx={{fontSize:14,fontFamily:'Poppins' }}>Mar</Typography>
        <CustomSlider aria-label="another slider" defaultValue={40} valueLabelDisplay="on" />
      </Box>
    </div>
  );
};

export default Component;

import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import './sliderCountry.scss';

const PrettoSlider = styled(Slider)({
  color: '#34342E',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#6E5E64',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

function SliderCountry({ rangeValue, onSliderChange, count }) {
  const marks = [
    {
      value: 0,
      label: '0',
    },

    {
      value: count,
      label: count,
    },
  ];

  const handleChangeRange = (event) => {
    onSliderChange(event.target.value);
  };

  return (
    <div className="sliderCountry">
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={rangeValue}
        value={rangeValue}
        marks={marks}
        min={0}
        max={count}
        onChange={handleChangeRange}
      />

    </div>
  );
}

SliderCountry.propTypes = {
  rangeValue: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onSliderChange: PropTypes.func.isRequired,
};

export default React.memo(SliderCountry);

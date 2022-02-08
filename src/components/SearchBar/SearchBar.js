import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './searchBar.scss';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function SearchBar({ onCountrySubmit }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === '') {
      return;
    }
    onCountrySubmit(value);
    setValue('');
  };

  return (
    <div className="search-bar">
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >

        <TextField
          id="outlined-basic"
          label="Enter Your Country"
          color="primary"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          sx={{ color: 'text.primary' }}
        />

      </Box>
    </div>
  );
}

SearchBar.propTypes = {
  onCountrySubmit: PropTypes.func.isRequired,
};
export default React.memo(SearchBar);

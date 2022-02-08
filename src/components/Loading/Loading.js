import { Box } from '@mui/material';
import React from 'react';

function Loading() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ fontSize: 34, mt: 1 }}
    >
      Loading...
    </Box>
  );
}

Loading.propTypes = {};

export default React.memo(Loading);

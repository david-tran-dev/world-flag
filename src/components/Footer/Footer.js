import './footer.scss';
import React from 'react';
import { Typography } from '@mui/material';

function Footer() {
  return (
    <div className="footer">
      <Typography variant="caption">Copyright 2022 - Word Flag</Typography>
    </div>

  );
}

Footer.propTypes = {};

export default React.memo(Footer);

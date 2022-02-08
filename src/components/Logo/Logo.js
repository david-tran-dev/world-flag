import React from 'react';
import './logo.scss';

function Logo() {
  return (
    <div className="logo">
      <img src="./img/logo.png" alt="logo" />
    </div>
  );
}

export default React.memo(Logo);

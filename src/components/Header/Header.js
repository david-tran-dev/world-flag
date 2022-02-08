import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

function Header({ regions }) {
  return (
    <div className="header">
      <Logo />
      <NavBar />
      <Navigation regions={regions} />
    </div>
  );
}

Header.propTypes = {
  regions: PropTypes.array.isRequired,
};

export default React.memo(Header);

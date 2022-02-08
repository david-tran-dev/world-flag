import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './navBar.scss';

function Navbar({ className, ...rest }) {
  return (
    <div className="navBar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'nav-active' : '')}
        {...rest}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'nav-active' : '')}
        {...rest}
      >
        A propos
      </NavLink>
    </div>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
};
Navbar.defaultProps = {
  className: '',
};
export default React.memo(Navbar);

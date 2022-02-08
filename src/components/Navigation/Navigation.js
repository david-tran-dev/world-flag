import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

function Navigation({ regions }) {
  return (
    <div className="navigation">
      {regions.map(({ label, route }) => (
        <NavLink
          key={route}
          to={route}
          className={({ isActive }) => (isActive ? 'nav-active' : '')}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}

Navigation.propTypes = {
  regions: PropTypes.array.isRequired,
};

export default React.memo(Navigation);

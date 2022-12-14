import React from 'react';
import { Link } from 'react-router-dom';

import SearchInput from '../SearchInput/SearchInput';

import './NavbarView.css';

import PropTypes from 'prop-types';

export default function NavbarView({ updateQuery, resetQuerry }) {
  return (
    <div className="navbar">
      <Link className="navbar__item" to={'/'}>
        Gallery
      </Link>
      <SearchInput updateQuery={updateQuery} resetQuerry={resetQuerry} />
    </div>
  );
}

NavbarView.propTypes = {
  updateQuery: PropTypes.func,
  resetQuerry: PropTypes.func
};

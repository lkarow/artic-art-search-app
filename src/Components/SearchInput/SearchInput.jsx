import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';

import './SearchInput.css';

import PropTypes from 'prop-types';

export default function SearchInput({ updateQuery, resetQuerry }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    updateQuery(searchQuery);
    navigate('/');
  };

  const handleReset = (e) => {
    e.preventDefault();
    setSearchQuery('');
    resetQuerry();
  };

  return (
    <form className="search-form">
      <div className="search-input__wrapper">
        <FaSearch className="search-icon" onClick={handleSearch} />
        <input
          className="search-input"
          type="text"
          placeholder="Search for artwork"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
      </div>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      <button className="search-button reset-button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

SearchInput.propTypes = {
  updateQuery: PropTypes.func,
  resetQuerry: PropTypes.func
};

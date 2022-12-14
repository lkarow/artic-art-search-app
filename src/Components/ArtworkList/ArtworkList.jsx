import React from 'react';

import ArtworkCard from '../ArtworkCard/ArtworkCard';

import './ArtworkList.css';

import PropTypes from 'prop-types';

export default function ArtworkList({ artworks }) {
  return (
    <div className="artwork-list">
      {artworks && artworks.map((artwork) => <ArtworkCard key={artwork.id} artwork={artwork} />)}
    </div>
  );
}

ArtworkList.propTypes = {
  artworks: PropTypes.arrayOf(PropTypes.object)
};

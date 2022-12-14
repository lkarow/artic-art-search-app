import React from 'react';
import { Link } from 'react-router-dom';

import './ArtworkCard.css';

import PropTypes from 'prop-types';

export default function ArtworkCard({ artwork }) {
  const artworkImageURL = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg`;
  return (
    <div className="artwork-card">
      <Link to={`artwork/${artwork.id}`}>
        <img
          className="artwork-card__image"
          src={artworkImageURL}
          alt={artwork.alt_text || artwork.title}
        />
        <p className="artwork-card__title">{artwork.title}</p>
        <p>{artwork.artist_titles}</p>
        <p>{artwork.date_display}</p>
      </Link>
    </div>
  );
}

ArtworkCard.propTypes = {
  artwork: PropTypes.object
};

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import { getArtwork } from '../../api/artwork';

import './ArtworkView.css';

export default function ArtworkView() {
  const navigate = useNavigate();
  const { artworkId } = useParams();
  const [artwork, setArtwork] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!artworkId) return;
    setLoading(true);
    getArtwork(artworkId).then((response) => {
      setArtwork(response);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {artwork ? (
            <div className="artwork-view">
              <img
                className="artwork-view__image"
                src={`https://www.artic.edu/iiif/2/${artwork.data.image_id}/full/843,/0/default.jpg`}
                alt={artwork.data.alt_text || artwork.data.title}
              />
              <div className="artwork-view__description">
                <h1 className="artwork-view__title">{artwork.data.title}</h1>
                <p className="artwork-view__artist">{artwork.data.artist_titles}</p>
                <p className="artwork-view__class">{artwork.data.classification_title}</p>
                <p className="artwork-view__date">{artwork.data.date_display}</p>
                {artwork.data.exhibition_history && (
                  <p className="artwork-view__exhibition-history">
                    Exhibition history: {artwork.data.exhibition_history}
                  </p>
                )}
                <button className="back-button" onClick={() => navigate(-1)}>
                  Back
                </button>
              </div>
            </div>
          ) : (
            <h1>Artwork not found</h1>
          )}
        </>
      )}
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import ArtworkList from './Components/ArtworkList/ArtworkList';
import ArtworkView from './Components/ArtworkView/ArtworkView';
import FooterView from './Components/FooterView/FooterView';
import GalleryPagination from './Components/GalleryPagination/GalleryPagination';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';
import NavbarView from './Components/NavbarView/NavbarView';

import { getAllArtworks, searchForArtworkIds, getArtworkFromIds } from './api/artwork';

import './App.css';

export default function App() {
  const [artworks, setArtworks] = useState();
  const [searchInput, setSearchInput] = useState();

  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState();

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setLoading(true);
    getAllArtworks(currentPage).then((response) => {
      setLastPage(response.pagination.total_pages);
      setArtworks(response.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!searchInput) {
      setLoading(true);
      getAllArtworks(currentPage).then((response) => {
        setLastPage(response.pagination.total_pages);
        setArtworks(response.data);
        setLoading(false);
      });
    }

    if (searchInput) {
      setLoading(true);
      searchForArtworkIds(searchInput, currentPage).then((response) => {
        setLastPage(response.pagination.total_pages);
        let artIds = response.data.map((result) => result.id);
        getArtworkFromIds(artIds).then((response) => {
          setArtworks(response.data);
        });
        setLoading(false);
      });
    }
  }, [currentPage, searchInput]);

  const updateQuery = (input) => {
    setCurrentPage(1);
    setSearchInput(input);
  };

  const resetQuerry = () => {
    setCurrentPage(1);
    setSearchInput('');
  };

  return (
    <div className="app">
      <NavbarView updateQuery={updateQuery} resetQuerry={resetQuerry} />
      <Routes>
        <Route
          path="/artic-art-search-app"
          element={
            loading ? (
              <LoadingSpinner />
            ) : (
              <>
                <ArtworkList artworks={artworks} />
                <GalleryPagination
                  paginate={paginate}
                  currentPage={currentPage}
                  lastPage={lastPage}
                />
              </>
            )
          }
        />
        <Route path="/artic-art-search-app/artwork/:artworkId" element={<ArtworkView />} />
      </Routes>
      <FooterView />
    </div>
  );
}

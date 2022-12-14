import React, { useState, useEffect } from 'react';

import './GalleryPagination.css';

import PropTypes from 'prop-types';

export default function GalleryPagination({ paginate, currentPage, lastPage }) {
  const [smallDevice, setSmallDevice] = useState(window.innerWidth < 400);

  const updateMediaSize = () => {
    setSmallDevice(window.innerWidth < 400);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMediaSize);
    return () => window.removeEventListener('resize', updateMediaSize);
  });

  let items = [];
  for (let number = 1; number <= lastPage; number++) {
    items.push(
      <div
        className={`pagination__item ${currentPage === number ? 'pagination__active' : null}`}
        key={number}
        onClick={() => paginate(number)}>
        {number}
      </div>
    );
  }

  return (
    <>
      {!smallDevice ? (
        // Pagination for big devices
        <div className="gallery-pagination">
          {currentPage === 1 && (
            <div className="pagination">
              {items.slice(0, 5)}
              <div
                className="pagination__item pagination__next"
                onClick={() => paginate(currentPage + 1)}>
                &#62;
              </div>
              <div className="pagination__item pagination__next" onClick={() => paginate(lastPage)}>
                &#62;&#62;
              </div>
            </div>
          )}

          {currentPage >= 2 && currentPage < 4 && (
            <div className="pagination">
              <div
                className="pagination__item pagination__prev"
                onClick={() => paginate(currentPage - 1)}>
                &#60;
              </div>
              {items.slice(0, 5)}
              <div
                className="pagination__item pagination__next"
                onClick={() => paginate(currentPage + 1)}>
                &#62;
              </div>
              <div className="pagination__item pagination__next" onClick={() => paginate(lastPage)}>
                &#62;&#62;
              </div>
            </div>
          )}

          {currentPage !== 1 && currentPage !== lastPage && currentPage >= 4 && (
            <div className="pagination">
              <div className="pagination__item pagination__first" onClick={() => paginate(1)}>
                &#60;&#60;
              </div>
              <div
                className="pagination__item pagination__prev"
                onClick={() => paginate(currentPage - 1)}>
                &#60;
              </div>
              {items.slice(currentPage - 3, currentPage + 2)}
              <div
                className="pagination__item pagination__next"
                onClick={() => paginate(currentPage + 1)}>
                &#62;
              </div>
              <div className="pagination__item pagination__next" onClick={() => paginate(lastPage)}>
                &#62;&#62;
              </div>
            </div>
          )}

          {currentPage === lastPage && currentPage !== 1 && currentPage >= 4 && (
            <div className="pagination">
              <div className="pagination__item pagination__first" onClick={() => paginate(1)}>
                &#60;&#60;
              </div>
              <div
                className="pagination__item pagination__prev"
                onClick={() => paginate(currentPage - 1)}>
                &#60;
              </div>
              {items.slice(-5)}
            </div>
          )}
        </div>
      ) : (
        // Pagination for small devices
        <div className="gallery-pagination">
          {currentPage === 1 && (
            <div className="pagination">
              {items.slice(0, 3)}
              <div
                className="pagination__item pagination__next"
                onClick={() => paginate(currentPage + 1)}>
                &#62;
              </div>
              <div className="pagination__item pagination__next" onClick={() => paginate(lastPage)}>
                &#62;&#62;
              </div>
            </div>
          )}

          {currentPage !== 1 && currentPage !== lastPage && currentPage >= 2 && (
            <div className="pagination">
              <div className="pagination__item pagination__first" onClick={() => paginate(1)}>
                &#60;&#60;
              </div>
              <div
                className="pagination__item pagination__prev"
                onClick={() => paginate(currentPage - 1)}>
                &#60;
              </div>
              {items.slice(currentPage - 2, currentPage + 1)}
              <div
                className="pagination__item pagination__next"
                onClick={() => paginate(currentPage + 1)}>
                &#62;
              </div>
              <div className="pagination__item pagination__next" onClick={() => paginate(lastPage)}>
                &#62;&#62;
              </div>
            </div>
          )}

          {currentPage === lastPage && currentPage !== 1 && (
            <div className="pagination">
              <div className="pagination__item pagination__first" onClick={() => paginate(1)}>
                &#60;&#60;
              </div>
              <div
                className="pagination__item pagination__prev"
                onClick={() => paginate(currentPage - 1)}>
                &#60;
              </div>
              {items.slice(-3)}
            </div>
          )}
        </div>
      )}
    </>
  );
}

GalleryPagination.propTypes = {
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
  lastPage: PropTypes.number
};

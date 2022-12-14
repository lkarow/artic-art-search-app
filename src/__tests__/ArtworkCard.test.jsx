import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ArtworkCard from '../Components/ArtworkCard/ArtworkCard';

describe('<ArtworkCard />', () => {
  test('render image, title, artist, date of an artwork', () => {
    render(
      <BrowserRouter>
        <ArtworkCard
          artwork={{
            id: 1,
            image_id: 1,
            title: 'test-title',
            artist_titles: 'test-artist',
            alt_text: 'test-alt',
            date_display: '1000'
          }}
        />
      </BrowserRouter>
    );
    expect(screen.getByAltText('test-alt')).toBeInTheDocument();
    expect(screen.getByText('test-title')).toBeInTheDocument();
    expect(screen.getByText('test-artist')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();
  });

  test('render image with right src', () => {
    render(
      <BrowserRouter>
        <ArtworkCard
          artwork={{
            id: 1,
            image_id: 1,
            title: 'test-title',
            artist_titles: 'test-artist',
            alt_text: 'test-alt',
            date_display: '1000'
          }}
        />
      </BrowserRouter>
    );
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://www.artic.edu/iiif/2/1/full/200,/0/default.jpg');
  });
});

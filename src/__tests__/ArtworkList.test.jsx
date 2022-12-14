import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ArtworkList from '../Components/ArtworkList/ArtworkList';

describe('<ArtworkList />', () => {
  test('render artwork cards', () => {
    render(
      <BrowserRouter>
        <ArtworkList
          artworks={[
            {
              id: 1,
              image_id: 1,
              title: 'test-title',
              artist_titles: 'test-artist',
              alt_text: 'test-alt',
              date_display: '1000'
            },
            {
              id: 2,
              image_id: 2,
              title: 'test-title2',
              artist_titles: 'test-artist2',
              alt_text: 'test-alt2',
              date_display: '2000'
            }
          ]}
        />
      </BrowserRouter>
    );
    expect(screen.getByText('test-title')).toBeInTheDocument();
    expect(screen.getByText('test-title2')).toBeInTheDocument();
  });
});

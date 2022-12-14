import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavbarView from '../Components/NavbarView/NavbarView';

describe('<NavbarView />', () => {
  test('display link to gallery with right path', () => {
    render(
      <BrowserRouter>
        <NavbarView />
      </BrowserRouter>
    );
    expect(screen.getByText('Gallery')).toBeInTheDocument();
    expect(screen.getByText('Gallery')).toHaveAttribute('href', '/artic-art-search-app');
  });

  test('renders <SearchInput />', () => {
    render(
      <BrowserRouter>
        <NavbarView />
      </BrowserRouter>
    );
    expect(screen.getByPlaceholderText('Search for artwork')).toBeInTheDocument();
  });
});

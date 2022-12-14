import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SearchInput from '../Components/SearchInput/SearchInput';

describe('<SearchInput />', () => {
  test('display input, search button, reset button', () => {
    render(
      <BrowserRouter>
        <SearchInput />
      </BrowserRouter>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
  });
});

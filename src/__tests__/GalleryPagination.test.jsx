import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GalleryPagination from '../Components/GalleryPagination/GalleryPagination';

describe('<GalleryPagination />', () => {
  test('display pages 1 to 5, ... and arrows for next and last page if on first page', () => {
    render(
      <BrowserRouter>
        <GalleryPagination paginate={() => {}} currentPage={1} lastPage={10} />
      </BrowserRouter>
    );
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('>')).toBeInTheDocument();
    expect(screen.getByText('>>')).toBeInTheDocument();
  });

  test('display no arrows for previous and first page if on first page', () => {
    render(
      <BrowserRouter>
        <GalleryPagination paginate={() => {}} currentPage={1} lastPage={10} />
      </BrowserRouter>
    );
    expect(screen.queryByText('<')).not.toBeInTheDocument();
    expect(screen.queryByText('<<')).not.toBeInTheDocument();
  });

  test('display pages 1 to 5, ... and arrows for previous and first page if on last page', () => {
    render(
      <BrowserRouter>
        <GalleryPagination paginate={() => {}} currentPage={10} lastPage={10} />
      </BrowserRouter>
    );
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('9')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('<')).toBeInTheDocument();
    expect(screen.getByText('<<')).toBeInTheDocument();
  });

  test('display no arrows for next and last page if on last page', () => {
    render(
      <BrowserRouter>
        <GalleryPagination paginate={() => {}} currentPage={10} lastPage={10} />
      </BrowserRouter>
    );
    expect(screen.queryByText('>')).not.toBeInTheDocument();
    expect(screen.queryByText('>>')).not.toBeInTheDocument();
  });

  test('display pages 3 to 7, ... and arrows for next/previous and first/last page if on page in the middle', () => {
    render(
      <BrowserRouter>
        <GalleryPagination paginate={() => {}} currentPage={5} lastPage={10} />
      </BrowserRouter>
    );
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('<')).toBeInTheDocument();
    expect(screen.getByText('<<')).toBeInTheDocument();
    expect(screen.getByText('>')).toBeInTheDocument();
    expect(screen.getByText('>>')).toBeInTheDocument();
  });
});

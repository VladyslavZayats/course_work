import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CatCard from '../CatCard';

describe('CatCard', () => {
  it('renders the cat code and description', () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <CatCard code={404} description="Not Found" />
      </MemoryRouter>
    );

    expect(getByText('HTTP 404')).toBeInTheDocument();
    expect(getByText('Not Found')).toBeInTheDocument();
    expect(getByAltText('HTTP 404')).toHaveAttribute('src', 'https://http.cat/404');
  });

  it('links to the correct URL', () => {
    const { container } = render(
      <MemoryRouter>
        <CatCard code={200} description="OK" />
      </MemoryRouter>
    );

    const link = container.querySelector('a');
    expect(link).toHaveAttribute('href', '/cat/200');
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import PropertyCard from '../components/PropertyCard';
import { MemoryRouter } from 'react-router-dom';

const sampleProperty = {
  id: '1',
  type: 'House',
  price: 250000,
  bedrooms: 3,
  picture: '/images/sample.jpg'
};

describe('PropertyCard Component', () => {
  test('renders property details correctly', () => {
    render(
      <PropertyCard property={sampleProperty} addFavourite={() => {}} favourites={[]} />,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByText(/House/i)).toBeInTheDocument();
    expect(screen.getByText(/£250,000/i)).toBeInTheDocument();
    expect(screen.getByText(/3 bedrooms/i)).toBeInTheDocument();
  });

  test('calls addFavourite when heart icon is clicked', () => {
    const addFav = jest.fn();
    render(
      <PropertyCard property={sampleProperty} addFavourite={addFav} favourites={[]} />,
      { wrapper: MemoryRouter }
    );

    // Updated: click using data-testid
    fireEvent.click(screen.getByTestId('favourite-icon'));

    expect(addFav).toHaveBeenCalledWith(sampleProperty);
  });
});

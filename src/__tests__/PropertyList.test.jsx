import { render, screen } from '@testing-library/react';
import PropertyList from '../components/PropertyList';
import { MemoryRouter } from 'react-router-dom';

const properties = [
  { id: '1', type: 'House', price: 200000, bedrooms: 2, picture: '/img1.jpg' },
  { id: '2', type: 'Flat', price: 150000, bedrooms: 1, picture: '/img2.jpg' },
];

describe('PropertyList Component', () => {
  test('renders correct number of PropertyCard components', () => {
    render(<PropertyList properties={properties} addFavourite={() => {}} favourites={[]} />, { wrapper: MemoryRouter });
    expect(screen.getAllByText(/View Details/i).length).toBe(2);
  });
});

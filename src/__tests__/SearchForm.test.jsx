import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '../components/SearchForm';

describe('SearchForm Component', () => {
  test('renders all input fields and button', () => {
    render(<SearchForm onSearch={() => {}} />);
    expect(screen.getByPlaceholderText(/Min Price/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Max Price/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Min Bedrooms/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Max Bedrooms/i)).toBeInTheDocument();
    expect(screen.getByText(/Search Properties/i)).toBeInTheDocument();
  });

  test('calls onSearch with correct min and max price', () => {
    const mockSearch = jest.fn();
    render(<SearchForm onSearch={mockSearch} />);
    
    fireEvent.change(screen.getByPlaceholderText(/Min Price/i), { target: { value: '1000' } });
    fireEvent.change(screen.getByPlaceholderText(/Max Price/i), { target: { value: '2000' } });
    fireEvent.click(screen.getByText(/Search Properties/i));
    
    expect(mockSearch).toHaveBeenCalledWith(expect.objectContaining({
      minPrice: 1000,
      maxPrice: 2000
    }));
  });

  test('selecting type updates value', () => {
    const mockSearch = jest.fn();
    render(<SearchForm onSearch={mockSearch} />);
    
    // Open the custom dropdown
    fireEvent.click(screen.getByText('Any Type'));
    // Click "House" option
    fireEvent.click(screen.getByText('House'));
    fireEvent.click(screen.getByText(/Search Properties/i));
    
    expect(mockSearch).toHaveBeenCalledWith(expect.objectContaining({
      type: 'House'
    }));
  });

  test('min and max bedrooms input works', () => {
    const mockSearch = jest.fn();
    render(<SearchForm onSearch={mockSearch} />);
    
    fireEvent.change(screen.getByPlaceholderText(/Min Bedrooms/i), { target: { value: '2' } });
    fireEvent.change(screen.getByPlaceholderText(/Max Bedrooms/i), { target: { value: '4' } });
    fireEvent.click(screen.getByText(/Search Properties/i));
    
    expect(mockSearch).toHaveBeenCalledWith(expect.objectContaining({ minBeds: 2, maxBeds: 4 }));
  });
});

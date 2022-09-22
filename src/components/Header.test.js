import { render, screen } from '@testing-library/react';
import Header from './Header';

it('should render the Header component', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
});

// date should not be null

it('should return a valid date', () => {
    render(<Header />);
    const date = screen.getByTestId('date');
    expect(date).not.toBeNull();
});
    

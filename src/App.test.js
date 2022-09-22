import { render, screen } from '@testing-library/react';
import App from './App';
import MovieCard from './components/MovieCard';

it('should render the MovieCard component', () => {
  render(<MovieCard />);
  const movieCard = screen.getByTestId('movie-card');
  expect(movieCard).toBeInTheDocument();
});

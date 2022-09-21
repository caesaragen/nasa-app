import React from 'react';
import { useEffect, useState } from 'react';
import { MOVIE_URL, IMG_PATH } from '../config/config';
import MovieCard from './MovieCard';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(MOVIE_URL)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
                console.log(data);
            });
    }, []);
  return (
      <div class="flex flex-wrap bg-gray-200">
        
          {movies && movies.map((movie) => (
              <div class="  flex-wrap px-4 py-2 w-1/5 h-full">
              <MovieCard
                  key={movie.id}
                  poster_path={movie.poster_path}
                  overview={movie.overview}
                  popularity={movie.popularity}
                  release_date={movie.release_date}
                  />
                </div>
            ))}
      </div>
  )
}

export default Movies
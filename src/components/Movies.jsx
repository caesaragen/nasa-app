import React from 'react';
import { useEffect, useState } from 'react';
import { MOVIE_URL } from '../config/config';
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
      <div class="flex items-stretch flex-wrap justify-around h-full">
        
          {movies && movies.map((movie) => (
              <div class="block bg-white overflow-hidden border-2 px-4 p-[20px] lg:w-[18%] mr-5 mb-5 rounded my-1 md:w-1/3 lg:my-4 ">
              <MovieCard
                      key={movie.id}
                      title={movie.title}
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
import React from 'react';
import { useEffect, useState } from 'react';
import Header from './Header';
import { MOVIE_URL } from '../config/config';
import MovieCard from './MovieCard';
import { Navigate, Link } from 'react-router-dom';


const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(MOVIE_URL);
            const data = await response.json();
            setMovies(data.results);
        }
        fetchData();
    }, []);

    const goToDetails = (movieInfo) => {
        console.log(movieInfo);
        localStorage.setItem('movieInfo', JSON.stringify(movieInfo));
        return <Navigate to={`/movie/${movieInfo.id}`} />
    }


    return (
        <div>
            <Header />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 h-full">
                {movies && movies.map((movie) => (
                    <div className="bg-white overflow-hidden border-2 px-4 p-[20px] mr-5 mb-5 rounded my-1  lg:my-4 " onClick={() => goToDetails(movie)}>
                        <Link to={`/movie/${movie.id}`}>
                            <MovieCard
                                key={movie.id}
                                title={movie.title}
                                poster_path={movie.poster_path}
                                overview={movie.overview}
                                popularity={movie.popularity}
                                release_date={movie.release_date}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Movies
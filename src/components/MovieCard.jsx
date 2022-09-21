import React from 'react';
import { IMG_PATH } from '../config/config';

const MovieCard = ({ poster_path, overview, popularity, release_date } ) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={IMG_PATH + poster_path} alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Description:</div>
          <p className="text-gray-700 text-base">
            {overview}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Popularity: {popularity}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Release Date: {release_date}</span>
        </div>
    </div>
    )
}

export default MovieCard
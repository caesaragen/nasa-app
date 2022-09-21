import React from 'react';
import { IMG_PATH } from '../config/config';
import defaultImage from '../assets/images/gallery.png';


const MovieCard = ({ poster_path, overview, popularity, release_date, title } ) => {
  return (
    <div className="rounded overflow-hidden cursor-pointer">
      <img className="w-full" src={IMG_PATH + poster_path} alt="Sunset in the mountains" onError={(e) => { e.target.onerror = null; e.target.src = defaultImage }} />
      <div className="px-3 py-4">
        <div className="font-bold text-xl mb-2 text-[#FFB703] text-center hover:underline cursor-pointer">{title}</div>
          <div className="font-bold text-xl mb-2">Description:</div>
        <p className="text-gray-700 text-base hover:underline hover:decoration-[#FFB703]">
            {overview}
          </p>
        </div>
        <div className="px-3 pt-4 pb-2">
        <span className="inline-block  px-1 py-1 text-sm  text-gray-700  mb-2 hover:underline hover:decoration-[#FFB703]">Popularity:<span className='text-[#FFB703] ml-2'>{popularity}</span></span>
        <span className="inline-block px-1 py-1 text-sm  text-gray-700  mb-2 hover:underline hover:decoration-[#FFB703]">Release Date:<span className='text-[#FFB703] ml-2'> {release_date}</span></span>
        </div>
    </div>
    )
}

export default MovieCard
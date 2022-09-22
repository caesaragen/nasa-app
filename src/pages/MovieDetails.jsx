import React, { useEffect, useState } from 'react';
import { IMG_PATH } from '../config/config';
import defaultImage from '../assets/images/gallery.png';

const MovieDetails = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('movieInfo'));
        if (items) {
            setItems(items);
        }
    }, []);
  

    return (
        <div>
            <img className="object-contain w-1/2" src={IMG_PATH + items.poster_path} alt="Sunset in the mountains" onError={(e) => { e.target.onerror = null; e.target.src = defaultImage }} />
            <div className="px-3 py-4">
                <div className="font-bold text-xl mb-2 "><h2>Title: {items.title}</h2></div>
                <div className="font-bold text-xl mb-2"><h2>Description:</h2></div>
                <h2 className="text-light text-base">
                    {items.overview}
                </h2>
                <div>
                    <h2>Vote Average: {items.vote_average}</h2>
                </div>
                <div>
                    <h2>Total Votes {items.vote_count}</h2>
                </div>
                <div>
                    <h2>Status</h2>
                </div>
                <div>
                    <h2>IMDB Link</h2>
                </div>
                <div>
                    <h2>Budget</h2>
                </div>
                <div>
                    <h2>Production Countries</h2>
                </div>
                <div>
                    <h2>Genres</h2>
                </div>
                <div>
                    <h2>Languages</h2>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
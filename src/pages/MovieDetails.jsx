import React, { useEffect, useState } from 'react';
import { IMG_PATH } from '../config/config';
import defaultImage from '../assets/images/gallery.png';

const MovieDetails = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('movieInfo'));
        if (items) {
            setItems(items);
            // convert to array
            const itemsArray = Object.values(items);
            // console.log(itemsArray);
            console.log(typeof(items));
        }
    }, []);
  

    return (
        <div>
            <img className="object-contain w-1/2" src={IMG_PATH + items.poster_path} alt="Sunset in the mountains" onError={(e) => { e.target.onerror = null; e.target.src = defaultImage }} />
            <div className="px-3 py-4">
                <div className="font-bold text-xl mb-2 ">Title: {items.title}</div>
                <div className="font-bold text-xl mb-2">Description:</div>
                <p className="text-light text-base">
                    {items.overview}
                </p>
                <div>
                    <span>Vote Average: {items.vote_average}</span>
                </div>
                <div>
                    <span>Total Votes {items.vote_count}</span>
                </div>
                <div>
                    <span>Status</span>
                </div>
                <div>
                    <span>IMDB Link</span>
                </div>
                <div>
                    <span>Budget</span>
                </div>
                <div>
                    <span>Production Countries</span>
                </div>
                <div>
                    <span>Genres</span>
                </div>
                <div>
                    <span>Languages</span>
                </div>
            </div>
        </div>



    )
}

export default MovieDetails
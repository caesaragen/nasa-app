import React from 'react';
import { useEffect, useState } from 'react';
import { API_URL } from '../config/config';
import Moment from 'react-moment';


const Header = () => {
  const [headerImage, setHeaderImage] = useState('')
  const [date, setDate] = useState('')
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_URL);
      const data = await response.json();
      setHeaderImage(data.hdurl)
      setDate(data.date)
    }
    fetchData();
  }, [])
  
  return (
    <div data-testid='header'>
          <h1 className="text-center">
        <span className='text-[20px] text-[#FFB703] font-bold'>Nasa: </span>               
        <span className='text-[20px] text-[#8ECAE6] font-bold'>Picture of the day </span><br></br>
        <span className='text-[20px] text-[#8ECAE6] font-bold'>
          <Moment data-testid='date' format='dddd, MMMM D, YYYY'>{date}</Moment>
        </span>
        <img src={headerImage} alt="nasa" />
      </h1>
    </div>
  )
}

export default Header
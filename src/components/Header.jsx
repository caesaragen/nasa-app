import React from 'react'
import { useEffect, useState } from 'react'
import { API_URL } from '../config/config'
import Moment from 'react-moment';


const Header = () => {
  const [headerImage, setHeaderImage] = useState('')
  const [date, setDate] = useState('')
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setHeaderImage(data.hdurl)
        setDate(data.date)
        console.log(data)
      })
  }, [])
  
  return (
      <div>
          <h1 className="text-center text-3xl">
        <span className='text-3xl text-[#FFB703]'>Nasa: </span>               
        <span className='text-3xl text-[#8ECAE6] '>Picture of the day </span><br></br>
        <span className='text-3xl text-[#8ECAE6] '>
          <Moment format='dddd, MMMM Do YYYY'>{date}</Moment>
        </span>

        <img src={headerImage} alt="nasa" />
      </h1>
    </div>
  )
}

export default Header
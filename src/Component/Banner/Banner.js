import React,{useEffect, useState} from 'react'
import './banner.css'
import instance from '../../Axios'
import { api_key,imgUrl } from '../../Constent/Constend'

const Banner = () => {
  const [movie, setmovie] = useState()
  useEffect(() => {
    instance.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`).then((response)=>{
      setmovie(response.data.results[Math.floor(Math.random() * 20) + 1])
    })
  
  }, [])
  
  return (
    <div style={{ backgroundImage: `url(${movie? imgUrl+movie.backdrop_path:''})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:''}</h1>
            <div className='banner_buttons'>
                <button className='buttons'>Play</button>
                <button className='buttons'>My list</button>

            </div>
         <h1 className='description'>{movie?movie.overview:''}</h1>
         
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
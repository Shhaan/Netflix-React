import React,{useEffect, useState} from 'react'
import './banner.css'
import instance from '../../Axios'
import { api_key,imgUrl,baseurl } from '../../Constent/Constend'
import Youtube from 'react-youtube'

const Banner = () => {
  const [movie, setmovie] = useState()
  const [playmovieid, setpalymovieid] = useState()

  useEffect(() => {
    instance.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`).then((response)=>{
      setmovie(response.data.results[Math.floor(Math.random() * 20) + 1])
    })
    setpalymovieid('')
      
  }, [])

  const handlevideo=(id)=>{
    
    instance.get(`${baseurl}/movie/${id}/videos?language=en-US&api_key=${api_key}`).then(response=>{
     if(response.data.results.length!=0){
      setpalymovieid(response.data.results[0])}
    }).catch((er)=>{
     console.log(er);  
    })
   }
  
  return (
    <div  style={!playmovieid ? {backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ''})`} : {}}  className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:''}</h1>
            <div className='banner_buttons'>
              {!playmovieid ?
                <button className='buttons' onClick={()=>handlevideo(movie.id)}>Play</button>:
                <button className='buttons' onClick={()=>setpalymovieid('')}>Stop</button>
              
              }
                <button className='buttons'>My list</button>

            </div>

           
         <h1 className='description'>{movie?movie.overview:''}</h1>
         
        </div>
        <div className="fade_bottom"></div>
      {playmovieid && <Youtube className='youtube' opts={{
      width: '100%',
      height: '400px',
      playerVars: {
        autoplay: 1,  
        loop: 1,      
        modestbranding: 1,  
        disablekb: 1,  
        fs: 0,        
        controls: 0,  
        rel: 0,       
        showinfo: 0, 
        iv_load_policy: 3,  
        playsinline: 1,  
      }
    }} videoId={playmovieid.key} />}

    </div>
  )
}

export default Banner
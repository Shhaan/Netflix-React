import React,{useContext, useEffect,useState} from 'react'
import './rowpost.css'
import instance from '../../Axios'
import { api_key,imgUrl,baseurl } from '../../Constent/Constend'
import {MyContext} from '../../Home'
import Youtube from 'react-youtube'
const RowPost = () => {
  const [movie, setmovie] = useState([])
  const a = useContext(MyContext)

  useEffect(()=>{
    instance.get(`${baseurl}/${a.url}`).then(response=>{
      setmovie(response.data.results)
    }).catch(er=>{
      alert(er)
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const [mId, setMid] = useState('')
  const handlevideo=(id)=>{
   instance.get(`${baseurl}/movie/${id}/videos?language=en-US&api_key=${api_key}`).then(response=>{
    if(response.data.results.length!=0){
    setMid(response.data.results[0])}
   }).catch((er)=>{
    console.log(er);
   })
     
  }
  return (
    <div className='row'>
      <br />
      
        <h2>{a.title}</h2>

        <div className="posters">
           {movie.map((obj)=>(
                
            <img onMouseOver={(e)=>e.target.style.cursor='pointer'} onClick={()=>handlevideo(obj.id)} className={a.isSmall ? 'small' : 'post'} src={`${imgUrl+obj.backdrop_path}`} alt="poster" />

           ))}
        
        </div>
      {mId && <Youtube videoId={mId.key} opts={opts}/>}

    </div>
  )
}

export default RowPost
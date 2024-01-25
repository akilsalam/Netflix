import React, { useEffect, useState } from 'react';
import Youtube from 'react-youtube'
import "./RowPost.css"
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/Constants';

const RowPost = (props) => {
  const [movies,SetMovies] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data);
      SetMovies(response.data.results)
    })
  },[])

  const opts = {
    height:'390',
    width: '100%',
    playerVars: {
      autoplay:1
    }
  }
  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Array empty');
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
      {movies ? movies.map((obj)=>(
      <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster'  :'poster' } src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
      )):null}
      </div>
     {urlId &&
      <Youtube videoId={urlId.key} opts={opts}  /> }
    </div>
  );
}

export default RowPost;

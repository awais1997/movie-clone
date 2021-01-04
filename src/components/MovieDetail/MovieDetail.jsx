import React from 'react'
import { Card } from "@material-ui/core";
import './MovieDetail.css'

const MovieDetail = ({movieDetail}) => {

  return (
    <div className="MovieDetail-container">
      
       {console.log("Movie Detail",movieDetail)}
       <Card className="MovieDetail-card"  style={{backgroundColor: "#032541"}}>
         <div className="MovieDetail-image" >
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movieDetail.poster_path}`} alt={movieDetail.title}/>
         </div>
         <div class="MovieDetail-content">
           <h1>{movieDetail.title}</h1>
           {/* {movieDetail.genres.forEach((value)=>{
             return (<p>{value.name}</p>)
           })
            
           } */}
           <i>{movieDetail.tagline}</i>
            <h2>OverView</h2> <p>{movieDetail.overview}</p>
           <h2>Rating</h2>{movieDetail.vote_average}
           <h2>Relase date</h2>{movieDetail.release_date}
           <h5>Popularity</h5>{movieDetail.popularity}
           <h5>Language</h5>{movieDetail.original_language =="en"?  "English":"..."}

         </div>

       </Card>
    </div>
  )
}

export default MovieDetail

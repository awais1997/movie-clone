import React from 'react'
import { Card } from "@material-ui/core";
import './TVshowDetail.css'

const TVshowDetail = ({tvshowDetail}) => {
  return (
  
      <div className="TVshowDetail-container">
        
         {console.log("TVshow Detail",tvshowDetail)}
         <Card className="TVshowDetail-card"  style={{backgroundColor: "#032541"}}>
           <div className="TVshowDetail-image" >
              <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${tvshowDetail.poster_path}`} alt={tvshowDetail.title}/>
           </div>
           <div class="TVshowDetail-content">
             <h1>{tvshowDetail.name}</h1>
             {/* {tvshowDetail.genres.forEach((value)=>{
               return (<p>{value.name}</p>)
             })
              
             } */}
             <i>{tvshowDetail.tagline}</i>
              <h2>OverView</h2> <p>{tvshowDetail.overview}</p>
             <h2>Rating</h2>{tvshowDetail.vote_average}
             <h2>Relase date</h2>{tvshowDetail.release_date}
             <h5>Popularity</h5>{tvshowDetail.popularity}
             <h5>Language</h5>{tvshowDetail.original_language =="en"?  "English":"..."}
  
           </div>
  
         </Card>
      </div>
    )
  
}

export default TVshowDetail

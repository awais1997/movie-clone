import React,{useEffect} from 'react'
import Banner from '../Banner'
import './Home.css'
import Movies from '../Movies'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow: 1,

  },
  
}));
const Home = ({FetchMoviesRequest,isloading,moviesList}) => {
  const classes = useStyles();
useEffect(() => {
  FetchMoviesRequest()
  console.log("use effect call");
}, [])

  return (
    <div>
      <Banner/>

      <div className="MoviesList-container">
      <h1>Popular list</h1>
{/* 
    {isloading !==true ? <h1>loading..</h1> :
        <div className="MoviesList-movies-container">
          {
            moviesList.results?.map((movie,index)=>{
            return <Movies movie={movie}/>
            })
          }
         </div>
     } */}
         
         {isloading !==true ? <h1>loading..</h1> :
          <div className={classes.root}>
        
             <Grid container item xs={12}  spacing={4}>
              
                {
                  moviesList.results?.map((movie,index)=>{
                  return <Movies movie={movie}/>
                  })
                }
              </Grid>
 
           </div>
           }
         
       </div>
    </div>
  )
}
    
export default Home

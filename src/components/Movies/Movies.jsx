import React from 'react'
import {Card,CardActionArea,CardContent,CardMedia,colors,Typography,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme)=>({
  // root: {
  //   flexGrow: 1,
  //   backgroundColor: "#fafafa",
  // },
  card:{
    padding: theme.spacing(1),
  },
  root: {
    minWidth: 230,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
    borderRadius:"20px",
    marginBottom:"20px"
    
  },
  media: {
    height: 250,
  },

  rating:{
    backgroundColor:"#032541",
    borderRadius:"50px",
    color:"white",
    height:30,
    width:30,
    textAlign:'center',
    
  }
}));


const Movies = ({movie,FetchMovieDetailRequest}) => {
  const history = useHistory();
  const getDetailFunc=(id)=>{
    history.push(`movie/detail/${id}`)
    FetchMovieDetailRequest(id)
    }
  const classes = useStyles();
  return (

      //   <Card className={classes.root} onClick={()=>{getDetailFunc(movie.id)}}>
      //     <CardActionArea>
      //     <CardMedia
      //       className={classes.media}
      //       image={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
      //       title={movie.title}
      //     />
      //       <Typography gutterBottom className={classes.rating}>
      //         {movie.vote_average}
      //       </Typography>
      //     <CardContent className={classes.content}>
      
      //       <Typography gutterBottom variant="h7"component="h3" >
      //         {movie.title !== null ? movie.title : movie.original_title !== null ? movie.original_title:"..." }
      //       </Typography>
      //       <Typography gutterBottom variant="h7" component="h5">
      //       {movie.release_date}
      //       </Typography>
         
      //     </CardContent>
         
      //   </CardActionArea>
    
      // </Card>
      // <div className={classes.root}>
      //   <Grid container spacing={1}>
      //   <Grid container item xs={12}  spacing={3}>
      //   <Grid item  xs={12} md={6} lg={3}>
      <Grid item  xs={12} md={6} lg={3}>
          <Card className={classes.root}>
            <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
            title={movie.title}
          />
            <Typography gutterBottom className={classes.rating}>
              {movie.vote_average}
            </Typography>
          <CardContent className={classes.content}>
      
            <Typography gutterBottom variant="h7"component="h3" >
              {movie.title !== null ? movie.title : movie.original_title !== null ? movie.original_title:"..." }
            </Typography>
            <Typography gutterBottom variant="h7" component="h5">
            {movie.release_date}
            </Typography>
         
          </CardContent>
         
        </CardActionArea>

          </Card>
       </Grid>
    //     </Grid>
    //     </Grid>

    // </div>


  )
}

export default Movies

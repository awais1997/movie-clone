import React, { useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Tvshows.css";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
    borderRadius: "20px",
    marginBottom: "20px",
  },
  media: {
    height: 300,
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  rating: {
    backgroundColor: "#032541",
    borderRadius: "50px",
    color: "white",
    height: 30,
    width: 30,
    textAlign: "center",
  },
});

const TVshows = ({
  isloading,
  tvshowsList,
  FetchTvshowsRequest,
  FetchTVshowDetailRequest,
}) => {
  const history = useHistory();
  useEffect(() => {
    FetchTvshowsRequest();
  }, []);

  const getTVshowFunc = (id) => {
    history.push(`tvshow/detail/${id}`);
    console.log(id);
    FetchTVshowDetailRequest(id);
  };
  const classes = useStyles();

  return (
    <div>
      <div className="TvshowsList-container">
        <h1>TV Shows list</h1>
        {console.log("tvshows..", tvshowsList)}
        {isloading !== true ? (
          <h1>loading..</h1>
        ) : (
          //   <div className="TvshowsList-shows-container">

          //   {
          //     tvshowsList.results?.map((show,index)=>{

          //       return (
          //       <Card className={classes.root} key={index} onClick={()=>{getTVshowFunc(show.id)}}>
          //         <CardActionArea>
          //         <CardMedia
          //           className={classes.media}
          //           image={`https://image.tmdb.org/t/p/w220_and_h330_face${show.poster_path}`}
          //           title= {show.name }
          //         />
          //           <Typography gutterBottom className={classes.rating}>
          //             {show.vote_average}
          //           </Typography>
          //         <CardContent className={classes.content}>

          //           <Typography gutterBottom variant="h7"component="h3" >
          //             {show.name}
          //           </Typography>
          //           <Typography gutterBottom variant="h7" component="h5">
          //           {show.first_air_date}
          //           </Typography>

          //         </CardContent>

          //       </CardActionArea>

          //     </Card>)
          //     })
          //   }

          // </div>

          <div className={classes.root}>
            <Grid container item xs={12} spacing={4}>
              {tvshowsList.results?.map((show, index) => {
                return (
                  <Grid item xs={12} md={6} lg={3} key={index}>
                    <Card
                      className={classes.card}
                      key={index}
                      onClick={() => {
                        getTVshowFunc(show.id);
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={`https://image.tmdb.org/t/p/w220_and_h330_face${show.poster_path}`}
                          title={show.name}
                        />
                        <Typography gutterBottom className={classes.rating}>
                          {show.vote_average}
                        </Typography>
                        <CardContent className={classes.content}>
                          <Typography gutterBottom variant="h7" component="h3">
                            {show.name}
                          </Typography>
                          <Typography gutterBottom variant="h7" component="h5">
                            {show.first_air_date}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
};
export default TVshows;

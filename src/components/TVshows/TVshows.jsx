import React, { useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";
import "../../style/style.css";

import { useHistory } from "react-router-dom";
import { useStyles } from "../../style/cardStyle";

const TVshows = (props) => {
  const { isloading, tvshowsList, fetchTvshowsRequest } = props;
  const history = useHistory();
  useEffect(() => {
    fetchTvshowsRequest();
  }, [fetchTvshowsRequest]);

  const getTVshowFunc = (id) => {
    history.push(`tvshow/detail/${id}`);
  };
  const classes = useStyles();

  return (
    <div>
      <div className="main-container">
        <h1>TV Shows list</h1>
        {console.log("tvshows..", tvshowsList)}
        {isloading !== true ? (
          <h1>loading..</h1>
        ) : (
          <Grid container item xs={"auto"} spacing={4}>
            {tvshowsList.results?.map((show, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
                  <Card
                    className={classes.root}
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
                        <Typography gutterBottom variant="inherit">
                          {show.name.slice(0, 15)}...
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="caption"
                          color="textSecondary"
                        >
                          {show.first_air_date}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}
      </div>
    </div>
  );
};
export default TVshows;

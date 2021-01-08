import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStyles } from "../../style/cardStyle";
import placeholderImage from "../../assets/placeholderImage.png";

const Movies = (props) => {
  const { movie } = props;
  const history = useHistory();
  const getDetailFunc = (id) => {
    history.push(`movie/detail/${id}`);
  };
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={3} lg={2}>
      <Card
        className={classes.root}
        onClick={() => {
          getDetailFunc(movie.id);
        }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={
              movie.poster_path === null
                ? placeholderImage
                : `https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`
            }
            title={movie.title}
          />
          <Typography gutterBottom className={classes.rating}>
            {movie.vote_average}
          </Typography>
          <CardContent className={classes.content}>
            <Typography variant="body" gutterBottom>
              {movie.title.slice(0, 15)}
              ...
            </Typography>
            <Typography variant="caption" gutterBottom color="textSecondary">
              {movie.release_date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Movies;

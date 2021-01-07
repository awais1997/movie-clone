import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1),
  },
  root: {
    minWidth: 200,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
    borderRadius: "20px",
    marginBottom: "20px",
  },
  media: {
    height: 260,
  },

  rating: {
    backgroundColor: "#032541",
    borderRadius: "50px",
    color: "white",
    height: 30,
    width: 30,
    textAlign: "center",
  },
}));

const Movies = (props) => {
  const { movie } = props;
  const history = useHistory();
  const getDetailFunc = (id) => {
    history.push(`movie/detail/${id}`);
  };
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Card
        className={classes.root}
        onClick={() => {
          getDetailFunc(movie.id);
        }}
      >
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
            <Typography variant="h6" gutterBottom>
              {movie.title !== null
                ? movie.title
                : movie.original_title !== null
                ? movie.original_title
                : movie.original_name !== null
                ? movie.original_name
                : "..."}
            </Typography>
            <Typography variant="caption" gutterBottom>
              {movie.release_date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Movies;

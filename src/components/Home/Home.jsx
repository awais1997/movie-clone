import React, { useEffect } from "react";
import Banner from "../Banner";
import "./Home.css";
import Movies from "../Movies";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));
const Home = (props) => {
  const { fetchMoviesRequest, isloading, moviesList } = props;
  const classes = useStyles();
  useEffect(() => {
    fetchMoviesRequest();
    console.log("use effect call");
  }, []);

  return (
    <div>
      <Banner />
      <div className="MoviesList-container">
        <h1>Popular list</h1>
        {isloading !== true ? (
          <h1>loading..</h1>
        ) : (
          <div className={classes.root}>
            <Grid container item xs={16} spacing={6}>
              {moviesList.results?.map((movie, index) => {
                return <Movies key={index} movie={movie} />;
              })}
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

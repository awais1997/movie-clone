import React, { useEffect } from "react";
import Banner from "../Banner";
import "../../style/style.css";
import Movies from "../Movies";
import { Grid } from "@material-ui/core";
const Home = (props) => {
  const { fetchMoviesRequest, isloading, moviesList } = props;

  useEffect(() => {
    fetchMoviesRequest();
  }, [fetchMoviesRequest]);

  return (
    <div>
      <Banner />
      <div className="main-container">
        <h1>Popular list</h1>
        {isloading !== true ? (
          <h1>loading..</h1>
        ) : (
          <Grid container item xs={"auto"} spacing={4}>
            {moviesList.results?.map((movie, index) => {
              return <Movies key={index} movie={movie} />;
            })}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default Home;

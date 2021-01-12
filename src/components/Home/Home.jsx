import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Banner from "../Banner";
import Movies from "../Movies";
import "../../style/style.css";

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

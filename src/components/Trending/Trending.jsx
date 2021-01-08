import React, { useEffect } from "react";
import Movies from "../Movies";
import { Grid } from "@material-ui/core";
import "../../style/style.css";

const Trending = (props) => {
  const { isloading, trendingList, fetchTrendingRequest } = props;

  useEffect(() => {
    fetchTrendingRequest();
  }, [fetchTrendingRequest]);

  return (
    <div className="main-container">
      <h1>Trending list</h1>
      {console.log("trending..", trendingList)}
      {isloading !== true ? (
        <h1>loading..</h1>
      ) : (
        <Grid container item xs={"auto"} spacing={4}>
          {trendingList.results?.map((movie, index) => {
            return <Movies key={index} movie={movie} />;
          })}
        </Grid>
      )}
    </div>
  );
};
export default Trending;

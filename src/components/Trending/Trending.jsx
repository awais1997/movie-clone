import React, { useEffect } from "react";
import "./Trending.css";
import Movies from "../Movies";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Trending = (props) => {
  const { isloading, trendingList, fetchTrendingRequest } = props;
  const classes = useStyles();
  useEffect(() => {
    fetchTrendingRequest();
  }, [fetchTrendingRequest]);

  return (
    <div className="TrendingList-container">
      <h1>Trending list</h1>
      {console.log("trending..", trendingList)}
      {isloading !== true ? (
        <h1>loading..</h1>
      ) : (
        <div className={classes.root}>
          <Grid container item xs={"auto"} spacing={4}>
            {trendingList.results?.map((movie, index) => {
              return <Movies key={index} movie={movie} />;
            })}
          </Grid>
        </div>
      )}
    </div>
  );
};
export default Trending;

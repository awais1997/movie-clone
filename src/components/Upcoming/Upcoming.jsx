import React, { useEffect } from "react";
import Movies from "../Movies";
import "./Upcoming.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Upcoming = ({ isloading, FetchUpcomingRequest, upcomingList }) => {
  const classes = useStyles();
  useEffect(() => {
    FetchUpcomingRequest();
  }, []);
  return (
    <div className="UpcomingList-container">
      <h1>Upcoming list</h1>

      {isloading !== true ? (
        <h1>loading..</h1>
      ) : (
        <div className={classes.root}>
          <Grid container item xs={12} spacing={4}>
            {upcomingList.results?.map((movie, index) => {
              return <Movies key={index} movie={movie} />;
            })}
          </Grid>
        </div>
      )}
    </div>
  );
};
export default Upcoming;

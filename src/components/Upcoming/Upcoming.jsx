import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Movies from "../Movies";
import "../../style/style.css";

const Upcoming = (props) => {
  const { isloading, fetchUpcomingRequest, upcomingList } = props;
  useEffect(() => {
    fetchUpcomingRequest();
  }, [fetchUpcomingRequest]);
  return (
    <div className="main-container">
      <h1>Upcoming list</h1>

      {isloading !== true ? (
        <h1>loading..</h1>
      ) : (
        <Grid container item xs={"auto"} spacing={4}>
          {upcomingList.results?.map((movie, index) => {
            return <Movies key={index} movie={movie} />;
          })}
        </Grid>
      )}
    </div>
  );
};
export default Upcoming;

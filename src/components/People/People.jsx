import React, { useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ProfilePlaceHolder from "../../assets/ProfilePlaceHolder.jpg";
import { useStyles } from "../../style/cardStyle";
import "../../style/style.css";

const People = (props) => {
  const { isloading, peopleList, fetchPeopleRequest } = props;

  const history = useHistory();
  useEffect(() => {
    fetchPeopleRequest();
  }, [fetchPeopleRequest]);

  const getPersonDetailFunc = (id) => {
    console.log(id);
    history.push(`person/detail/${id}`);
  };
  const classes = useStyles();

  return (
    <div>
      <div className="main-container">
        <h1>People list</h1>
        {console.log("people..", peopleList)}
        {isloading !== true ? (
          <h1>loading..</h1>
        ) : (
          <Grid container item xs={"auto"} spacing={4}>
            {peopleList.results?.map((person, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
                  <Card
                    className={classes.root}
                    key={index}
                    onClick={() => {
                      getPersonDetailFunc(person.id);
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={
                          person.profile_path === null
                            ? ProfilePlaceHolder
                            : `https://image.tmdb.org/t/p/w220_and_h330_face${person.profile_path}`
                        }
                        title={person.name}
                      />
                      <Typography gutterBottom className={classes.rating}>
                        {person.popularity}
                      </Typography>
                      <CardContent className={classes.content}>
                        <Typography gutterBottom variant="body">
                          {person.name}
                        </Typography>

                        {person.known_for.slice(0, 1).map((value, index) => {
                          return (
                            <Typography
                              gutterBottom
                              variant="caption"
                              key={index}
                              color="textSecondary"
                            >
                              {value.original_title}
                            </Typography>
                          );
                        })}
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
export default People;

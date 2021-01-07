import React, { useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./People.css";
import { useHistory } from "react-router-dom";
import ProfilePlaceHolder from "../../assets/ProfilePlaceHolder.jpg";

const useStyles = makeStyles({
  card: {
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
    borderRadius: "20px",
    marginBottom: "20px",
  },
  media: {
    height: 300,
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  rating: {
    backgroundColor: "#032541",
    borderRadius: "50px",
    color: "white",
    height: 23,
    width: 50,
    textAlign: "center",
    padding: "10px",
  },
});

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
      <div className="PeopleList-container">
        <h1>People list</h1>
        {console.log("people..", peopleList)}
        {isloading !== true ? (
          <h1>loading..</h1>
        ) : (
          <div className={classes.root}>
            <Grid container item xs={"auto"} spacing={4}>
              {peopleList.results?.map((person, index) => {
                return (
                  <Grid item xs={12} md={6} lg={3} key={index}>
                    <Card
                      className={classes.card}
                      key={index}
                      onClick={() => {
                        getPersonDetailFunc(person.id);
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={
                            person.profile_path !== null
                              ? `https://image.tmdb.org/t/p/w220_and_h330_face${person.profile_path}`
                              : { ProfilePlaceHolder }
                          }
                          title={person.name}
                        />
                        <Typography gutterBottom className={classes.rating}>
                          {person.popularity}
                        </Typography>
                        <CardContent className={classes.content}>
                          <Typography gutterBottom variant="h6">
                            {person.name}
                          </Typography>
                          {person.known_for.map((value, index) => {
                            return (
                              <Typography
                                gutterBottom
                                variant="caption"
                                key={index}
                              >
                                {value.original_title !== null
                                  ? value.original_title
                                  : value.name !== null
                                  ? value.name
                                  : value.original_name !== null
                                  ? value.original_name
                                  : "..."}
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
          </div>
        )}
      </div>
    </div>
  );
};
export default People;

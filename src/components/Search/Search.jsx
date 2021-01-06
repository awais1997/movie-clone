import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "./Search.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Movies from "../Movies";
import { useDebounce } from "use-debounce";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Search = (props) => {
  const { isloading, searchResult, fetchSearchRequest } = props;
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    searchValue.length && fetchSearchRequest(searchValue);
    console.log("search use effect call");
  }, [searchValue]);

  const getSearchValueFunc = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="Search-conatiner">
      <form className="Search-form">
        <TextField
          className="Search-input"
          label="Search.."
          onChange={(e) => {
            getSearchValueFunc(e);
          }}
        />
      </form>
      <div className="Search-result-container">
        <h1>Your Search result</h1>
        {isloading !== true ? (
          <h1>loading..</h1>
        ) : (
          <div className={classes.root}>
            <Grid container item xs={16} spacing={4}>
              {searchResult.results?.map((movie, index) => {
                return <Movies key={index} movie={movie} />;
              })}
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

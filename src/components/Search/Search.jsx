import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { DebounceInput } from "react-debounce-input";
import Movies from "../Movies";
//import TextField from "@material-ui/core/TextField";
import "../../style/style.css";

const Search = (props) => {
  const { isloading, searchResult, fetchSearchRequest } = props;
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    searchValue.length && fetchSearchRequest(searchValue);
  }, [searchValue, fetchSearchRequest]);

  const getSearchValueFunc = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="main-container">
      <form>
        <DebounceInput
          className="search-input"
          minLength={3}
          debounceTimeout={1000}
          placeholder="Search Movie.."
          onChange={(e) => {
            getSearchValueFunc(e);
          }}
        />

        {/* <TextField
          className="search-input"
          label="Search.."
          onChange={(e) => {
            getSearchValueFunc(e);
          }}
        /> */}
      </form>
      <h1>Your Search result</h1>
      {isloading !== true ? (
        <h1>loading..</h1>
      ) : (
        <Grid container item xs={"auto"} spacing={4}>
          {searchResult.results?.map((movie, index) => {
            return <Movies key={index} movie={movie} />;
          })}
        </Grid>
      )}
    </div>
  );
};

export default Search;

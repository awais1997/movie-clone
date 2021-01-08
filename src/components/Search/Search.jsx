import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "../../style/style.css";
import { Grid } from "@material-ui/core";
import Movies from "../Movies";
//import { DebounceInput } from "react-debounce-input";

const Search = (props) => {
  const { isloading, searchResult, fetchSearchRequest } = props;
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    searchValue.length && fetchSearchRequest(searchValue);
    console.log("search use effect call");
  }, [searchValue, fetchSearchRequest]);

  const getSearchValueFunc = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="Search-conatiner">
      <form>
        {/* <DebounceInput
          minLength={3}
          debounceTimeout={1000}
          onChange={(e) => {
            getSearchValueFunc(e);
          }}
        /> */}

        <TextField
          className="Search-input"
          label="Search.."
          onChange={(e) => {
            getSearchValueFunc(e);
          }}
        />
      </form>
      <h1>Your Search result</h1>
      {console.log("searchResult..", searchResult)}
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

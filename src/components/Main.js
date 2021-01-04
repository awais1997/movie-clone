import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Upcoming from "./Upcoming";
import Trending from "./Trending";
import TVshows from "./TVshows";
import People from "./People";
import Footer from "./Footer";
import MovieDetail from "./MovieDetail";
import TVshowDetail from "./TVshowDetail";
import PersonDetail from "./PersonDetail";

const Main = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/upcoming">
            <Upcoming />
          </Route>
          <Route path="/trending">
            <Trending />
          </Route>
          <Route path="/tvshows">
            <TVshows />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/movie/detail/:movieId">
            <MovieDetail />
          </Route>
          <Route path="/tvshow/detail/:Id">
            <TVshowDetail />
          </Route>
          <Route path="/person/detail/:Id">
            <PersonDetail />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Main;

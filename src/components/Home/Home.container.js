import Home from "./Home";
import { connect } from "react-redux";
import { fetchMoviesRequest } from "../../store/actions/fetchMovies";

const mapStateToProps = ({ moviesReducer }) => {
  return {
    isloading: moviesReducer.get("isloading"),
    moviesList: moviesReducer.get("moviesList"),
  };
};
const mapStateToDispatch = {
  fetchMoviesRequest,
};

export default connect(mapStateToProps, mapStateToDispatch)(Home);

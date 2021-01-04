import Home from "./Home";
import { connect } from "react-redux";
import { FetchMoviesRequest } from "../../actions/FetchMovies";

const mapStateToProps = (state) => {
  return {
    isloading: state.isloading,
    moviesList: state.moviesList,
  };
};
const mapStateToDispatch = {
  FetchMoviesRequest,
};

export default connect(mapStateToProps, mapStateToDispatch)(Home);

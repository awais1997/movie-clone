import MovieDetail from "./MovieDetail";
import { connect } from "react-redux";
import { FetchMovieDetailRequest } from "../../actions/FetchMovieDetail";

const mapStateToProps = (state) => {
  return {
    isloading: state.isloading,
    movieDetail: state.movieDetail,
  };
};

const mapDispatchToProps = {
  FetchMovieDetailRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

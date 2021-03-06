import MovieDetail from "./MovieDetail";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchMovieReviewRequest } from "../../store/actions/fetchMovieReview";
import { fetchMovieDetailRequest } from "../../store/actions/fetchMovieDetail";

const mapStateToProps = ({ moviesReducer }) => {
  return {
    isloading: moviesReducer.get("isloading"),
    movieDetail: moviesReducer.get("movieDetail"),
    movieReview: moviesReducer.get("movieReview"),
  };
};

const mapDispatchToProps = {
  fetchMovieReviewRequest,
  fetchMovieDetailRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MovieDetail));

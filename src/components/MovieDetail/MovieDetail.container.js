import MovieDetail from "./MovieDetail";
import { connect } from "react-redux";
import { fetchMovieReviewRequest } from "../../store/actions/fetchMovieReview";

const mapStateToProps = ({ moviesReducer }) => {
  return {
    isloading: moviesReducer.get("isloading"),
    movieDetail: moviesReducer.get("movieDetail"),
    movieReview: moviesReducer.get("movieReview"),
  };
};

const mapDispatchToProps = {
  fetchMovieReviewRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

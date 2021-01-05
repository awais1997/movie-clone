import MovieDetail from "./MovieDetail";
import { connect } from "react-redux";
import { FetchMovieReviewRequest } from "../../actions/FetchMovieReview";

const mapStateToProps = (state) => {
  return {
    isloading: state.isloading,
    movieDetail: state.movieDetail,
    movieReview: state.movieReview,
  };
};

const mapDispatchToProps = {
  FetchMovieReviewRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

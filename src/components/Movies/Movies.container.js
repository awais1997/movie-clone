import Movies from "./Movies";
import { connect } from "react-redux";
import { FetchMovieDetailRequest } from "../../actions/FetchMovieDetail";

const mapDispatchToProps = (dispatch) => {
  return {
    FetchMovieDetailRequest: (id) => dispatch(FetchMovieDetailRequest(id)),
  };
};

export default connect(null, mapDispatchToProps)(Movies);

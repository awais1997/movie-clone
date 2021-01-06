import Movies from "./Movies";
import { connect } from "react-redux";
import { fetchMovieDetailRequest } from "../../store/actions/fetchMovieDetail";

const mapDispatchToProps = {
  fetchMovieDetailRequest,
};

export default connect(null, mapDispatchToProps)(Movies);

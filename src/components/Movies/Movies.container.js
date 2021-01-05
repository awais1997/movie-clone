import Movies from "./Movies";
import { connect } from "react-redux";
import { FetchMovieDetailRequest } from "../../actions/FetchMovieDetail";

const mapDispatchToProps = {
  FetchMovieDetailRequest,
};

export default connect(null, mapDispatchToProps)(Movies);

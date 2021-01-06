import Trending from "./Trending";
import { connect } from "react-redux";
import { fetchTrendingRequest } from "../../store/actions/fetchTrending";

const mapStateToProps = ({ moviesReducer }) => {
  return {
    isloading: moviesReducer.get("isloading"),
    trendingList: moviesReducer.get("trendingList"),
  };
};
const mapDispatchToProps = {
  fetchTrendingRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);

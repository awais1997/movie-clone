import Trending from "./Trending";
import { connect } from "react-redux";
import { FetchTrendingRequest } from "../../actions/FetchTrending";

const mapStateToProps = (state) => {
  return {
    isloading: state.isloading,
    trendingList: state.trendingList,
  };
};
const mapDispatchToProps = {
  FetchTrendingRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);

import TVshows from "./TVshows";
import { connect } from "react-redux";
import { FetchTvshowsRequest } from "../../actions/FetchTvshows";
import { FetchTVshowDetailRequest } from "../../actions/FetchTVshowDetail";
const mapStateToProps = (state) => {
  return {
    isloading: state.isloading,
    tvshowsList: state.tvshowsList,
  };
};

const mapDispatchToProps = {
  FetchTvshowsRequest,
  FetchTVshowDetailRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(TVshows);

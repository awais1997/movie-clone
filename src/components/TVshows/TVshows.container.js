import TVshows from "./TVshows";
import { connect } from "react-redux";
import { fetchTvshowsRequest } from "../../store/actions/fetchTvshows";
import { fetchTVshowDetailRequest } from "../../store/actions/fetchTVshowDetail";
const mapStateToProps = ({ tvshowsReducer }) => {
  return {
    isloading: tvshowsReducer.get("isloading"),
    tvshowsList: tvshowsReducer.get("tvshowsList"),
  };
};

const mapDispatchToProps = {
  fetchTvshowsRequest,
  fetchTVshowDetailRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(TVshows);

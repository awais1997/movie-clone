import TVshowDetail from "./TVshowDetail";
import { connect } from "react-redux";
//import { FetchTVshowDetailRequest } from "../../actions/FetchTVshowDetail";

const mapStateToProps = (state) => {
  return {
    isloading: state.isloading,
    tvshowDetail: state.tvshowDetail,
  };
};
export default connect(mapStateToProps, null)(TVshowDetail);

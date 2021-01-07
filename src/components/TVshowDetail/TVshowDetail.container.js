import TVshowDetail from "./TVshowDetail";
import { connect } from "react-redux";
import { fetchTVshowReviewRequest } from "../../store/actions/fetchTVshowReview";
import { fetchTVshowDetailRequest } from "../../store/actions/fetchTVshowDetail";
import { withRouter } from "react-router-dom";

const mapStateToProps = ({ tvshowsReducer }) => {
  return {
    isloading: tvshowsReducer.get("isloading"),
    tvshowDetail: tvshowsReducer.get("tvshowDetail"),
    tvshowReview: tvshowsReducer.get("tvshowReview"),
  };
};
const mapDispatchToProps = {
  fetchTVshowReviewRequest,
  fetchTVshowDetailRequest,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TVshowDetail));

import TVshowDetail from "./TVshowDetail";
import { connect } from "react-redux";
import { fetchTVshowReviewRequest } from "../../store/actions/fetchTVshowReview";

const mapStateToProps = ({ tvshowsReducer }) => {
  return {
    isloading: tvshowsReducer.get("isloading"),
    tvshowDetail: tvshowsReducer.get("tvshowDetail"),
    tvshowReview: tvshowsReducer.get("tvshowReview"),
  };
};
const mapDispatchToProps = {
  fetchTVshowReviewRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(TVshowDetail);

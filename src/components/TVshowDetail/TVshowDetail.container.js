import TVshowDetail from "./TVshowDetail";
import { connect } from "react-redux";
import { FetchTVshowReviewRequest } from "../../actions/FetchTVshowReview";

const mapStateToProps = (state) => {
  return {
    isloading: state.isloading,
    tvshowDetail: state.tvshowDetail,
    tvshowReview: state.tvshowReview,
  };
};
const mapDispatchToProps = {
  FetchTVshowReviewRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(TVshowDetail);

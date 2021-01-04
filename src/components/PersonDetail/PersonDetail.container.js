import PersonDetail from "./PersonDetail";
import { connect } from "react-redux";
//import { FetchPersonDetailRequest } from "../../actions/FetchPersonDetail";

const mapStateToProps = (state) => {
  return {
    isloading: state.isloading,
    personDetail: state.personDetail,
  };
};

// const mapDispatchToProps = {
//   FetchPersonDetailRequest,
// };

export default connect(mapStateToProps, null)(PersonDetail);

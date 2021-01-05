import PersonDetail from "./PersonDetail";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    isloading: state.isloading,
    personDetail: state.personDetail,
  };
};

export default connect(mapStateToProps, null)(PersonDetail);

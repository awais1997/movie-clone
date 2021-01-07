import PersonDetail from "./PersonDetail";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchPersonDetailRequest } from "../../store/actions/fetchPersonDetail";

const mapStateToProps = ({ peopleReducer }) => {
  return {
    isloading: peopleReducer.get("isloading"),
    personDetail: peopleReducer.get("personDetail"),
  };
};
const mapDispatchToProps = {
  fetchPersonDetailRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PersonDetail));

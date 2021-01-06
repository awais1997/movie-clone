import PersonDetail from "./PersonDetail";
import { connect } from "react-redux";

const mapStateToProps = ({ peopleReducer }) => {
  return {
    isloading: peopleReducer.get("isloading"),
    personDetail: peopleReducer.get("personDetail"),
  };
};

export default connect(mapStateToProps, null)(PersonDetail);

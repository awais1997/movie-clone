import People from "./People";
import { connect } from "react-redux";
import { fetchPeopleRequest } from "../../store/actions/fetchPeople";

const mapStateToProps = ({ peopleReducer }) => {
  return {
    isloading: peopleReducer.get("isloading"),
    peopleList: peopleReducer.get("peopleList"),
  };
};

const mapDispatchToProps = {
  fetchPeopleRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(People);

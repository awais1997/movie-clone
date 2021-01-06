import People from "./People";
import { connect } from "react-redux";
import { fetchPeopleRequest } from "../../store/actions/fetchPeople";
import { fetchPersonDetailRequest } from "../../store/actions/fetchPersonDetail";

const mapStateToProps = ({ peopleReducer }) => {
  return {
    isloading: peopleReducer.get("isloading"),
    peopleList: peopleReducer.get("peopleList"),
  };
};

const mapDispatchToProps = {
  fetchPeopleRequest,
  fetchPersonDetailRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(People);

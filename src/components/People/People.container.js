import People from "./People";
import { connect } from "react-redux";
import { FetchPeopleRequest } from "../../actions/FetchPeople";
import { FetchPersonDetailRequest } from "../../actions/FetchPersonDetail";

const mapStateToProps = (state) => {
  return {
    isloading: state.isloading,
    peopleList: state.peopleList,
  };
};

const mapDispatchToProps = {
  FetchPeopleRequest,
  FetchPersonDetailRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(People);

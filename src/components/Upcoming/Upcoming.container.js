import Upcoming from "./Upcoming";
import { connect } from "react-redux";
import { FetchUpcomingRequest } from "../../actions/FetchUpcoming";

const mapStateToProps = (state) => {
  return {
    isloading: state.isloading,
    upcomingList: state.upcomingList,
  };
};

const mapDispatchToProps = {
  FetchUpcomingRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);

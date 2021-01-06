import Upcoming from "./Upcoming";
import { connect } from "react-redux";
import { fetchUpcomingRequest } from "../../store/actions/fetchUpcoming";

const mapStateToProps = ({ moviesReducer }) => {
  return {
    isloading: moviesReducer.get("isloading"),
    upcomingList: moviesReducer.get("upcomingList"),
  };
};

const mapDispatchToProps = {
  fetchUpcomingRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);

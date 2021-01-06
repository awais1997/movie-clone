import Search from "./Search";
import { connect } from "react-redux";
import { fetchSearchRequest } from "../../store/actions/fetchSearch";

const mapStateToProps = ({ searchReducer }) => {
  return {
    isloading: searchReducer.get("isloading"),
    searchResult: searchReducer.get("searchResult"),
  };
};

const mapDispatchToProps = {
  fetchSearchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

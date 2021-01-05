import Search from "./Search";
import { connect } from "react-redux";
import { FetchSearchRequest } from "../../actions/FetchSearch";

const mapStateToProps = (state) => {
  return {
    isloading: state.isloading,
    searchResult: state.searchResult,
  };
};

const mapDispatchToProps = {
  FetchSearchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

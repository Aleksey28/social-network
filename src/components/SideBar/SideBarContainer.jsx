import SideBar from "./SideBar";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};

const mapDispatchToProps = () => {
  return {};
};

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar);

export default SideBarContainer;

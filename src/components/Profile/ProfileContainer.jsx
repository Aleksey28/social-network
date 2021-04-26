import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserInfo } from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
  render() {
    return (
      <Profile {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.profilePage.userInfo,
});

const methods = {
  setUserInfo,
};

export default connect(mapStateToProps, methods)(ProfileContainer);

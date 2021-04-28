import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserInfo } from "../../redux/profileReducer";
import axios from "axios";
import { apiSamuraiSettings } from "../../utils/constants";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`${apiSamuraiSettings.baseUrl}/profile/2`)
      .then(res => this.props.setUserInfo(res.data))
      .catch(console.log);
  }

  render() {
    return (
      <Profile {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.profilePage.userInfo,
});

const mapDispatchToProps = {
  setUserInfo,
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);

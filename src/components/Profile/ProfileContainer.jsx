import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserInfo } from "../../redux/profileReducer";
import axios from "axios";
import { apiSamuraiSettings } from "../../utils/constants";

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

const methods = {
  setUserInfo,
};

export default connect(mapStateToProps, methods)(ProfileContainer);

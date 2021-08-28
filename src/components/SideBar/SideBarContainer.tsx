import SideBar from './SideBar';
import { connect } from 'react-redux';
import { getFriendsState } from '../../redux/friends/selector';

const mapStateToProps = (state: any) => {
  return {
    friends: getFriendsState(state),
  };
};

const mapDispatchToProps = () => {
  return {};
};

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar);

export default SideBarContainer;

import React from 'react';
import Header from './Header';
import { authorize } from '../../redux/authReducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.authorize();
  }

  render() {
    return (
      <Header { ...this.props }/>
    );
  }
}

const mapStateToProps = ( state ) => ({
  email: state.auth.email,
  login: state.auth.login,
  userId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = {
  authorize,
};

export default connect( mapStateToProps, mapDispatchToProps )( HeaderContainer );

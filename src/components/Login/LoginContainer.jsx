import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Login from './Login';
import { login } from '../../redux/authReducer';

class LoginContainer extends React.Component {
  render() {
    return (
      <Login { ...this.props }/>
    );
  }
}

const mapStateToProps = ( state ) => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = {
  login,
};

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
)( LoginContainer );

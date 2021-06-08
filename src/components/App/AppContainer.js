import React from 'react';
import { authorize } from '../../redux/authReducer';
import { connect } from 'react-redux';
import App from './App';
import { compose } from 'redux';

class AppContainer extends React.Component {
  render() {
    return (
      <App { ...this.props }/>
    );
  }
}

const mapStateToProps = ( state ) => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = {
  authorize,
};

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
)( AppContainer );

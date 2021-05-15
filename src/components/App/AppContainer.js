import React from 'react';
import { authorize } from '../../redux/authReducer';
import { connect } from 'react-redux';
import App from './App';

class AppContainer extends React.Component {
  componentDidMount() {
    this.props.authorize();
  }

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

export default connect( mapStateToProps, mapDispatchToProps )( AppContainer );

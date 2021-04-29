import React from 'react';
import Header from './Header';
import { setUserData } from '../../redux/authReducer';
import { connect } from 'react-redux';
import axios from 'axios';
import { apiSamuraiSettings } from '../../utils/constants';

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get( `${ apiSamuraiSettings.baseUrl }/auth/me`, { withCredentials: true } )
      .then( res => {
        if ( res.data.resultCode === 1 ) {
          throw new Error( res.data.messages[0] );
        }
        const { email, login, id: userId } = res.data.data;
        this.props.setUserData( { email, login, userId } );
      } )
      .catch( console.log );
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
  setUserData,
};

export default connect( mapStateToProps, mapDispatchToProps )( HeaderContainer );

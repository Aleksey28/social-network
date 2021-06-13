import './App.css';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import DialogsContainer from '../Dialogs/DialogsContainer';
import SideBarContainer from '../SideBar/SideBarContainer';
import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import HeaderContainer from '../Header/HeaderContainer';
import ProtectedRoute from '../../hoc/ProtectedRoute';
import LoginContainer from '../Login/LoginContainer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { initializing } from '../../redux/app/reducer';
import Preloader from '../common/Preloader/Preloader';
import { getInitializedState } from '../../redux/app/selector';

class App extends React.Component {
  componentDidMount() {
    this.props.initializing();
  }

  render() {
    let { isAuth, initialized } = this.props;
    return initialized
           ? (
             <div className="app-wrapper">
               <HeaderContainer/>
               <Navbar/>
               <SideBarContainer/>
               <div className="app-wrapper__content">
                 <Switch>
                   <Route path="/login">
                     <LoginContainer/>
                   </Route>
                   <Route path="/profile/:userId?">
                     <ProfileContainer/>
                   </Route>
                   <ProtectedRoute condition={ isAuth } to={ '/login' }>
                     <Route path="/messages">
                       <DialogsContainer/>
                     </Route>
                     <Route path="/users">
                       <UsersContainer/>
                     </Route>
                   </ProtectedRoute>
                   <Route exact path="/">
                     <Redirect to="/profile"/>
                   </Route>
                 </Switch>
               </div>
             </div>
           )
           : <Preloader/>;
  }
}

const mapStateToProps = ( state ) => ({
  isAuth: state.auth.isAuth,
  initialized: getInitializedState( state ),
});

const mapDispatchToProps = {
  initializing,
};

export default compose(
  withRouter,
  connect( mapStateToProps, mapDispatchToProps ),
)( App );


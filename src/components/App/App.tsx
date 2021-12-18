import './App.css';
import 'antd/dist/antd.css';
import React, { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import ProfilePage from '../Profile/ProfilePage';
import ProtectedRoute from '../../hoc/ProtectedRoute';
import { compose } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { withRouter } from 'react-router';
import { initializing } from '../../redux/app/reducer';
import Preloader from '../common/Preloader/Preloader';
import { getInitializedState } from '../../redux/app/selector';
import { getIsAuthState } from '../../redux/auth/selector';
import withSuspense from '../../hoc/withSuspense';
import { AppStateType } from '../../redux/redux-store';
import LoginPage from '../Login/LoginPage';

import { Breadcrumb, Layout } from 'antd';
import Logo from '../Logo/Logo';
import Header from '../Header/Header';

const { Content, Footer, Sider } = Layout;

const DialogsContainer = lazy(() => import('../Dialogs/DialogsContainer').then(DialogsContainer => DialogsContainer));
const UsersPage        = lazy(() => import('../Users/UsersPage').then(UsersPage => UsersPage));

interface StatePropsType {
  isAuth: boolean;
  initialized: boolean;
}

interface DispatchPropsType {
  initializing: () => void;
}

interface OwnProps {
}

type PropsType = ConnectedProps<typeof connector>;

const mapStateToProps = (state: AppStateType): StatePropsType => ({
  isAuth:      getIsAuthState(state),
  initialized: getInitializedState(state),
});

const mapDispatchToProps: DispatchPropsType = {
  initializing,
};

const connector = connect<StatePropsType, DispatchPropsType, OwnProps, AppStateType>(mapStateToProps, mapDispatchToProps);

const Dialogs = withSuspense(DialogsContainer);
const Users   = withSuspense(UsersPage);

class App extends React.Component<PropsType> {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  componentDidMount () {
    this.props.initializing();
  }

  render () {
    let { isAuth, initialized } = this.props;
    const { collapsed }         = this.state;

    return initialized
           ? (
             <Layout style={{ minHeight: '100vh' }}>
               <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                 <Logo/>
                 <Navbar/>
               </Sider>
               <Layout className="site-layout">
                 <Header/>
                 <Content style={{ margin: '0 16px' }}>
                   <Breadcrumb style={{ margin: '16px 0' }}>
                     <Breadcrumb.Item>User</Breadcrumb.Item>
                     <Breadcrumb.Item>Bill</Breadcrumb.Item>
                   </Breadcrumb>
                   <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                     <Switch>
                       <Redirect exact from="/" to="/profile"/>
                       <Route path="/login">
                         <LoginPage/>
                       </Route>
                       <Route path="/profile/:userId?">
                         <ProfilePage/>
                       </Route>
                       <ProtectedRoute path="/messages"
                                       condition={isAuth}
                                       to={'/login'}
                                       render={() => <Dialogs/>}/>
                       <ProtectedRoute path="/users"
                                       condition={isAuth}
                                       to={'/login'}
                                       render={() => <Users/>}/>
                       <Route path="/error">
                         <div>
                           ERROR 404 =D
                         </div>
                       </Route>
                       <Redirect to="/error"/>
                     </Switch>
                   </div>
                 </Content>
                 <Footer
                   style={{ textAlign: 'center' }}>{`ForRest©${new Date().getFullYear()} Created by Aleksey Popov`}</Footer>
               </Layout>
             </Layout>
           )
           : <Preloader/>;
  }
}

export default compose<React.ComponentType>(
  withRouter,
  connector,
)(App);


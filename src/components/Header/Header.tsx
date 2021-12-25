import React from 'react';
import { Layout, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuthState, getLoginState } from '../../redux/auth/selector';
import { logout } from '../../redux/auth/reducer';
import classes from './Header.module.css';

const { Header: AntdHeader } = Layout;

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const login  = useSelector(getLoginState);
  const isAuth = useSelector(getIsAuthState);

  const handleLogout = () => dispatch(logout());

  return (
    <AntdHeader className="site-layout-background">
      <Row justify="end" gutter={10}>
        {isAuth
         ? (
           <>
             <Col>
               <p className={classes.header__login}>{login}</p>
             </Col>
             <Col>
               <Button onClick={handleLogout}>Log out</Button>
             </Col>
           </>
         )
         : (
           <Col>
             <Button>
               <Link to="/login">Login</Link>
             </Button>
           </Col>
         )}
      </Row>
    </AntdHeader>
  );
};

export default Header;

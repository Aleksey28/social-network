import React from 'react';
import { Layout, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuthState, getLoginState } from '../../redux/auth/selector';
import { logout } from '../../redux/auth/reducer';

const { Header } = Layout;

const CustomHeader: React.FC = () => {
  const dispatch = useDispatch();

  const login  = useSelector(getLoginState);
  const isAuth = useSelector(getIsAuthState);

  const handleLogout = () => dispatch(logout());

  return (
    <Header className="site-layout-background">
      <Row justify="end">
        {isAuth
         ? (
           <>
             <Col>
               <p>{login}</p>
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
    </Header>
  );
};

export default CustomHeader;

import React from 'react';
import { Image } from 'antd';
import logo from '../../images/logo.svg';
import classes from './Logo.module.css';

const Logo: React.FC = () => {
  return (
    <div className={classes.logo}>
      <Image preview={false} src={logo} height={'100%'}/>
    </div>
  );
};

export default Logo;

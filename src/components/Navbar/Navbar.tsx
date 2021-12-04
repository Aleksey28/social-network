import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
  CustomerServiceOutlined,
  GlobalOutlined,
  MessageOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';

const Navbar: React.FC = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" icon={<UserOutlined/>}>
        <Link to="/profile" href="#">Profile</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<MessageOutlined/>}>
        <Link to="/messages" href="#">Messages</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<GlobalOutlined/>}>
        <Link to="/news" href="#">News</Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<CustomerServiceOutlined/>}>
        <Link to="/music" href="#">Music</Link>
      </Menu.Item>
      <Menu.Item key="5" icon={<SettingOutlined/>}>
        <Link to="/settings" href="#">Settings</Link>
      </Menu.Item>
      <Menu.Item key="6" icon={<TeamOutlined/>}>
        <Link to="/users" href="#">Users</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;

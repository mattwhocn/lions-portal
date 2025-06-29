import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useIsMobile } from '../../hooks/useIsMobile';
import logo from '../../assets/images/logo.png'
import logoName from '../../assets/images/logoname.png'
import './style.less';

const { Header: AntHeader } = Layout;

export const menuItems: MenuProps['items'] = [
  {
    key: '/',
    label: <Link to="/">首页</Link>,
  },
  {
    key: '/about',
    label: <Link to="/about">关于我们</Link>,
    children: [
      {
        key: '/about#profile',
        label: <Link to="/about#profile">公司简介</Link>,
      },
      {
        key: '/about#management',
        label: <Link to="/about#management">领导简介</Link>,
      },
      {
        key: '/about#qualifications',
        label: <Link to="/about#qualifications">资质与荣誉</Link>,
      },
    ],
  },
  {
    key: '/people',
    label: <Link to="/people">党群工作</Link>,
  },
  {
    key: '/organization',
    label: <Link to="/organization">两新组织</Link>,
  },
  {
    key: '/business',
    label: <Link to="/business">业务领域</Link>,
  },
  {
    key: '/news',
    label: <Link to="/news">新闻动态</Link>,
  },
  {
    key: '/contact',
    label: <Link to="/contact">联系我们</Link>,
  },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const isMobile = useIsMobile();

  const selectedKey = location.pathname === '/' ? '/' : `/${location.pathname.split('/')[1]}`;

  return (
    <AntHeader className="app-header">
      <div className="header-content">
        <Link to="/" className="logo">
          <div className="logo-mark">
            <img src={logo} alt="雄狮国际保安服务有限公司" />  
          </div>
          <div className="logo-name">
            <img src={logoName} alt="雄狮国际保安服务有限公司" />  
          </div>
        </Link>

        {/* 根据设备类型显示不同的菜单 */}
        {!isMobile ? (
          <Menu
            mode="horizontal"
            selectedKeys={[selectedKey]}
            items={menuItems}
            className="header-menu"
          />
        ) : (
          <>
            <div className="mobile-menu">
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setMobileMenuVisible(true)}
              />
            </div>
            <Drawer
              title="菜单"
              placement="right"
              onClose={() => setMobileMenuVisible(false)}
              open={mobileMenuVisible}
              className="mobile-drawer"
              width="50%"
            >
              <Menu
                mode="inline"
                selectedKeys={[selectedKey]}
                items={menuItems}
                onClick={() => setMobileMenuVisible(false)}
              />
            </Drawer>
          </>
        )}
      </div>
    </AntHeader>
  );
};

export default Header; 
import { Layout, Row, Col, Space, Divider } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import React from 'react';
import weixin from '../../assets/images/weixin.jpg';
import douyin from '../../assets/images/douyin.png';
import logo from '../../assets/images/logo.png';
import logoName from '../../assets/images/logoname.png';
import logoNameWhite from '../../assets/images/logoname-white.png';
import { contactInfo } from '@/pages/Contact';
import { menuItems } from '@/components/Header';
import { Link } from 'react-router-dom';

import './style.less';

const Footer: React.FC = () => {
  const baiduMapUrl = `https://map.baidu.com/search/${encodeURIComponent(contactInfo.address)}/@12949867.125,4784003,19z?querytype=s&da_src=shareurl&wd=${encodeURIComponent(contactInfo.address)}`;
  
  return (
    <Layout.Footer className="app-footer">
      <div className="footer-content">
        <Row gutter={[48, 24]}>
          <Col xs={24} md={8}>
            <div className="footer-section">
              <Link to="/" className="logo">
                <div className="logo-mark">
                  <img src={logo} alt="雄狮国际保安服务有限公司" />  
                </div>
                <div className="logo-name">
                  <img src={logoNameWhite} alt="雄狮国际保安服务有限公司" />  
                </div>
              </Link>
            </div>
            <div className="footer-bottom">
              <Space size={20} className="footer-nav">
                {menuItems?.map((item: any) => { return item?.label || '' })}
              </Space>
            </div>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <div className="footer-section">
              <h3>联系我们</h3>
              <p>
                <span className='contact-title'>联系电话：</span>
                <span className='contact-content'>{contactInfo.phone}</span>
              </p>
              <p>
                <span className='contact-title'>电子邮箱：</span>
                <span className='contact-content'>{contactInfo.email}</span>
              </p>
              <p>
                <span className='contact-title'>集团地址：</span>
                <span className='contact-content'>{contactInfo.address}</span>
              </p>
              <p className='contact-address'>
                <a href={baiduMapUrl} target="_blank" rel="noopener noreferrer">
                  <span>在百度地图中查看位置 </span>
                  <RightOutlined />
                </a>
              </p>
            </div>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <div className="footer-section">
              <h3>关注我们</h3>
              <Row gutter={24}>
                <Col span={12}>
                  <div className="qr-code">
                    <div className="qr-code-placeholder">
                      <img src={weixin} alt="weixin" />
                    </div>
                    <p>微信公众号</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Divider className="footer-divider" />

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} 雄狮国际. All Rights Reserved.
          </p>
        </div>
      </div>
    </Layout.Footer>
  );
};

export default Footer; 
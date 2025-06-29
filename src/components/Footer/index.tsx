import { Layout, Row, Col, Space, Divider } from 'antd';
import React from 'react';
import weixin from '../../assets/images/weixin.jpg';
import douyin from '../../assets/images/douyin.png';
import logo from '../../assets/images/logo.png';
import { contactInfo } from '@/pages/Contact';
import { menuItems } from '@/components/Header';

import './style.less';

const Footer: React.FC = () => {
  const baiduMapUrl = `https://map.baidu.com/search/${encodeURIComponent(contactInfo.address)}/@12949867.125,4784003,19z?querytype=s&da_src=shareurl&wd=${encodeURIComponent(contactInfo.address)}`;
  
  return (
    <Layout.Footer className="app-footer">
      <div className="footer-content">
        <Row gutter={[48, 24]}>
          <Col xs={24} sm={12} md={8}>
            <div className="footer-section">
              <h3>联系我们</h3>
              <p>联系电话：{contactInfo.phone}</p>
              <p>电子邮箱：{contactInfo.email}</p>
              <p>集团地址：{contactInfo.address}</p>
              <a 
                href={baiduMapUrl}
                target="_blank" 
                rel="noopener noreferrer"
              >
                在百度地图中查看位置
              </a>
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
                <Col span={12}>
                  <div className="qr-code">
                    <div className="qr-code-placeholder">
                      <img src={douyin} alt="douyin" />
                    </div>
                    <p>抖音号</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          
          <Col xs={24} md={8}>
            <div className="footer-section">
              <h3>公司简介</h3>
              <div className="logo">
                <div className="logo-mark">
                  <img src={logo} alt="雄狮国际" />
                </div>
                <h3>雄狮国际保安服务有限公司</h3>
              </div>
            </div>
          </Col>
        </Row>

        <Divider className="footer-divider" />
        
        <div className="footer-bottom">
          <Space size={20} className="footer-nav">
            {menuItems?.map((item: any) => { return item?.label || '' })}
          </Space>
          <p className="copyright">
            © {new Date().getFullYear()} 雄狮国际. All Rights Reserved.
          </p>
        </div>
      </div>
    </Layout.Footer>
  );
};

export default Footer; 
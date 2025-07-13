import React from 'react';
import { Layout, Typography, Row, Col, Card, Space } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { usePageTitle } from '../../hooks/usePageTitle';
import cooperative from '../../assets/images/contact/cooperative.png';
import cooperative1 from '../../assets/images/contact/cooperative1.png';
import cooperative2 from '../../assets/images/contact/cooperative2.png';
import cooperative3 from '../../assets/images/contact/cooperative3.png';
import cooperative4 from '../../assets/images/contact/cooperative4.png';
import cooperative5 from '../../assets/images/contact/cooperative5.png';
import cooperative6 from '../../assets/images/contact/cooperative6.png';
import cooperative7 from '../../assets/images/contact/cooperative7.png';
import cooperative8 from '../../assets/images/contact/cooperative8.png';
import cooperative9 from '../../assets/images/contact/cooperative9.png';
import cooperative10 from '../../assets/images/contact/cooperative10.png';
import cooperative11 from '../../assets/images/contact/cooperative11.png';
import cooperative12 from '../../assets/images/contact/cooperative12.png';
import cooperative13 from '../../assets/images/contact/cooperative13.png';
import cooperative14 from '../../assets/images/contact/cooperative14.png';
import cooperative15 from '../../assets/images/contact/cooperative15.png';
import cooperative16 from '../../assets/images/contact/cooperative16.png';
import cooperative17 from '../../assets/images/contact/cooperative17.png';
import cooperative18 from '../../assets/images/contact/cooperative18.png';
import cooperative19 from '../../assets/images/contact/cooperative19.png';
import cooperative20 from '../../assets/images/contact/cooperative20.png';
import { withErrorBoundary } from '@/components/ErrorBoundary';
import './style.less';

const { Content } = Layout;
const { Title } = Typography;

// 联系信息数据
export const contactInfo = {
  name: '北京雄狮国际保安服务有限公司',
  address: '北京市大兴区庞各庄镇庞新路5号1幢6层',
  address2: '北京市大兴区庞各庄镇庞新路5号1幢2层206室',
  phone: '010-89287732',
  postcode: '102601',
  email: 'xxxxxxxx@163.com',
  workTime: '周一至周五 9:00-18:00'
};

const cooperativeData = {
  title: '合作伙伴',
  images: [
    cooperative1,
    cooperative2,
    cooperative3,
    cooperative4,
    cooperative5,
    cooperative6,
    cooperative7,
    cooperative8,
    cooperative9,
    cooperative10,
    cooperative11,
    cooperative12,
    cooperative13,
    cooperative14,
    cooperative15,
    cooperative16,
    cooperative17,
    cooperative18,
    cooperative19,
    cooperative20,
  ]
}

const Contact: React.FC = () => {
  usePageTitle('联系我们');

  return (
    <Content className="contact-page">
      {/* 顶部横幅 */}
      <div className="page-banner">
        <div className="banner-content">
          <h1>联系我们</h1>
          <p>随时恭候您的咨询，我们将竭诚为您服务</p>
        </div>
        <div className="tech-overlay" />
      </div>

      {/* 联系信息 */}
      <section className="contact-section">
        <div className="section-content">
          <Title level={2}>联系方式</Title>
          <div className="info-cards">
            <Card className="info-card">
              <EnvironmentOutlined />
              <h3>注册地址</h3>
              <p>{contactInfo.address}</p>
            </Card>
            <Card className="info-card">
              <PhoneOutlined />
              <h3>联系电话</h3>
              <p>{contactInfo.phone}</p>
            </Card>
            <Card className="info-card">
              <MailOutlined />
              <h3>邮政编码</h3>
              <p>{contactInfo.postcode}</p>
            </Card>
            <Card className="info-card">
              <FieldTimeOutlined />
              <h3>工作时间</h3>
              <p>{contactInfo.workTime}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 合作伙伴 */}
      <section className="friendly-links-section">
        <div className="section-content">
          <h2>合作伙伴</h2>
          <div className="links-container">
            {cooperativeData.images.map((image, index) => (
              <div key={index} className='links-item'>
                <img src={image} alt="合作伙伴" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </Content>
  );
};

export default withErrorBoundary(Contact); 
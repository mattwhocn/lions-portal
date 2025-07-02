import React from 'react';
import { Layout, Typography, Row, Col, Card } from 'antd';
import { 
  EnvironmentOutlined, PhoneOutlined, MailOutlined, FieldTimeOutlined, 
  BankOutlined, SafetyCertificateOutlined, GlobalOutlined, SafetyOutlined, 
  CloudOutlined, RocketOutlined, ApartmentOutlined, BuildOutlined, 
  SecurityScanOutlined, CompassOutlined, FireOutlined, HeartOutlined,
  MedicineBoxOutlined, 
  TeamOutlined
} from '@ant-design/icons';
import { usePageTitle } from '../../hooks/usePageTitle';
import cooperative from '../../assets/images/contact/cooperative.png';
import { withErrorBoundary } from '@/components/ErrorBoundary';
import './style.less';

const { Content } = Layout;
const { Title } = Typography;

// 联系信息数据
export const contactInfo = {
  address: '北京市大兴区xxxxxxxxxxxx',
  address2: '北京市大兴区xxxxxxxxxxxx',
  phone: '010-xxxxxxxx',
  email: 'xxxxxxxx@163.com',
  workTime: '周一至周五 9:00-18:00'
};

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
              <h3>集团地址</h3>
              <p>{contactInfo.address}</p>
            </Card>
            <Card className="info-card">
              <PhoneOutlined />
              <h3>联系电话</h3>
              <p>{contactInfo.phone}</p>
            </Card>
            <Card className="info-card">
              <MailOutlined />
              <h3>电子邮箱</h3>
              <p>{contactInfo.email}</p>
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
            <img src={cooperative} alt="合作伙伴" />
          </div>
        </div>
      </section>

    </Content>
  );
};

export default withErrorBoundary(Contact); 
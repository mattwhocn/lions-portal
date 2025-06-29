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
import { gradients } from '../../utils/gradients';
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

  const friendlyLinks = [
    {
      name: '首都实业投资有限公司',
      url: 'https://www.cap-ii.com/',
      icon: <BankOutlined />
    },
    {
      name: '北京市保安服务有限公司',
      url: 'http://www.baoan.com.cn/',
      icon: <SafetyCertificateOutlined />
    },
    {
      name: '山东星网数据产业有限公司',
      url: 'http://www.starnetgis.com/',
      icon: <GlobalOutlined />
    },
    {
      name: '北京晨豪科技有限公司',
      url: 'https://safe360.cn/',
      icon: <SafetyOutlined />
    },
    {
      name: '中祥云智慧科技有限公司',
      url: 'http://www.zxyiot.cn/',
      icon: <CloudOutlined />
    },
    {
      name: '北京智图九州科技有限公司',
      url: 'https://www.ztjzsoft.com/',
      icon: <RocketOutlined />
    },
    {
      name: '中国电子信息产业集团有限公司',
      url: 'https://www.cec.com.cn/',
      icon: <ApartmentOutlined />
    },
    {
      name: '中电太极（集团）有限公司',
      url: 'http://www.nci.ac.cn/',
      icon: <BuildOutlined />
    },
    {
      name: '北京保安协会', 
      url: 'http://www.bjbaw.cn/',
      icon: <SecurityScanOutlined />
    },
    {
      name: '北京消防协会',
      url: 'http://www.beijingfire.com/home/index.php',
      icon: <FireOutlined />
    },
    {
      name: '北京安全防范行业协会',
      url: 'https://www.bspia.com.cn/',
      icon: <SafetyCertificateOutlined />
    },
    {
      name: '中国红十字会',
      url: 'https://www.redcross.org.cn/',
      icon: <HeartOutlined />
    },
    {
      name: '北京市大兴区红十字会',
      url: 'https://daxing.bjredcross.org.cn/',
      icon: <MedicineBoxOutlined />
    },
    {
      name: '中羚泰和科技有限公司',
      url: 'http://www.zlthkj.cn/',
      icon: <GlobalOutlined />
    },
    {
      name: '北京济宁企业商会',
      url: 'https://www.rushangjining.cn/sy',
      icon: <TeamOutlined />
    },
    {
      name: '中科星图股份有限公司',
      url: 'https://www.geovis.com.cn',
      icon: <CompassOutlined />
    },
  ];

  return (
    <Content className="contact-page">
      {/* 顶部横幅 */}
      <div 
        className="page-banner"
        style={{ background: gradients.techBlue }}
      >
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
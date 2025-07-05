import React from 'react';
import { Layout, Row, Col, Typography, Card, Space } from 'antd';
import { usePageTitle } from '../../hooks/usePageTitle';
import Elevator from '../../components/Elevator';
import companyImage from '../../assets/images/about/company.png';
import qualifications11 from '../../assets/images/about/qualifications/1 1.jpg';
import qualifications12 from '../../assets/images/about/qualifications/2 1.jpg';
import qualifications13 from '../../assets/images/about/qualifications/3 1.jpg';
import qualifications14 from '../../assets/images/about/qualifications/4 1.jpg';

import qualifications21 from '../../assets/images/about/qualifications/1 2.jpg';
import qualifications22 from '../../assets/images/about/qualifications/2 2.jpg';
import qualifications23 from '../../assets/images/about/qualifications/3 2.jpg';
import qualifications24 from '../../assets/images/about/qualifications/4 2.jpg';

import qualifications31 from '../../assets/images/about/qualifications/1 3.jpg';
import qualifications32 from '../../assets/images/about/qualifications/2 3.jpg';
import qualifications33 from '../../assets/images/about/qualifications/3 3.jpg';
import qualifications34 from '../../assets/images/about/qualifications/4 3.jpg';

import avatar from '../../assets/images/about/management/avatar.png';
import { useLocation } from 'react-router-dom';

import { withErrorBoundary } from '@/components/ErrorBoundary';
import './style.less';
const { Content } = Layout;
const { Title, Paragraph } = Typography;

// 公司简介数据
export const companyProfile = {
  title: '公司简介',
  content: `公司简介公司简介，公司简介，公司简介公司简介，公司简介，公司简介公司简介，公司简介，公司简介公司简介，公司简介，公司简介公司简介，公司简介，公司简介公司简介，公司简介`,
  infos: [
    {
      title: '公司简介：公司简介公司简介，公司简介',
      detail: '公司简介：公司简介公司简介，公司简介'
    },
    {
      title: '公司简介：公司简介公司简介，公司简介',
      detail: '公司简介：公司简介公司简介，公司简介'
    },
    {
      title: '公司简介：公司简介公司简介，公司简介',
      detail: '公司简介：公司简介公司简介，公司简介'
    },
  ]
};

// 管理层数据
const managementTeam = [
  {
    id: 1,
    name: '杨秀武',
    title: '党支部书记 / 总经理',
    avatar: avatar,
    description: `党支部书记，党支部书记，党支部书记，党支部书记，党支部书记，党支部书记，党支部书记，党支部书记，党支部书记，党支部书记，党支部书记，党支部书记，党支部书记，党支部书记，党支部书记，党支部书记，党支部书记，党支部书记，党支部书记，党支部书记，党支部书记，党支部书记`,
    moreDetails: [
      {
        title: '创业历程',
        content: '创业历程，创业历程，创业历程，创业历程，创业历程，创业历程，创业历程，创业历程',
      },
      {
        title: '个人荣誉',
        content: '个人荣誉，个人荣誉，个人荣誉，个人荣誉，个人荣誉，个人荣誉，个人荣誉，个人荣誉，个人荣誉，个人荣誉',
      },
      {
        title: '社会贡献',
        content: '社会贡献，社会贡献，社会贡献，社会贡献，社会贡献，社会贡献，社会贡献，社会贡献，社会贡献，社会贡献，社会贡献',
      }
    ]
  },
];

// 资质与荣誉数据
const qualifications = {
  title: '资质与荣誉',
  items: [
    qualifications11, qualifications12, qualifications13, qualifications14,
    qualifications21, qualifications22, qualifications23, qualifications24,
    qualifications31, qualifications32, qualifications33, qualifications34
  ],
};

const elevatorItems = [
  { key: 'profile', title: '公司简介' },
  { key: 'management', title: '领导简介' },
  { key: 'qualifications', title: '资质与荣誉' }
];

const About: React.FC = () => {
  usePageTitle('关于我们');
  const location = useLocation();
  
  // 添加状态来追踪当前活动的部分
  const [activeSection, setActiveSection] = React.useState('profile');
  // 添加标志位，防止循环触发
  const isScrolling = React.useRef(false);
  const isHashChanging = React.useRef(false);
  const profileRef = React.useRef<HTMLDivElement>(null);
  const managementRef = React.useRef<HTMLDivElement>(null);
  const qualificationsRef = React.useRef<HTMLDivElement>(null);

   React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    });

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }
    if (managementRef.current) {
      observer.observe(managementRef.current);
    }
    if (qualificationsRef.current) {
      observer.observe(qualificationsRef.current);
    }

    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current);
      }
      if (managementRef.current) {
        observer.unobserve(managementRef.current);
      }
      if (qualificationsRef.current) {
        observer.unobserve(qualificationsRef.current);
      }
    };
  }, []);

  // 1. 处理 Hash 变化：触发页面定位和电梯组件选中
  React.useEffect(() => {
    const handleHashChange = () => {
      if (isScrolling.current) return; // 如果是滚动触发的，则不处理

      isHashChanging.current = true;
      const hash = window.location.hash.slice(1);
      setActiveSection(hash);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => {
        isHashChanging.current = false;
      }, 100);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [location]);

  // 2. 处理页面滚动：触发 hash 变化和电梯组件选中
  React.useEffect(() => {
    const handleScroll = () => {
      if (isHashChanging.current) return; // 如果是 hash 变化触发的，则不处理

      const sections = elevatorItems.map(item => item.key);
      
      // 使用 requestAnimationFrame 优化滚动性能
      requestAnimationFrame(() => {
        isScrolling.current = true;
        
        // 找到当前可见的部分
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              if (activeSection !== section) {
                setActiveSection(section);
                // 更新 URL，但不触发滚动
                window.history.replaceState(null, '', `#${section}`);
              }
              break;
            }
          }
        }

        setTimeout(() => {
          isScrolling.current = false;
        }, 100);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // 3. 处理电梯组件点击：触发页面定位和 hash 变化
  const handleElevatorClick = (key: string) => {
    if (isScrolling.current) return; // 如果正在滚动，则不处理

    setActiveSection(key);
    isHashChanging.current = true;
    window.location.hash = key;

    // 手动触发滚动，因为有些浏览器可能不会响应 hash 变化
    const element = document.getElementById(key);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      isHashChanging.current = false;
    }, 100);
  };

  // 判断是否为单个管理层成员
  const isSingleManager = managementTeam.length === 1;

  return (
    <Content className="about-page">
      <Elevator 
        items={elevatorItems} 
        activeKey={activeSection}
        onChange={handleElevatorClick}
      />
      
      {/* 公司简介 */}
      <section className="section-profile">
        <div className='section-hash-mark' id="profile" />
        <div className="section-content" ref={profileRef}>
          <div className="section-header">
            <Title level={2}>{companyProfile.title}</Title>
          </div>
          <Row gutter={[48, 24]} align="middle">
            <Col xs={24} lg={12}>
              <div className="profile-image">
                <div className="tech-overlay">
                  <img src={companyImage} alt="companyImage" />
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <Paragraph className="profile-text">
                {companyProfile.content}
              </Paragraph>
              <div className="intro-highlights">
                {companyProfile.infos?.map((item, index) => (
                   <div key={index} className="highlight-item">
                    <span className="highlight-dot" />
                    {item.title}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* 领导简介 */}
      <section className="management-team">
        <div className='section-hash-mark' id="management" />
        <div className="section-content" ref={managementRef}>
          <div className="section-header">
            <Title level={2}>领导简介</Title>
          </div>
          {isSingleManager ? (
            // 单个管理层成员时的布局
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={8}>
                <Card className="manager-card single">
                  <div className="avatar-wrapper">
                    <img src={managementTeam[0].avatar} alt={managementTeam[0].name} />
                  </div>
                  <div className="info">
                    <h3>{managementTeam[0].name}</h3>
                    <p>{managementTeam[0].title}</p>
                  </div>
                </Card>
              </Col>
              <Col xs={24} lg={16}>
                <div className="manager-description">
                  <Paragraph>{managementTeam[0].description}</Paragraph>
                </div>
                <div className="manager-more-details">
                  {managementTeam[0].moreDetails.map((detail, index) => (
                    <div key={index} className="detail-item">
                      <h4>{detail.title}</h4>
                      <p>{detail.content}</p>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          ) : (
            // 多个管理层成员时的布局
            <Row gutter={[24, 48]}>
              {managementTeam.map(manager => (
                <Col xs={24} sm={12} lg={8} key={manager.id}>
                  <Card className="manager-card">
                    <div className="avatar-wrapper">
                      <img src={manager.avatar} alt={manager.name} />
                    </div>
                    <div className="info">
                      <h3>{manager.name}</h3>
                      <p>{manager.title}</p>
                    </div>
                    <div className="description">
                      <Paragraph>{manager.description}</Paragraph>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </section>

      {/* 资质与荣誉 */}
      <section className="section-qualifications">
        <div className='section-hash-mark' id="qualifications" />
        <div className="section-content" ref={qualificationsRef}>
          <div className="section-header">
            <Title level={2}>{qualifications.title}</Title>
          </div>
          <Row gutter={[24, 24]}>
            {qualifications.items.map((item, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <div 
                  className="qualification-item"
                  style={{ background: '#ffffff' }}
                >
                  <div className="tech-overlay">
                    {/* <img src={item} alt="资质与荣誉" /> */}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </Content>
  );
};

export default withErrorBoundary(About); 
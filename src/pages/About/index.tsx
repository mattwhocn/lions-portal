import React from 'react';
import { Layout, Row, Col, Typography, Card, Space, Carousel } from 'antd';
import { usePageTitle } from '../../hooks/usePageTitle';
import Elevator from '../../components/Elevator';
import companyImage from '../../assets/images/about/company.png';
import qualifications11 from '../../assets/images/about/qualifications/qualifications11.png';
import qualifications12 from '../../assets/images/about/qualifications/qualifications12.png';
import qualifications13 from '../../assets/images/about/qualifications/qualifications13.png';
import qualifications14 from '../../assets/images/about/qualifications/qualifications14.png';
import qualifications15 from '../../assets/images/about/qualifications/qualifications15.png';
import qualifications16 from '../../assets/images/about/qualifications/qualifications16.png';

import qualifications21 from '../../assets/images/about/qualifications/qualifications21.png';
import qualifications22 from '../../assets/images/about/qualifications/qualifications22.jpg';
import qualifications23 from '../../assets/images/about/qualifications/qualifications23.jpg';
import qualifications24 from '../../assets/images/about/qualifications/qualifications24.jpg';
import qualifications25 from '../../assets/images/about/qualifications/qualifications25.jpg';
import qualifications26 from '../../assets/images/about/qualifications/qualifications26.jpg';

import qualifications31 from '../../assets/images/about/qualifications/qualifications31.jpg';
import qualifications32 from '../../assets/images/about/qualifications/qualifications32.jpg';
import qualifications33 from '../../assets/images/about/qualifications/qualifications33.jpg';
import qualifications34 from '../../assets/images/about/qualifications/qualifications34.jpg';
import qualifications35 from '../../assets/images/about/qualifications/qualifications35.jpg';
import qualifications36 from '../../assets/images/about/qualifications/qualifications36.jpg';

import avatar from '../../assets/images/about/management/avatar.jpg';
import { useLocation } from 'react-router-dom';

import { withErrorBoundary } from '@/components/ErrorBoundary';
import './style.less';
const { Content } = Layout;
const { Title, Paragraph } = Typography;

// 公司简介数据
export const companyProfile = {
  title: '公司简介',
  image: companyImage,
  content: `北京雄狮国际保安服务有限公司成立于2020年，是经北京市公安局批准、工商注册的法人安保企业，注册资金6000万元。公司持有“AAA级资信等级”、“AAA级信誉企业”、“AAA级诚信经营示范单位”认证及三大体系认证。`,
  infos: [
    {
      title: '核心业务：',
      detail: '涵盖安保、物业等业务，以高素质队伍为宗旨，凭技术经验服务，设督察部保质量。',
      paragraph: `公司核心业务涵盖门卫、巡逻、守护、劳务服务、保安技术培训、停车管理、物业管理和保洁服务等。我们以打造高素质安保队伍为宗旨，依托技术手段新、科技含量高的专业特色和丰富的实战经验，为客户提供优质服务。为确保质量，公司还设有服务品质督察部。`
    },
    {
      title: '服务范围：',
      detail: '立足北京辐射全国并拓海外，构建综合网络，服务多高端领域，获客户好评。',
      paragraph: `服务范围立足北京，辐射全国，并逐步拓展海外，致力于构建人防、物防、技防相结合的综合服务网络。合作单位包括国家机关、党政部门、涉外机构、企事业单位、金融机构、高校、交通枢纽、景区、社区及海外派遣等高端领域，凭借良好信誉和服务质量，在客户满意度调查中连获好评。`,
    },
    {
      title: '团队管理：',
      detail: '军警转业团队主导，建科学管理培训体系，2000 余员工军事化管理，求双赢与创新。',
      paragraph: `公司管理团队主要由军警系统转业退役军人组成，建立了严谨科学的管理模式和完善的培训体系。现有员工2000余人，管理人员50余人，通过严格招聘（初中以上文化、政审合格）和培训，确保保安员素质。公司坚持军事化管理理念，以优质兵员为基础，追求服务与效益双赢，持续创新发展。`
    },
  ]
};


// 管理层数据
const managementProfile = {
  name: '杨秀武',
  title: '党支部书记、总经理',
  avatar: avatar,
  description: `杨秀武，男，1967年出生，中共党员。现任北京雄狮国际保安服务有限公司党支部书记、总经理。大学文化，吉林农安人，北京市二级保安师。`,
  descriptions: [
    `杨秀武，男，1967年出生，中共党员。现任北京雄狮国际保安服务有限公司党支部书记、总经理。大学文化，吉林农安人，北京市二级保安师。`,
    `曾就读于合肥解放军电子工程学院，石家庄陆军学院，石家庄陆军参谋学院。`,
    `从军14年，曾担任过营连主官，所带单位被评为“先进连队”、“基层建设先进单位”，曾被评为“优秀营连主官”、“优秀共产党员”、“优秀基层干部”，多次受到嘉奖。`,
    `从警15年，担任过公安派出所、内保处主要领导等职务，圆满完成了多项重大安保任务，先后两次被评为北京市人民满意政法干警“十佳”标兵。“全国优秀人民警察”、“全国公安系统二级英雄模范”、“全国优秀共产党员”等荣誉称号。荣获个人二等功2次、个人三等功4次，2008年第二十九届北京奥运会火炬手。`,
    `多次受到党和国家领导人接见，具有丰富团队管理领导和保安管理经验。`
  ],
  moreDetails: [
    {
      title: '创业历程',
      content: '',
    },
    {
      title: '个人荣誉',
      content: '',
    },
    {
      title: '社会贡献',
      content: '',
    }
  ]
};

// 资质与荣誉数据
const qualifications = {
  title: '资质与荣誉',
  items: [
    qualifications11, qualifications12, qualifications13, qualifications14, qualifications15, qualifications16,
    qualifications21, qualifications22, qualifications23, qualifications24, qualifications25, qualifications26,
    qualifications31, qualifications32, qualifications33, qualifications34, qualifications35, qualifications36,
  ],
};

const elevatorItems = [
  { key: 'profile', title: '公司简介' },
  { key: 'management', title: '领导简介' },
  { key: 'qualifications', title: '资质与荣誉' }
];

const carouselConfig = {
  centerMode: true,
  rows: 2,
  slidesToShow: 3,
  centerPadding: '60px',
  infinite: true,
  autoplay: true,
};

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
                  <img src={companyProfile.image} alt="companyImage" />
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <Paragraph className="profile-text">
                {companyProfile.content}
              </Paragraph>
            </Col>
          </Row>
          <Row gutter={[24, 12]} align="middle" style={{ marginTop: '24px' }}>
            {companyProfile.infos?.map((item, index) => (
              <Col xs={24} lg={8}>
                <Card title={<div style={{ textAlign: 'center' }}>{item.title}</div>}>
                  <p key={index} className="profile-text-p">
                    {item.paragraph}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 管理层介绍 */}
      <section className="management-team">
        <div className='section-hash-mark' id="management" />
        <div className="section-content" ref={managementRef}>
          <Row gutter={[48, 12]} align="top">
            <Col xs={24} lg={12}>
              <div className="manager-description">
                <h3>领导简介</h3>
                {managementProfile.descriptions?.map((item, index) => (
                  <Paragraph key={index}>{item}</Paragraph>
                ))}
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <Card className="manager-card single">
                <div className="avatar-wrapper">
                  <img src={managementProfile.avatar} alt={managementProfile.name} />
                </div>
                <Space className="manager-info" split="/">
                  <h3>{managementProfile.name}</h3>
                  <p>{managementProfile.title}</p>
                </Space>
              </Card>
            </Col>
          </Row>
          {/* <Row gutter={[48, 12]} align="middle">
            <Col xs={24} lg={24}>
              <div className="manager-more-details">
                {managementProfile.moreDetails.map((detail, index) => (
                  <div key={index} className="detail-item">
                    <h4>{detail.title}</h4>
                    <p>{detail.content}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row> */}
        </div>
      </section>

      {/* 资质与荣誉 */}
      <section className="section-qualifications">
        <div className='section-hash-mark' id="qualifications" />
        <div className="section-content" ref={qualificationsRef}>
          <div className="section-header">
            <Title level={2}>{qualifications.title}</Title>
          </div>
          {/* <div className="carousel-container">
            <Carousel className="carousel-wrapper" {...carouselConfig}>
              {qualifications.items.map((image, index) => (
                <div className="carousel-item" key={index}>
                  <img className="carousel-image" src={image} />
                </div>
              ))}
            </Carousel>
          </div> */}
          <Row gutter={[18, 24]}>
            {qualifications.items.map((item, index) => (
              <Col xs={24} sm={12} md={4} key={index}>
                <div 
                  className="qualification-item"
                  style={{ background: '#ffffff' }}
                >
                  <div className="tech-overlay">
                    <img src={item} alt="资质与荣誉" />
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
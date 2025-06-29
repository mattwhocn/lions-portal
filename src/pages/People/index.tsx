import React, { useState, useEffect, useMemo } from 'react';
import { Layout, Tabs, Affix } from 'antd';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
import { gradients } from '../../utils/gradients';
import { withErrorBoundary } from '@/components/ErrorBoundary';
import './style.less';

const { Content } = Layout;
const { TabPane } = Tabs;

const TabConfig = [{
  key: '党建工作',
  title: '党建工作',
  content: '党建工作，党建工作内容，党建工作内容，党建工作内容，党建工作内容，党建工作内容，党建工作内容，党建工作内容，党建工作内容'
}, {
  key: '工会工作',
  title: '工会工作',
  content: '工会工作，工会工作内容，工会工作内容，工会工作内容，工会工作内容，工会工作内容，工会工作内容，工会工作内容，工会工作内容'
}, {
  key: '团建工作',
  title: '团建工作',
  content: '团建工作，团建工作内容，团建工作内容，团建工作内容，团建工作内容，团建工作内容，团建工作内容，团建工作内容，团建工作内容'
}]

const People: React.FC = () => {
  usePageTitle('党群工作');
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('党建工作');
  const [showAffix, setShowAffix] = useState(false);
  
  const tabContent = useMemo(() => {
    return TabConfig.find(tab => tab.key === activeTab)?.content;
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.querySelector('.people-banner')?.getBoundingClientRect().height || 0;
      const scrollTop = window.scrollY;
      setShowAffix(scrollTop > bannerHeight - 64); // 64px 是 header 的高度
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Content className="people-page">
      {/* 顶部配图 */}
      <div 
        className="page-banner"
        style={{ background: gradients.techBlue }}
      >
        <div className="banner-content">
          <h1>党群工作</h1>
          <p>关注党群工作，了解工会、团建等相关内容</p>
        </div>
        <div className="tech-overlay" />
      </div>

      {/* 只让 Tabs 导航栏吸顶 */}
      <div className="tabs-wrapper">
        <Affix offsetTop={64}>
          <div className={`tabs-container ${showAffix ? 'affix-active' : ''}`}>
            <Tabs
              activeKey={activeTab}
              onChange={setActiveTab}
              className="people-tabs"
            >
              <TabPane tab="党建工作" key="党建工作" />
              <TabPane tab="工会工作" key="工会工作" />
              <TabPane tab="团建工作" key="团建工作" />
            </Tabs>
          </div>
        </Affix>
      </div>

      {/* 内容区域 */}
      <div className="people-container">
        <div className="people-content">
          {tabContent}
        </div>
      </div>
    </Content>
  );
};

export default withErrorBoundary(People); 
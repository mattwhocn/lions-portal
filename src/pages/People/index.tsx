import React, { useState, useEffect, useMemo } from 'react';
import { Layout, Tabs, Affix } from 'antd';
import { useNavigate } from 'react-router-dom';
import { withErrorBoundary } from '@/components/ErrorBoundary';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import news1Content from '../../assets/people-md/news1.md';
import news2Content from '../../assets/people-md/news1.md';
import news3Content from '../../assets/people-md/news1.md';
import { usePageTitle } from '../../hooks/usePageTitle';
import './style.less';

const { Content } = Layout;
const { TabPane } = Tabs;

const TabConfig = [{
  key: '党建工作',
  title: '党建工作',
  content: news1Content
}, {
  key: '工会工作',
  title: '工会工作',
  content: news2Content
}, {
  key: '团建工作',
  title: '团建工作',
  content: news3Content
}]

const People: React.FC = () => {
  usePageTitle('党群工作');
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('党建工作');
  const [showAffix, setShowAffix] = useState(false);
  
  const tabContent = useMemo(() => {
    return TabConfig.find(tab => tab.key === activeTab)?.content;
  }, [activeTab]);

  console.log(tabContent);

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
      <div className="page-banner">
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
        <div className="people-content markdown-content">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              // 自定义渲染组件
              h1: ({ node, ...props }) => <h1 className="md-h1" {...props} />,
              h2: ({ node, ...props }) => <h2 className="md-h2" {...props} />,
              p: ({ node, ...props }) => <p className="md-p" {...props} />,
              ul: ({ node, ...props }) => <ul className="md-ul" {...props} />,
              ol: ({ node, ...props }) => <ol className="md-ol" {...props} />,
              li: ({ node, ...props }) => <li className="md-li" {...props} />,
              img: ({ node, ...props }) => <img className="md-img" {...props} />,
              blockquote: ({ node, ...props }) => <blockquote className="md-blockquote" {...props} />,
            }}
          >
            {tabContent}
          </ReactMarkdown>  
        </div>
      </div>
    </Content>
  );
};

export default withErrorBoundary(People); 
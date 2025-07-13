import React, { useState, useEffect, useMemo } from 'react';
import { Layout, Tabs, Affix, Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { withErrorBoundary } from '@/components/ErrorBoundary';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import people1Content from '../../assets/people-md/people1.md';
import people2Content from '../../assets/people-md/people2.md';
import people3Content from '../../assets/people-md/people3.md';
import { usePageTitle } from '../../hooks/usePageTitle';
import './style.less';

const { Content } = Layout;

const MenuItems = [{
  key: '党建工作',
  label: '党建工作',
  icon: <AppstoreOutlined />,
  content: people1Content
}, {
  key: '工会工作',
  label: '工会工作',
  icon: <AppstoreOutlined />,
  content: people2Content
}, {
  key: '团建工作',
  label: '团建工作',
  icon: <AppstoreOutlined />,
  content: people3Content
}]

const People: React.FC = () => {
  usePageTitle('党群工作');
  const [selectedKey, setSelectedKey] = useState(['党建工作']);
  const [showAffix, setShowAffix] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.querySelector('.people-banner')?.getBoundingClientRect().height || 0;
      const scrollTop = window.scrollY;
      setShowAffix(scrollTop > bannerHeight - 64); // 64px 是 header 的高度
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = useMemo(() => {
    const item = MenuItems.find((item) => item.key === selectedKey[0]);
    return item?.content || '';
  }, [selectedKey]);

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

      <div className="people-section-wrapper">
        <div className='people-menus-wrapper'>
          <Affix offsetTop={120}>
            <Menu
              defaultSelectedKeys={selectedKey}
              className="people-menus"
              items={MenuItems}
              onClick={(item) => {
                setSelectedKey([item.key]);
              }}
            />
          </Affix>
        </div>
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
              {content}
            </ReactMarkdown> 
          </div>
        </div>
      </div>
    </Content>
  );
};

export default withErrorBoundary(People); 
import React, { useState, useEffect, useMemo } from 'react';
import { Layout, Card, Affix, Menu, Tabs } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { withErrorBoundary } from '@/components/ErrorBoundary';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import people2Content from '../../assets/people-md/people2.md';
import people3Content from '../../assets/people-md/people3.md';
import { usePageTitle } from '../../hooks/usePageTitle';
import Organization from './Components/Organization';
import Party from './Components/Party';
import './style.less';
import { useIsMobile } from '@/hooks/useIsMobile';

const { Content } = Layout;
const { TabPane } = Tabs;

type MenuItem = {
  key: string;
  label: string;
  icon: React.ReactNode;
  type: 'markdown';
  content: string;
} | {
  key: string;
  label: string;
  icon: React.ReactNode;
  type: 'component';
  content: React.ReactNode;
};

const MenuItems: MenuItem[] = [
  {
    key: '两新组织',
    label: '两新组织',
    icon: <AppstoreOutlined />,
    type: 'component',
    content: <Organization />,
  },
  {
    key: '党建工作',
    label: '党建工作',
    icon: <AppstoreOutlined />,
    type: 'component',
    content: <Party />,
  },
  {
    key: '工会工作',
    label: '工会工作',
    icon: <AppstoreOutlined />,
    type: 'markdown',
    content: people2Content
  },
  {
    key: '团建工作',
    label: '团建工作',
    icon: <AppstoreOutlined />,
    type: 'markdown',
    content: people3Content
  }
]

const People: React.FC = () => {
  usePageTitle('党群工作');
  const isMobile = useIsMobile();
  const [selectedKey, setSelectedKey] = useState(['两新组织']);
  const [activeTab, setActiveTab] = useState('两新组织');
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

  const selectedItem = useMemo(() => {
    if (isMobile) {
      return MenuItems.find((item) => item.key === activeTab);
    } else {
      return MenuItems.find((item) => item.key === selectedKey[0]);
    }
  }, [selectedKey, activeTab]);

  return (
    <Content className={`people-page ${isMobile ? 'people-page-mobile' : ''}`}>
      {/* 顶部配图 */}
      <div className="page-banner">
        <div className="banner-content">
          <h1>党群工作</h1>
          <p>关注党群工作，了解工会、团建等相关内容</p>
        </div>
        <div className="tech-overlay" />
      </div>

      <div className="people-section-wrapper">
        {/* 只让 Tabs 导航栏吸顶 */}
        {isMobile ? (
          <div className="tabs-wrapper">
            <Affix offsetTop={64}>
              <div className={`tabs-container ${showAffix ? 'affix-active' : ''}`}>
                <Tabs
                  activeKey={activeTab}
                  onChange={setActiveTab}
                  className="news-tabs"
                >
                  {MenuItems.map(item => (
                    <TabPane tab={item.label} key={item.key} />
                  ))}
                </Tabs>
              </div>
            </Affix>
          </div>
        ) : (
          <div className='people-menus-wrapper'>
            <Affix offsetTop={120}>
              <Menu
                defaultSelectedKeys={selectedKey}
                className="people-menus"
                items={MenuItems.map(item => ({
                  key: item.key,
                  label: item.label,
                  icon: item.icon,
                }))}
                onClick={(item) => {
                  setSelectedKey([item.key]);
                }}
              />
            </Affix>
          </div>
        )}

        <Card className="people-container">
          {selectedItem?.type === 'component' && (
            <div className="people-content component-content">
              {selectedItem.content}
            </div>
          )}
          {selectedItem?.type === 'markdown' && (
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
                {selectedItem.content}
              </ReactMarkdown> 
            </div>
          )}
        </Card>
      </div>
    </Content>
  );
};

export default withErrorBoundary(People); 
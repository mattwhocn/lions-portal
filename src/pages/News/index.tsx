import React, { useState, useEffect, useMemo } from 'react';
import { Layout, Tabs, Row, Col, Card, Affix, Tag, Empty } from 'antd';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
import { getNewsTagColor } from '../../utils/newsHelpers';
import { newsContent, NewsItem } from './helper';
import './style.less';
import axios from 'axios';
import { formatExcelDate } from './Detail';
import { withErrorBoundary } from '@/components/ErrorBoundary';
import { API_DOMAIN } from '@/constants';

const { Content } = Layout;
const { TabPane } = Tabs;

const News: React.FC = () => {
  usePageTitle('新闻动态');
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('党建工作');
  const [showAffix, setShowAffix] = useState(false);
  const [newsList, setNewsList] = useState<NewsItem[]>(newsContent);

  const [sortedNews, filteredNews] = useMemo(() => {
    // 可以进行排序、过滤等操作
    const sortedNews = newsList.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    // 根据当前 tab 筛选新闻
    const filteredNews = sortedNews.filter(
      news => news.category === activeTab
    );
    return [sortedNews, filteredNews];
  }, [newsList, activeTab]);

  // 接口请求
  useEffect(() => {
    const fetchNewsList = async () => {
      try {
        const response = await axios.get(`${API_DOMAIN}/data/json/news/news.json`);
        const newsList = response.data?.map((item: any) => ({
          ...item,
          date: formatExcelDate(item.date),
          category: item.type,
        }))
        console.log(newsList);
        setNewsList(newsList);
      } catch (error) {
        console.error('获取news配置失败:', error);
      }
    };
    fetchNewsList();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.querySelector('.news-banner')?.getBoundingClientRect().height || 0;
      const scrollTop = window.scrollY;
      setShowAffix(scrollTop > bannerHeight - 64); // 64px 是 header 的高度
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsClick = (id: string) => {
    navigate(`/news/${id}`);
  };

  return (
    <Content className="news-page">
      {/* 顶部配图 */}
      <div className="page-banner">
        <div className="banner-content">
          <h1>新闻动态</h1>
          <p>了解最新党建工作，公司新闻、行业规范</p>
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
              className="news-tabs"
            >
              <TabPane tab="党建工作" key="党建工作" />
              <TabPane tab="公司新闻" key="公司新闻" />
              <TabPane tab="行业规范" key="行业规范" />
            </Tabs>
          </div>
        </Affix>
      </div>

      {/* 新闻内容区域 */}
      <div className="news-container">
        <div className="news-content">
          <Row gutter={[24, 24]}>
              {filteredNews.length ? filteredNews.map(news => (
                <Col xs={24} sm={12} lg={8} key={news.id}>
                  <Card 
                    className="news-card"
                    onClick={() => handleNewsClick(news.id)}
                  >
                    <div className="news-image">
                      <div className="image-overlay">
                        <img src={news.cover} alt={news.title} />
                      </div>
                    </div>
                    <div className="news-info">
                      <Tag color={getNewsTagColor(news.category)}>{news.category}</Tag>
                      <h3>{news.title}</h3>
                      <span className="news-date">{news.date}</span>
                    </div>
                  </Card>
                </Col>
              )) : (
              <Col span={24}>
                <Empty style={{ margin: '100px' }} description="暂无相关新闻" />
              </Col>
            )}
            </Row>
        </div>
      </div>
    </Content>
  );
};

export default withErrorBoundary(News); 
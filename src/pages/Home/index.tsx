import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Layout, Row, Col, Typography, Card, Button, Carousel, Tag } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
import { getNewsTagColor } from '../../utils/newsHelpers';
import banner0 from '../../assets/images/banner/banner0.png';
import banner1 from '../../assets/images/banner/banner1.png';
import companyImage from '../../assets/images/about/company.png';
import partyBuilding from '../../assets/images/people/party-building.png';
import { companyProfile } from '../About';
import { newsContent, NewsItem } from '../News/helper';
import { formatExcelDate } from '../News/Detail';
import { withErrorBoundary } from '@/components/ErrorBoundary';
import { API_DOMAIN } from '@/constants';
import './style.less';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// 轮播图数据
const defaultBannerData = [
  {
    title: '',
    description: '',
    image: banner0,
  },
  {
    title: '',
    description: '',
    image: banner1,
  }
];

const Home: React.FC = () => {
  usePageTitle('首页');
  const navigate = useNavigate();
  const [hoveredNews, setHoveredNews] = useState<NewsItem | null>(null);
  const [bannerData, setBannerData] = useState<any[]>(defaultBannerData);
  const [newsList, setNewsList] = useState<NewsItem[]>(newsContent);

  useEffect(() => {
    // 初始化时为第一个 slide 添加 active 类
    const firstSlide = document.querySelector('.carousel-item-0');
    if (firstSlide) {
      firstSlide.classList.add('active');
    }
    // 接口请求
    fetchBannerConfig();
    fetchNewsList();
  }, []);

  const fetchBannerConfig = async () => {
    try {
      const response = await axios.get(`${API_DOMAIN}/data/json/banner/banner.json`);
      setBannerData(response.data);
    } catch (error) {
      console.error('获取banner配置失败:', error);
    }
  };

  const fetchNewsList = async () => {
    try {
      const response = await axios.get(`${API_DOMAIN}/data/json/news/news.json`);
      const newsList = response.data?.map((item: any) => ({
        ...item,
        date: formatExcelDate(item.date),
        category: item.type,
      }))
      setNewsList(newsList);
    } catch (error) {
      console.error('获取news配置失败:', error);
    }
  };

  // 获取每个分类最新的一条新闻
  const latestNews = useMemo(() => {
    // 按分类对新闻进行分组
    const newsByCategory = newsContent.reduce((acc, news) => {
      const category = news.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(news);
      return acc;
    }, {} as Record<string, NewsItem[]>);

    const categaryOrder = ['党建工作', '公司新闻' , '行业规范']
    // 对每个分类的新闻按日期排序，并取最新的一条
    return categaryOrder
      .map(category => {
        const categoryNews = newsByCategory[category];
        return categoryNews?.sort((a, b) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        )[0];
      })
      .slice(0, 3); // 只取前3个分类的最新新闻
  }, [newsList]);

  // 获取当前显示的新闻
  const displayedNews = useMemo(() => {
    return hoveredNews || latestNews[0];
  }, [hoveredNews, latestNews]);

  return (
    <Content className="home-page">
      {/* 轮播图 */}
      <Carousel 
        autoplay
        className="home-carousel"
        beforeChange={(current, next) => {
          // 移除当前 slide 的 active 类
          const currentSlide = document.querySelector(`.carousel-item-${current}`);
          if (currentSlide) {
            currentSlide.classList.remove('active');
          }
          // 计算实际的下一个索引
          const nextIndex = next % bannerData.length;
          // 为下一个 slide 添加 active 类
          const nextSlideList = document.querySelectorAll(`.carousel-item-${nextIndex}`);
          // 这个Carousel为了循环轮播，最后一张轮播图会显示两次，所以需要遍历所有的节点
          if (nextSlideList.length > 0) {
            nextSlideList.forEach(slide => {
              slide.classList.add('active');
            });
          }
        }}
      >
        {bannerData.map((item, index) => (
          <div key={item?.title}>
            <div className={`carousel-item carousel-item-${index}`}>
              <div className="carousel-content">
                {item?.image && <img 
                  src={item?.image}
                  alt={item?.title}
                  className="carousel-image"
                />}
                <div className="carousel-text">
                  <p>{item?.title}</p>
                  <h2>{item?.description}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* 两新组织*/}
      <section className="party-working">
        <div className="section-content">
          <div className="section-header">
            <Title level={2}>两新组织</Title>
          </div>
          <div className="global-map">
            <div className="map-overlay">
              <img src={partyBuilding} alt="globalLayout" />
            </div>
          </div>
          <div className='global-description'>
            <h2>两新组织，两新组织介绍</h2>  
            <p>
              两新组织，两新组织介绍，两新组织，两新组织介绍，两新组织，两新组织介绍，两新组织，两新组织介绍，两新组织，两新组织介绍，两新组织，两新组织介绍，两新组织，两新组织介绍，两新组织，两新组织介绍，两新组织，两新组织介绍，两新组织，两新组织介绍
            </p>
          </div>
        </div>
      </section>

      {/* 公司简介 */}
      <section className="company-intro">
        <div className="intro-content">
          <div className="section-header">
            <Title level={2}>公司简介</Title>
          </div>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <Paragraph className='intro-content-text'>
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
              <Link to="/about">
                <Button type="primary" size="large">
                  了解更多 <RightOutlined />
                </Button>
              </Link>
            </Col>
            <Col xs={24} lg={12}>
              <div className="intro-image">
                <div className="tech-overlay">
                  <img src={companyImage} alt="companyImage" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* 新闻动态 */}
      <section className="news-section">
        <div className="section-content">
          <div className="section-header">
            <Title level={2}>新闻动态</Title>
            <Link to="/news" className="view-more">
              查看更多 <RightOutlined />
            </Link>
          </div>
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <div 
                className="featured-news"
                onClick={() => navigate(`/news/${displayedNews?.id}`)}
              >
                <div className="news-image">
                  <div className="image-overlay">
                    {/* <img src={displayedNews?.cover} alt={displayedNews?.title} /> */}
                    <div style={{ width: '100%', height: '100%', background: 'blue' }} />
                  </div>  
                </div>
                <div className="news-content">
                  <h3>{displayedNews?.title}</h3>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="news-list">
                {latestNews.map((news, index) => (
                  <Card 
                    key={index}
                    className="news-card"
                    onMouseEnter={() => setHoveredNews(news)}
                    onMouseLeave={() => setHoveredNews(null)}
                  >
                    <div className="news-card-content">
                      <div className="news-info">
                        <div className="news-header">
                          <h3>{news?.title}</h3>
                          <Link to={`/news/${news?.id}`} className="view-detail">
                            查看详情 <RightOutlined />
                          </Link>
                        </div>
                        <div className="news-meta">
                          <Tag color={getNewsTagColor(news?.category)} bordered={false}>
                            {news?.category}
                          </Tag>
                          <span className="news-date">{news?.date}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Content>
  );
};

export default withErrorBoundary(Home); 
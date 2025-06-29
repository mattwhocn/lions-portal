import React, { useEffect, useState } from 'react';
import { Layout, Typography, Breadcrumb, Space, Tag, Spin, message, Empty } from 'antd';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { LeftOutlined, CalendarOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { usePageTitle } from '../../../hooks/usePageTitle';
import { getNewsTagColor } from '../../../utils/newsHelpers';
import { newsContent, NewsItem } from '../helper';
import { gradients } from '@/utils/gradients';
import axios from 'axios';
import './style.less';
import { withErrorBoundary } from '@/components/ErrorBoundary';
import { API_DOMAIN } from '@/constants';

const { Content } = Layout;
const { Title } = Typography;

export const isValidUrl = (str: string): boolean => {
  try {
    // 使用 URL 构造函数验证
    new URL(str);
    // 额外验证是否包含常见的协议
    const protocols = ['http:', 'https:', 'ftp:'];
    const url = new URL(str);
    if (!protocols.includes(url.protocol)) {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
};

/**
 * 将Excel数字日期转换为可读的日期字符串
 * @param excelDate Excel数字日期（例如：42735）
 * @param format 输出格式，默认 'YYYY-MM-DD'
 * @returns 格式化后的日期字符串
 */
export const formatExcelDate = (excelDate: number | string, format: string = 'YYYY-MM-DD'): string => {
  // 如果输入是字符串格式的日期,直接返回
  if (typeof excelDate === 'string') {
    return excelDate;
  }

  // Excel日期起始点是1900年1月1日
  // 需要减去2因为Excel错误地将1900年认为是闰年
  const EXCEL_START_DATE = new Date(Date.UTC(1899, 11, 30));
  
  // 将Excel数字转换为毫秒数
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const dateObj = new Date(EXCEL_START_DATE.getTime() + excelDate * millisecondsPerDay);

  // 检查日期是否有效
  if (isNaN(dateObj.getTime())) {
    console.error('无效的Excel日期:', excelDate);
    return '';
  }
  
  // 格式化日期
  const year = dateObj.getUTCFullYear();
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getUTCDate()).padStart(2, '0');
  
  // 根据format参数返回不同格式
  switch (format) {
    case 'YYYY年MM月DD日':
      return `${year}年${month}月${day}日`;
    case 'MM/DD/YYYY':
      return `${month}/${day}/${year}`;
    case 'DD/MM/YYYY':
      return `${day}/${month}/${year}`;
    default:
      return `${year}-${month}-${day}`;
  }
};

const NewsDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [newsList, setNewsList] = useState<NewsItem[]>(newsContent);
  const [newsData, setNewsData] = useState<NewsItem | null>(() => {
    if (id) {
      return newsList.find(news => news.id === id) ?? null;
    }
    return null;
  });
  const [content, setContent] = useState<string>('');

  // 接口请求
  useEffect(() => {
    setLoading(true);
    const fetchNewsList = async () => {
      try {
        const response = await axios.get(`${API_DOMAIN}/data/json/news/news.json`);
        const newsList = response.data?.map((item: any) => ({
          ...item,
          date: formatExcelDate(item.date),
          category: item.type,
        }))
        const newsData = newsList.find((news: any) => news.id === Number(id));
        setNewsList(newsList);
        setNewsData(newsData);
      } catch (error) {
        console.error('获取news配置失败:', error);
      }
    };
    fetchNewsList();
    setLoading(false);
  }, []);

  // 获取news content
  useEffect(() => {
    if (newsData && newsData.content) {
      if (isValidUrl(newsData.content)) {
        fetch(newsData.content, {
          method: 'GET',
          mode: 'cors'
        })
        .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
          })
        .then(markdownContent => {
            setContent(markdownContent);
          })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
          });
      } else {
        setContent(newsData.content);
      }
    } 
  }, [newsData]);
  
  usePageTitle(newsData?.title ? `${newsData.title} - 新闻动态` : '新闻动态');

  return (
    <Content className="news-detail-page">
      {/* 顶部配图 */}
      <div className="page-banner" style={{ background: gradients.techBlue }}>
        <div className="banner-content">
          <h1>{newsData?.title}</h1>
        </div>
        <div className="tech-overlay" />
      </div>

      <div className="detail-container">
        {/* 面包屑导航 */}
        <Breadcrumb className="detail-breadcrumb">
          <Breadcrumb.Item>
            <Link to="/">首页</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/news">新闻动态</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{newsData?.category}</Breadcrumb.Item>
        </Breadcrumb>

        {/* 返回按钮 */}
        <div className="back-link" onClick={() => navigate(-1)}>
          <LeftOutlined /> 返回列表
        </div>

        {/* 新闻内容 */}
        <Spin size="large" spinning={loading}>
          {newsData && (
            <div className="news-content">
              <Space className="news-meta" size={16}>
                <Tag color={getNewsTagColor(newsData.category)}>{newsData.category}</Tag>
                <span className="news-date">
                  <CalendarOutlined /> {newsData.date}
                </span>
              </Space>
              
              <div className="news-body markdown-content">
                {content ? (
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
                ) : (
                  <Empty description="加载中..." />
                )}
              </div>
            </div>
          )}
        </Spin>
      </div>
    </Content>
  );
};

export default withErrorBoundary(NewsDetail); 
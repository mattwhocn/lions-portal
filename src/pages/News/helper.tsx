// 直接导入 markdown 文件
import news1Content from '../../assets/news-md/news1.md';
import news2Content from '../../assets/news-md/news2.md';
import news3Content from '../../assets/news-md/news3.md';
export type NewsCategory = '公司新闻' | '行业规范' | '党建工作';

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: NewsCategory;
  cover?: string;
  content: string;
}

/**
 * 从 Markdown 内容中提取第一个图片链接
 * @param content Markdown格式的文章内容
 * @returns 图片链接或undefined
 */
export const extractFirstImageUrl = (content: string): string | undefined => {
  // 匹配 Markdown 图片语法: ![alt](url) 或 ![](url)
  const markdownImgRegex = /!\[.*?\]\((.*?)\)/;
  const match = content.match(markdownImgRegex);
  return match ? match[1] : undefined;
}; 

export const newsContent: NewsItem[] = [
  {
    id: '1',
    title: "党建工作,党建工作党建工作,党建工作党建工作,党建工作,党建工作党建工作,党建工作",
    date: "2025-1-21",
    category: "党建工作",
    content: news1Content,
    cover: extractFirstImageUrl(news1Content)
  },
  {
    id: '2',
    title: "公司新闻,公司新闻公司新闻,公司新闻公司新闻公司新闻,公司新闻,公司新闻公司新闻",
    date: "2024-10-28",
    category: "公司新闻",
    content: news2Content,
    cover: extractFirstImageUrl(news2Content)
  },
  {
    id: '3',
    title: "行业规范,行业规范行业规范行业规范,行业规范,行业规范行业规范,行业规范行业规范",
    date: "2025-1-9",
    category: "行业规范",
    content: news3Content,
    cover: extractFirstImageUrl(news3Content)
  },
];
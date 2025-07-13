// 直接导入 markdown 文件
import news1Content from '../../assets/news-md/news1.md';
import news2Content from '../../assets/news-md/news2.md';
import news3Content from '../../assets/news-md/news3.md';
import news4Content from '../../assets/news-md/news4.md';
import news5Content from '../../assets/news-md/news5.md';
export type NewsCategory = '公司新闻' | '行业规范' | '党建工作';

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: NewsCategory;
  cover?: string;
  content: string;
  summary: string;
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
    title: "公司多举措开展庆祝中国共青团成立100周年系列活动",
    date: "2025-1-21",
    category: "党建工作",
    summary: "今年是中国共产主义青年团成立100周年。公司为进一步学习贯彻党的十九大精神和十九届历次全会精神，以迎接和学习宣传贯彻党的二十大为主线，开展庆祝中国共青团成立100周年系列活动，团结引领广大团员青年永远跟党走、奋进新征程。",
    content: news1Content,
    cover: extractFirstImageUrl(news1Content)
  },
  {
    id: '2',
    title: "民营保安公司的发展前景与优势",
    date: "2024-10-28",
    category: "公司新闻",
    summary: "2010年《保安服务管理条例》施行以来，贵州保安服务市场逐步开放，民营安企业进入历史舞台，通过蓬勃发展，成果丰硕，呈现出了一派繁荣景象。经过8年的发展，民营保安企业已经占据了保安市场的半壁江山，成为平安中国建设的一股不可或缺的重要力量。进入新时代，面对市场机遇与挑战，民营保安企业应发挥自身的突出优势，通过创新发展，转型升级，不断发展壮大，扩展市场，迎接更加美好明天。",
    content: news2Content,
    cover: extractFirstImageUrl(news2Content)
  },
  {
    id: '3',
    title: "守护北京 守护家园 抗疫工作纪实",
    date: "2024-10-28",
    category: "公司新闻",
    summary: "自2019年新冠病毒疫情爆发以来，随着全球疫情不断加速蔓延，目前北京疫情防控工作已进入常态化。 近期，由于“奥密克戎”病毒的蔓延，全国各省市都在积极抗疫，北京作为首都，政府针对疫情也发布了严格的疫情防控政策，公司参与到了许多一线疫情防控任务中，保安队员在疫情防控期间尽职尽责，圆满完成各项安保工作任务，为首都的防控工作出一份贡献。",
    content: news3Content,
    cover: extractFirstImageUrl(news3Content)
  },
  {
    id: '4',
    title: "扎实做好2021年“两会”安保任务",
    date: "2024-10-28",
    category: "公司新闻",
    summary: "为切实做好2021年“两会”安保工作，落实上级领导的工作部署，提早准备，调整各驻勤点安保力量，以最严的措施、最实的作风、最佳的状态，加强与有关部门的协作配合，全力以赴实施常态化疫情防控的安保任务，加强应急管理和值班值守，提升应急处置能力，加大巡查力度。各驻勤点负责人对每个岗位的应对措施以及每个岗位执勤人员的安排，逐一过问，亲自督查，确保了责任到人、工作到位，圆满完成全国“两会”安保执勤任务。",
    content: news4Content,
    cover: extractFirstImageUrl(news4Content)
  },
  {
    id: '5',
    title: "保安服务管理条例（国务院令第564号）",
    date: "2025-1-9",
    category: "行业规范",
    summary: "为了规范保安服务活动，加强对从事保安服务的单位和保安员的管理，保护人身安全和财产安全，维护社会治安，制定本条例。",
    content: news5Content,
    cover: extractFirstImageUrl(news5Content)
  },
];
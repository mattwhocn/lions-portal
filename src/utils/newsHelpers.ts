// 新闻类型对应的颜色
export const getNewsTagColor = (category: string) => {
  switch (category) {
    case '公司新闻':
      return 'blue';
    case '行业规范':
      return 'gold';
    case '党建工作':
      return 'purple';
    default:
      return 'blue';
  }
};
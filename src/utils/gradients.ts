interface GradientConfig {
  type?: 'linear' | 'radial';
  angle?: number;
  colors: string[];
  overlay?: boolean;
}

export const createGradient = ({
  type = 'linear',
  angle = 135,
  colors,
  overlay = false
}: GradientConfig): string => {
  if (type === 'linear') {
    const gradient = `linear-gradient(${angle}deg, ${colors.join(', ')})`;
    if (overlay) {
      return `${gradient}, ${createTechOverlay()}`;
    }
    return gradient;
  }
  
  const gradient = `radial-gradient(circle at center, ${colors.join(', ')})`;
  if (overlay) {
    return `${gradient}, ${createTechOverlay()}`;
  }
  return gradient;
};

// 科技感网格叠加层
const createTechOverlay = () => `
  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
  linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px)
`;

// 预定义的渐变主题
export const gradients = {
  // 深邃科技蓝
  techBlue: createGradient({
    colors: ['#001529', '#002952', '#003d7a', '#0050b3'],
    overlay: true
  }),
  
  // 商务深蓝
  businessBlue: createGradient({
    colors: ['#001529', '#003366', '#004c99'],
    angle: 120
  }),
  
  // 科技金
  techGold: createGradient({
    colors: ['#874d00', '#faad14', '#ffd666'],
    angle: 45,
    overlay: true
  }),
  
  // 高级灰
  premiumGray: createGradient({
    colors: ['#262626', '#434343', '#595959'],
    angle: 60
  }),
  
  // 科技感混合
  techMix: createGradient({
    colors: ['#001529', '#003366', '#874d00', '#d48806'],
    angle: 165,
    overlay: true
  }),

  // AI感的渐变
  aiGradient: createGradient({
    colors: ['#001529', '#003366', '#874d00', '#d48806'],
    angle: 165,
    overlay: true
  })
}; 
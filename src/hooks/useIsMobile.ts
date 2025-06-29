import { useState, useEffect } from 'react';

export const useIsMobile = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // 添加事件监听
    window.addEventListener('resize', handleResize);

    // 清理事件监听
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}; 
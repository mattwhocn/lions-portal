import React, { useState, useEffect } from 'react';
import { Affix } from 'antd';
import './style.less';

interface ElevatorItem {
  key: string;
  title: string;
}

interface ElevatorProps {
  items: ElevatorItem[];
  activeKey?: string;
  onChange?: (key: string) => void;
}

const Elevator: React.FC<ElevatorProps> = (props: ElevatorProps) => {
  const { items,activeKey, onChange } = props;

  // const [activeKey, setActiveKey] = useState<string>(props.activeKey || items[0].key);

  // // 监听滚动，更新当前激活的项
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY + 100; // 添加偏移量以提前激活

  //     for (let i = items.length - 1; i >= 0; i--) {
  //       const element = document.getElementById(items[i].key);
  //       if (element && element.offsetTop <= scrollPosition) {
  //         setActiveKey(items[i].key);
  //         onChange?.(items[i].key);
  //         break;
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [items]);

  // // 点击导航项
  // const handleClick = (key: string) => {
  //   const element = document.getElementById(key);
  //   if (element) {
  //     const offset = element.offsetTop - 80; // 考虑固定头部的高度
  //     window.scrollTo({
  //       top: offset,
  //       behavior: 'smooth'
  //     });
  //     onChange?.(key);
  //   }
  // };

  return (
    <Affix className="elevator-container" offsetTop={120}>
      <div className="elevator">
        <div className="elevator-title">导航</div>
        <ul className="elevator-list">
          {items.map(item => (
            <li 
              key={item.key}
              className={`elevator-item ${activeKey === item.key ? 'active' : ''}`}
              onClick={() => onChange?.(item.key)}
            >
              <span className="elevator-dot" />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </Affix>
  );
};

export default Elevator; 
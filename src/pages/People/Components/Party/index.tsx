import { withErrorBoundary } from "@/components/ErrorBoundary"
import { usePageTitle } from "@/hooks/usePageTitle";
import { Layout, Typography, Carousel, Card } from "antd";
import party1 from '../../../../assets/images/people/party-building.png';

import './index.less';

const { Content } = Layout;

export const partyData = {
  title: '党建工作',
  content: '公司党支部秉承“像做企业一样做党建”的工作理念，立足企业实际，不断致力于价值型、服务型党组织打造；作为公司社会职能管理的综合性部门，以公司党支部为主导，有效整合工会、共青团、妇联等社会职能和资源，突显企业社会职责，实现组织集约化管理的最大化价值。',
  image: party1,
}

const Party = () => {
  return (
    <Content className="party-page">
      <div className="section-content markdown-content">
        <div className='party-title'>
          <h2>{partyData.title}</h2>
        </div>
        <div className='party-description'>
          <p>{partyData.content}</p>
        </div>
        <div className="intro-image">
          <div className="tech-overlay">
            <img src={partyData.image} alt="partyImage" />
          </div>
        </div>
      </div>
    </Content>
  )
}

export default withErrorBoundary(Party);

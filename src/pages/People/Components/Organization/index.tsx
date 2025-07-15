import { withErrorBoundary } from "@/components/ErrorBoundary"
import { usePageTitle } from "@/hooks/usePageTitle";
import { Layout, Typography, Carousel, Card } from "antd";
import organization1 from '../../../../assets/images/people/organization1.jpg';
import organization2 from '../../../../assets/images/people/organization2.jpg';
import organization3 from '../../../../assets/images/people/organization3.jpg';
import organization4 from '../../../../assets/images/people/organization4.jpg';

import './index.less';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export const organizationData = {
  title: '两新组织',
  subTitle: '“两新” 组织党建工作：内涵、目标与价值',
  content: '“两新”组织是新经济组织和新社会组织的简称。新经济组织包括私营企业、外商投资企业等各类非国有集体独资的经济组织，新社会组织是社会团体和民办非企业单位的统称。 加强两新组织党建工作，旨在扩大党的工作覆盖面，创新党的活动方式，落实“党的组织、党的工作”在两新组织中全覆盖的任务，促进两新组织健康发展，全面提升两新组织党建工作水平，发挥两新组织在经济社会发展中的积极作用。',
  image: organization1,
  images: [
    organization1,
    organization2,
    organization3,
    organization4,
  ]
}

const carouselConfig = {
  centerMode: true,
  slidesToShow: 2,
  speed: 2000,
  autoplaySpeed: 2000,
  centerPadding: '60px',
  infinite: true,
  autoplay: true,
  arrows: true,
};

const Organization = (props: { showTitle: boolean }) => {
  const { showTitle = true } = props;

  return (
    <Content className="organization-page">
      <div className="section-content">
        {showTitle && (
          <div className='organization-title'>
            <h2>{organizationData.title}</h2>
          </div>
        )}
        <div className="carousel-container">
          <Carousel className="carousel-wrapper" {...carouselConfig}>
            {organizationData.images.map((image, index) => (
              <div className="carousel-item" key={index}>
                <img className="carousel-image" src={image} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className='organization-description'>
          <h2>{organizationData.subTitle}</h2>  
          <p>{organizationData.content}</p>
        </div>
      </div>
    </Content>
  )
}

export default withErrorBoundary(Organization);
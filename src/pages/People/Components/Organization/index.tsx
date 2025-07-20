import { withErrorBoundary } from "@/components/ErrorBoundary"
import { Layout, Carousel, Card } from "antd";
import organization1 from '../../../../assets/images/people/organization1.jpg';
import organization2 from '../../../../assets/images/people/organization2.jpg';
import organization3 from '../../../../assets/images/people/organization3.jpg';
import organization4 from '../../../../assets/images/people/organization4.jpg';

import './index.less';
import { useMemo } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

const { Content } = Layout;

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



const Organization = (props: { bigMode: boolean }) => {
  const { bigMode = false } = props;
  const isMobile = useIsMobile();

  const carouselConfig = useMemo(() => {
    if (isMobile) {
      return {
        infinite: true,
        autoplay: true,
        arrows: true,
      };
    }
    return {
      centerMode: true,
      slidesToShow: bigMode ? 1 : 2,
      speed: 2000,
      easing: 'ease',
      autoplaySpeed: 2000,
      centerPadding: '60px',
      infinite: true,
      autoplay: true,
      arrows: true,
    };
  }, [bigMode, isMobile]);

  return (
    <Content className={`organization-page ${isMobile ? 'organization-page-mobile' : ''}`}>
      <div className="section-content">
        {!bigMode && (
          <div className='organization-title'>
            <h2>{organizationData.title}</h2>
          </div>
        )}
        <div className={`carousel-container ${bigMode ? 'carousel-container-big' : ''}`}>
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
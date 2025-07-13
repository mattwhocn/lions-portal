import { withErrorBoundary } from "@/components/ErrorBoundary"
import { usePageTitle } from "@/hooks/usePageTitle";
import { Layout, Typography, Row, Col, Card, Carousel } from "antd";
import business1 from '@/assets/images/business/保安培训.png';
import business2 from '@/assets/images/business/大型护卫.jpg';
import business3 from '@/assets/images/business/公安辅警.png';
import business4 from '@/assets/images/business/护卫.png';
import business5 from '@/assets/images/business/门卫服务.png';
import business6 from '@/assets/images/business/停车场服务.png';
import business7 from '@/assets/images/business/消防中控.png';
import business8 from '@/assets/images/business/巡逻服务.png';

import { useMemo } from "react";

import './style.less';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

interface BusinessCase {
  id: number;
  type: string;
  title: string;
  description: string;
  image: string;
  images: string[];
  extra?: string[];
}

const carouselConfig = {
  centerMode: true,
  slidesToShow: 3,
  speed: 2000,
  autoplaySpeed: 2000,
  centerPadding: '60px',
  infinite: true,
  autoplay: true,
  arrows: true,
};

const Business = () => {
  usePageTitle('业务领域');

  const businessCases: BusinessCase[] = [
    {
      id: 0,
      type: "核心产品",
      title: "业务介绍",
      description: `北京雄狮国际保安服务有限公司（公安部一级资质）以“科技+精锐”双核驱动安全服务。提供智能门禁、AI监控巡逻、大型活动全流程安保及跨境北斗押运等高阶人防技防服务；独创“雄鹰安防云平台”提升响应效能40%，区域机动分队15分钟抵达应急现场。专注校园反欺凌、企业反间谍等专项保障，百万责任险兜底，7×24小时专属服务，践行“守护安全，使命必达”承诺。`,
      image: business1,
      images: [business1, business2, business3, business4, business5, business6, business7, business8],
    },
    {
      id: 1,
      type: "定制产品",
      title: "业务领域Case1",
      description: `业务领域，业务领域业务领域业务领域业务领域业务领域业务领域，业务领域业务领域，业务领域业务领域业务领域业务领域，业务领域，业务领域，业务领域业务领域，业务领域业务领域，业务领域业务领域业务领域业务领域业务领域。`,
      image: '1',
      images: ['1', '2'],
    },
    {
      id: 2,
      type: "定制产品",
      title: "业务领域Case1",
      description: `业务领域，业务领域业务领域业务领域业务领域业务领域业务领域，业务领域业务领域，业务领域业务领域业务领域业务领域，业务领域，业务领域，业务领域业务领域，业务领域业务领域，业务领域业务领域业务领域业务领域业务领域，业务领域，业务领域，业务领域，业务领域，业务领域，业务领域，业务领域，业务领域，业务领域，业务领域`,
      image: '1',
      images: ['1', '2'],
    },
  ]

  const [coreProductsData, customCases] = useMemo(() => {
    const coreProductsData = businessCases.filter(item => item.type === '核心产品') ?? [];
    const customCases = businessCases.filter(item => item.type === '定制产品') ?? [];
    return [coreProductsData, customCases]
  }, [businessCases]);


  return (
    <Content className="business-page">
      {/* 顶部配图 */}
      <div className="page-banner">
        <div className="banner-content">
          <h1>业务领域</h1>
          <p>业务领域</p>
        </div>
        <div className="tech-overlay" />
      </div>

      {/* 业务介绍 */}
      <section className="business-introduce-section">
        <div className="section-content">
          <div className="section-header">
            <Title level={2}>业务介绍</Title>
          </div>
          <Row gutter={[24, 24]}>
            {coreProductsData.map((product) => (
              <Col xs={24} sm={24} lg={24} key={product.id}>
                <Card className="case-card">
                  <Row
                    key={product.id} 
                    gutter={[48, 48]}
                    align="middle" 
                    className="product-row"
                  >
                    <Col xs={24} lg={12}>
                      <div className="product-image">
                        <div className="tech-overlay">
                          <img src={product.images[0]} alt={product.title} />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div className="product-info">
                        <Title level={3} className="product-info-title">
                          {product.title}
                        </Title>
                        <Paragraph className="product-info-description">
                          {product.description}
                        </Paragraph>
                      </div>
                    </Col>
                  </Row>
                  <div className="carousel-container">
                    <Carousel className="carousel-wrapper" {...carouselConfig}>
                      {product.images.map((item, index) => (
                        <div className="carousel-item" key={index}>
                          <img className="carousel-image" src={item} />
                        </div>
                      ))}
                    </Carousel> 
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 定制产品案例 */}
      {/* <section className="business-cases-section">
        <div className="section-content">
          <div className="section-header">
            <Title level={2}>项目案例</Title>
          </div>
          <Row gutter={[24, 24]}>
            {customCases.map(item => (
              <Col xs={24} sm={24} lg={24} key={item.id}>
                <Card className="case-card" variant="borderless">
                  <Title className="case-title" level={4}>{item.title}</Title>
                  <Row gutter={[12, 12]} className="case-image">
                    {item.images.slice(0, 2).map((image, index) => (
                      <Col xs={24} sm={24} lg={12} key={index} className="tech-overlay">
                        <img src={image} alt={item.title} />
                      </Col>
                    ))}
                  </Row>
                  <div className="case-info">
                    <Paragraph>{item.description}</Paragraph>
                    {item.extra && (
                      <ul className="extra-info">
                        {item.extra.map((extra, index) => (
                          <li key={index}>{extra}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section> */}
    </Content>
  )
}

export default withErrorBoundary(Business);

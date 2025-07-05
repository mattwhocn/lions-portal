import { withErrorBoundary } from "@/components/ErrorBoundary"
import { usePageTitle } from "@/hooks/usePageTitle";
import { Layout, Typography, Row, Col, Card } from "antd";
import { useMemo } from "react";

import './style.less';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

interface BusinessCase {
  id: number;
  type: string;
  title: string;
  description: string;
  images: string[];
  extra?: string[];
}

const Business = () => {
  usePageTitle('业务领域');

  const businessCases: BusinessCase[] = [
    {
      id: 0,
      type: "核心产品",
      title: "业务介绍",
      description: `业务领域，业务领域业务领域业务领域，业务领域，业务领域，业务领域，业务领域业务领域业务领域，业务领域业务领域业务领域，业务领域业务领域，业务领域业务领域业务领域业务领域，业务领域，业务领域，业务领域业务领域，业务领域业务领域，业务领域业务领域业务领域业务领域业务领域，业务领域，业务领域业务领域业务领域，业务领域，业务领域，业务领域，业务领域业务领域业务领域，业务领域业务领域业务领域，业务领域业务领域，业务领域业务领域业务领域业务领域，业务领域，业务领域，业务领域业务领域，业务领域业务领域，业务领域业务领域业务领域业务领域业务领域，业务领域，业务领域业务领域业务领域，业务领域，业务领域，业务领域，业务领域业务领域业务领域，业务领域业务领域业务领域，业务领域业务领域，业务领域业务领域业务领域业务领域，业务领域，业务领域，业务领域业务领域，业务领域业务领域，业务领域业务领域业务领域业务领域业务领域，业务领域，业务领域业务领域业务领域，业务领域，业务领域，业务领域，业务领域业务领域业务领域，业务领域业务领域业务领域，业务领域业务领域，业务领域业务领域业务领域业务领域，业务领域，业务领域，业务领域业务领域，业务领域业务领域，业务领域业务领域业务领域业务领域业务领域`,
      images: ['1'],
    },
    {
      id: 1,
      type: "定制产品",
      title: "业务领域Case1",
      description: `业务领域，业务领域业务领域业务领域，业务领域，业务领域，业务领域，业务领域业务领域业务领域，业务领域业务领域业务领域，业务领域业务领域，业务领域业务领域业务领域业务领域，业务领域，业务领域，业务领域业务领域，业务领域业务领域，业务领域业务领域业务领域业务领域业务领域。`,
      images: ['1', '2'],
    },
    {
      id: 2,
      type: "定制产品",
      title: "业务领域Case1",
      description: `业务领域，业务领域业务领域业务领域，业务领域，业务领域，业务领域，业务领域业务领域业务领域，业务领域业务领域业务领域，业务领域业务领域，业务领域业务领域业务领域业务领域，业务领域，业务领域，业务领域业务领域，业务领域业务领域，业务领域业务领域业务领域业务领域业务领域，业务领域，业务领域，业务领域，业务领域，业务领域，业务领域，业务领域，业务领域，业务领域，业务领域`,
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
      <section className="core-product">
        <div className="section-content">
          <div className="section-header">
            <Title level={2}>业务介绍</Title>
          </div>
          <Row gutter={[24, 24]}>
            {coreProductsData.map((product) => (
              <Col xs={24} sm={24} lg={24} key={product.id}>
                <Card className="case-card" variant="borderless">
                  <Row
                    key={product.id} 
                    gutter={[12, 12]}
                    align="middle" 
                    className="product-row"
                  >
                    <Col xs={24} lg={12}>
                      <div className="product-image">
                        <div className="tech-overlay">
                          {/* <img src={product.images[0]} alt={product.title} /> */}
                          <div style={{ width: '100%', height: '400px', background: 'blue' }} />
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
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 定制产品案例 */}
      <section className="business-section">
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
                        {/* <img src={image} alt={item.title} /> */}
                        <div style={{ width: '100%', height: '400px', background: 'blue' }} />
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
      </section>
    </Content>
  )
}

export default withErrorBoundary(Business);

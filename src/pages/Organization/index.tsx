import { withErrorBoundary } from "@/components/ErrorBoundary"
import { usePageTitle } from "@/hooks/usePageTitle";
import { Layout, Typography } from "antd";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import organizationContent from '../../assets/organization-md/news1.md';
import './index.less';

const { Content } = Layout;
const { Title } = Typography;

const Organization = () => {
  usePageTitle('两新组织');

  return (
    <Content className="organization-page">
      {/* 顶部配图 */}
      <div className="page-banner">
        <div className="banner-content">
          <h1>两新组织</h1>
          <p>新经济组织、新社会组织</p>
        </div>
        <div className="tech-overlay" />
      </div>

       <section className="organization-section">
        <div className="section-content markdown-content">
          <div className="section-header">
            <Title level={2}>两新组织</Title>
          </div>
          <div>
            
          </div>
        </div>
      </section>
    </Content>
  )
}

export default withErrorBoundary(Organization);
import { withErrorBoundary } from "@/components/ErrorBoundary"
import { usePageTitle } from "@/hooks/usePageTitle";
import { gradients } from "@/utils/gradients";
import { Layout } from "antd";

const { Content } = Layout;

const Organization = () => {
  usePageTitle('两新组织');

  return (
    <Content className="organization-page">
      {/* 顶部配图 */}
      <div 
        className="page-banner"
        style={{ background: gradients.techBlue }}
      >
        <div className="banner-content">
          <h1>两新组织</h1>
          <p>新经济组织、新社会组织</p>
        </div>
        <div className="tech-overlay" />
      </div>

       <section className="organization-section">
        两新组织
      </section>
    </Content>
  )
}

export default withErrorBoundary(Organization);
import { withErrorBoundary } from "@/components/ErrorBoundary"
import { usePageTitle } from "@/hooks/usePageTitle";
import { gradients } from "@/utils/gradients";
import { Layout } from "antd";

const { Content } = Layout;

const Business = () => {
  usePageTitle('业务领域');

  return (
    <Content className="business-page">
      {/* 顶部配图 */}
      <div 
        className="page-banner"
        style={{ background: gradients.techBlue }}
      >
        <div className="banner-content">
          <h1>业务领域</h1>
          <p>业务领域</p>
        </div>
        <div className="tech-overlay" />
      </div>

      <section className="business-section">
        业务领域
      </section>
    </Content>
  )
}

export default withErrorBoundary(Business);

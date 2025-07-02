import { withErrorBoundary } from "@/components/ErrorBoundary"
import { usePageTitle } from "@/hooks/usePageTitle";
import { Layout } from "antd";

import './style.less';

const { Content } = Layout;

const Business = () => {
  usePageTitle('业务领域');

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

      <section className="business-section">
        业务领域
      </section>
    </Content>
  )
}

export default withErrorBoundary(Business);

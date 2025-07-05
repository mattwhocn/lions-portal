import { withErrorBoundary } from "@/components/ErrorBoundary"
import { usePageTitle } from "@/hooks/usePageTitle";
import { Layout } from "antd";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import organizationContent from '../../assets/organization-md/news1.md';
import './index.less';

const { Content } = Layout;

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
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              // 自定义渲染组件
              h1: ({ node, ...props }) => <h1 className="md-h1" {...props} />,
              h2: ({ node, ...props }) => <h2 className="md-h2" {...props} />,
              p: ({ node, ...props }) => <p className="md-p" {...props} />,
              ul: ({ node, ...props }) => <ul className="md-ul" {...props} />,
              ol: ({ node, ...props }) => <ol className="md-ol" {...props} />,
              li: ({ node, ...props }) => <li className="md-li" {...props} />,
              img: ({ node, ...props }) => <img className="md-img" {...props} />,
              blockquote: ({ node, ...props }) => <blockquote className="md-blockquote" {...props} />,
            }}
          >
            {organizationContent}
          </ReactMarkdown> 
        </div>
      </section>
    </Content>
  )
}

export default withErrorBoundary(Organization);
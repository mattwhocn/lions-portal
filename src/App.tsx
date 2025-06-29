import { Layout, BackTop } from 'antd';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { UpOutlined } from '@ant-design/icons';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import News from './pages/News';
import Contact from './pages/Contact';
import NewsDetail from './pages/News/Detail';
import People from './pages/People';
import Organization from './pages/Organization';
import ScrollToTop from './components/ScrollToTop';
import './styles/app.less';

const { Content } = Layout;

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout className="app-container">
        <Header />
        <Content className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<Business />} />
            <Route path="/people" element={<People />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>
        <Footer />
        <BackTop>
          <div className="back-to-top">
            <UpOutlined />
          </div>
        </BackTop>
      </Layout>
    </BrowserRouter>
  );
}; 
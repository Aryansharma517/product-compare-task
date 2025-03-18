import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, BarChart2 } from 'lucide-react';
import Navbar from './Navbar';

const { Content, Sider } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <ShoppingBag size={18} />,
      label: 'Product Details',
    },
    {
      key: '/compare',
      icon: <BarChart2 size={18} />,
      label: 'Compare Products',
    },
  ];

  return (
    <Layout className="min-h-screen">
      <Navbar />
      <Layout>
        <Sider width={250} className="bg-white">
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems}
            onClick={({ key }) => navigate(key)}
          />
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content className="bg-white p-6 rounded-lg">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
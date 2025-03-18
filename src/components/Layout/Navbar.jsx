import React from 'react';
import { Layout, Avatar, Space } from 'antd';
import { Package } from 'lucide-react';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className="bg-white px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Package size={24} className="text-blue-600" />
        <span className="text-xl font-semibold">Product Compare</span>
      </div>
      <Space>
        <Avatar className="bg-blue-600">JD</Avatar>
      </Space>
    </Header>
  );
};

export default Navbar;
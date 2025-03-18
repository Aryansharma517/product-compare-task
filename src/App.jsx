import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import MainLayout from './components/Layout/MainLayout';
import ProductDetails from './pages/ProductDetails';
import CompareProducts from './pages/CompareProducts';
import { CompareProductsProvider } from './context/CompareProductsContext';

const theme = {
  token: {
    colorPrimary: '#2563eb',
    borderRadius: 6,
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <CompareProductsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<ProductDetails />} />
              <Route path="compare" element={<CompareProducts />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CompareProductsProvider>
    </ConfigProvider>
  );
}

export default App;
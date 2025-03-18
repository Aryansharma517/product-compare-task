import React, { useState, useEffect } from 'react';
import { Table, Button, message } from 'antd';
import axios from 'axios';
import { useCompareProducts } from '../context/CompareProductsContext';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const { compareProducts, addToCompare, isProductInComparison } = useCompareProducts();

  const fetchProducts = async (page = 1) => {
    setLoading(true);
    try {
      const skip = (page - 1) * pagination.pageSize;
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${pagination.pageSize}&skip=${skip}`
      );
      setProducts(response.data.products);
      setPagination({
        ...pagination,
        current: page,
        total: response.data.total,
      });
    } catch (error) {
      message.error('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleTableChange = (newPagination) => {
    fetchProducts(newPagination.current);
  };

  const handleAddToCompare = (product) => {
    if (compareProducts.length >= 4) {
      message.warning('You can compare up to 4 products');
      return;
    }
    addToCompare(product);
    message.success('Product added to comparison');
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      render: (thumbnail) => (
        <img src={thumbnail} alt="product" className="w-16 h-16 object-cover rounded" />
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
      sorter: (a, b) => a.brand.localeCompare(b.brand),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      render: (price) => `$${price}`,
    },
    {
      title: 'Discount',
      dataIndex: 'discountPercentage',
      key: 'discountPercentage',
      render: (discount) => `${discount}%`,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => handleAddToCompare(record)}
          disabled={isProductInComparison(record.id)}
        >
          {isProductInComparison(record.id) ? 'Added' : 'Compare'}
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">{"Product Details"}</h1>
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        pagination={pagination}
        onChange={handleTableChange}
        loading={loading}
      />
    </div>
  );
};

export default ProductDetails;
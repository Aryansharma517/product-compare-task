import React from 'react';
import { Button, Card, Empty } from 'antd';
import { PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCompareProducts } from '../context/CompareProductsContext';

const CompareProducts = () => {
  const navigate = useNavigate();
  const { compareProducts, removeFromCompare } = useCompareProducts();

  const productFeatures = [
    { key: 'title', label: 'Title' },
    { key: 'brand', label: 'Brand' },
    { key: 'category', label: 'Category' },
    { key: 'price', label: 'Price' },
    { key: 'discountPercentage', label: 'Discount' },
    { key: 'description', label: 'Description' },
  ];

  if (compareProducts.length === 0) {
    return (
      <Empty
        description="No products to compare"
        className="mt-12"
      >
        <Button type="primary" onClick={() => navigate('/')} icon={<PlusCircle size={16} />}>
          Add Products
        </Button>
      </Empty>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Compare Products</h1>
        {compareProducts.length < 4 && (
          <Button 
            type="primary"
            onClick={() => navigate('/')}
            icon={<PlusCircle size={16} />}
          >
            Add More
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {compareProducts.map((product) => (
          <Card
            key={product.id}
            cover={
              <img
                alt={product.title}
                src={product.thumbnail}
                className="h-48 object-cover"
              />
            }
            actions={[
              <Button 
                key="remove"
                danger
                onClick={() => removeFromCompare(product.id)}
              >
                Remove
              </Button>
            ]}
          >
            {productFeatures.map(({ key, label }) => (
              <div key={key} className="mb-4">
                <div className="font-semibold text-gray-600">{label}</div>
                <div>
                  {key === 'price' 
                    ? `$${product[key]}`
                    : key === 'discountPercentage'
                    ? `${product[key]}%`
                    : product[key]}
                </div>
              </div>
            ))}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CompareProducts;
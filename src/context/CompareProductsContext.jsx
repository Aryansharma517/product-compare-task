import React, { createContext, useContext, useState } from 'react';

const CompareProductsContext = createContext(undefined);

export const CompareProductsProvider = ({ children }) => {
  const [compareProducts, setCompareProducts] = useState([]);

  const addToCompare = (product) => {
    if (compareProducts.length < 4 && !isProductInComparison(product.id)) {
      setCompareProducts([...compareProducts, product]);
    }
  };

  const removeFromCompare = (productId) => {
    setCompareProducts(compareProducts.filter((p) => p.id !== productId));
  };

  const isProductInComparison = (productId) => {
    return compareProducts.some((p) => p.id === productId);
  };

  return (
    <CompareProductsContext.Provider
      value={{
        compareProducts,
        addToCompare,
        removeFromCompare,
        isProductInComparison,
      }}
    >
      {children}
    </CompareProductsContext.Provider>
  );
};

export const useCompareProducts = () => {
  const context = useContext(CompareProductsContext);
  if (context === undefined) {
    throw new Error('useCompareProducts must be used within a CompareProductsProvider');
  }
  return context;
};
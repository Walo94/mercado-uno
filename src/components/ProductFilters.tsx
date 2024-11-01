import React, { useState } from 'react';

interface ProductFiltersProps {
  onFilterChange: (filters: { minOrder: string; minPrice: string; maxPrice: string }) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({ minOrder: '', minPrice: '', maxPrice: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="mb-4 p-4 bg-white border rounded-lg shadow-md -m-4 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="number"
          name="minOrder"
          placeholder="Min.orden"
          value={filters.minOrder}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Precio Mínimo"
          value={filters.minPrice}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Precio Máximo"
          value={filters.maxPrice}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />
      </div>
    </div>
  );
};

export default ProductFilters;

import React from 'react';

interface Category {
  id: number;
  name: string;
}

interface ProductSidebarFilterProps {
  categories: Category[];
  onCategorySelect: (category: string) => void;
}

const ProductSidebarFilter: React.FC<ProductSidebarFilterProps> = ({ categories, onCategorySelect }) => {
  return (
    <div className="w-64 p-4 bg-gray-100 border-r border-gray-300">
      <h2 className="font-bold mb-4">Categorías</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="flex items-center justify-between mb-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="category"
                value={category.name}
                onChange={() => onCategorySelect(category.name)}
                className="form-radio"
              />
              {category.name}
            </label>
            <span className="text-gray-500">+</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSidebarFilter;

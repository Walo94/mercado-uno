import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import ProductSidebarFilter from './ProductSidebarFilter';
import product1 from "../assets/img/product1.jpg";
import product2 from "../assets/img/product2.jpg";
import product3 from "../assets/img/product3.jpg";
import product4 from "../assets/img/product4.jpg";

const products = [
  {
    id: 1,
    image: `${product1}`,
    title: 'Pro6 auriculares Bluetooth 6s auriculares Bluetooth reducción d...',
    priceRange: 'USD$ 2.92 - 4.7',
    moq: '2',
    category: 'Electrónica',
  },
  {
    id: 2,
    image: `${product2}`,
    title: 'Empuje rápido de los niños Máquina de juego de rompecabezas...',
    priceRange: 'USD$ 80.50 - 120.51',
    moq: '50',
    category: 'Electrónica',
  },
  {
    id: 3,
    image: `${product3}`,
    title: 'Gato de dibujos animados mini reloj despertador 2023 nuevos...',
    priceRange: 'USD$ 10.03 - 14.24',
    moq: '1',
    category: 'Juguetes',
  },
  {
    id: 4,
    image: `${product4}`,
    title: 'T6 recargable zoom mini linterna al aire libre LED linterna USB...',
    priceRange: 'USD$ 16.00 - 7.28',
    moq: '10',
    category: 'Hogar',
  },
  {
    id: 5,
    image: `${product4}`,
    title: 'T6 recargable zoom mini linterna al aire libre LED linterna USB...',
    priceRange: 'USD$ 2.03 - 7.28',
    moq: '1',
    category: 'Outdoor',
  },
  {
    id: 6,
    image: `${product3}`,
    title: 'T6 recargable zoom mini linterna al aire libre LED linterna USB...',
    priceRange: 'USD$ 2.03 - 7.28',
    moq: '1',
    category: 'Juguetes',
  },
  {
    id: 7,
    image: `${product2}`,
    title: 'T6 recargable zoom mini linterna al aire libre LED linterna USB...',
    priceRange: 'USD$ 2.03 - 7.28',
    moq: '1',
    category: 'Hogar',
  },
  {
    id: 8,
    image: `${product1}`,
    title: 'T6 recargable zoom mini linterna al aire libre LED linterna USB...',
    priceRange: 'USD$ 2.03 - 7.28',
    moq: '1',
    category: 'Outdoor',
  },
];

const categories = [
  { id: 1, name: 'Electrónica' },
  { id: 2, name: 'Juguetes' },
  { id: 3, name: 'Hogar' },
  { id: 4, name: 'Outdoor' },
];

const ProductHome: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Función para manejar el cambio de filtros
  const handleFilterChange = (filters: { minOrder: string; minPrice: string; maxPrice: string }) => {
    const { minOrder, minPrice, maxPrice } = filters;

    // Filtra los productos en función de los valores de los filtros
    const newFilteredProducts = products.filter((product) => {
      const priceRange = product.priceRange.split(' - ').map((price) => parseFloat(price.replace('USD$', '').trim()));
      const minPriceValue = priceRange[0];
      const maxPriceValue = priceRange[1];

      const meetsMinOrder = minOrder ? parseInt(product.moq) >= parseInt(minOrder) : true;
      const meetsMinPrice = minPrice ? maxPriceValue >= parseFloat(minPrice) : true;
      const meetsMaxPrice = maxPrice ? minPriceValue <= parseFloat(maxPrice) : true;
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;

      return matchesCategory && meetsMinOrder && meetsMinPrice && meetsMaxPrice;
    });

    setFilteredProducts(newFilteredProducts);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    handleFilterChange({ minOrder: '', minPrice: '', maxPrice: '' });
  };

  return (
    <div className="flex w-full">
      {/* Filtro Lateral */}
    <div className="w-1/4">
      <ProductSidebarFilter categories={categories} onCategorySelect={handleCategorySelect} />
    </div>

      <div className="flex-1 p-4">
        {/* Filtro Superior */}
        <ProductFilters onFilterChange={handleFilterChange} />

        {/* Lista de Productos */}
        <div className="flex flex-wrap -m-6 mt-2">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductHome;

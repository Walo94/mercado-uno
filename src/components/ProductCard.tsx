import { ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  image: string;
  title: string;
  priceRange: string;
  moq: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 p-2">
      <div className="bg-white border rounded-lg shadow-md p-4 flex flex-col items-center text-center h-full min-h-[300px]">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-cover mb-4 transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
        />
        
        {/* Contenedor flexible para el título y texto de precios */}
        <div className="flex-grow flex flex-col items-center">
          <h3 className="text-lg font-medium mb-2">{product.title}</h3>
          <p className="text-gray-500 mb-2">{product.priceRange} / pcs</p>
          <p className="text-gray-400 text-sm mb-4">{product.moq} pcs (MOQ)</p>
        </div>

        {/* Botón*/}
        <button className="flex items-center gap-2 bg-white text-gray-700 border border-gray-400 rounded-lg py-1 px-4 transition-all duration-300 ease-in-out transform hover:bg-[#046bc9] hover:text-white hover:border-transparent hover:scale-105 mt-auto">
          <ShoppingCart className="w-5 h-5" />
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

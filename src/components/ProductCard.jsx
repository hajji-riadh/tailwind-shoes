import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export function ProductCard({ product, onAddToCart }) {
  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-600">{product.category}</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-xl font-bold">${product.price}</span>
            <button 
              onClick={(e) => {
                e.preventDefault();
                onAddToCart(product);
              }} 
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

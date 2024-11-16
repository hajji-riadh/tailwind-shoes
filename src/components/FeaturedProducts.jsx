import { ProductCard } from "./ProductCard";
import { featuredProducts } from "../data/products";

export function FeaturedProducts() {
  const handleAddToCart = (product) => {
    // Add your cart logic here
    console.log("Adding to cart:", product);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

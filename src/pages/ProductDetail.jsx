import { useParams } from "react-router-dom";
import { featuredProducts } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Star, Heart, Share2, ShoppingBag } from "lucide-react";

export function ProductDetail() {
  const { id } = useParams();
  const product = featuredProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = featuredProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto space-y-12 pt-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 dark:text-gray-400">
        <ol className="flex items-center space-x-2">
          <li><a href="/" className="hover:text-gray-900 dark:hover:text-white">Home</a></li>
          <li>/</li>
          <li><a href="/products" className="hover:text-gray-900 dark:hover:text-white">Products</a></li>
          <li>/</li>
          <li className="text-gray-900 dark:text-white">{product.name}</li>
        </ol>
      </nav>

      {/* Main product section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image gallery */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6] rounded-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-black dark:hover:border-white"
              >
                <img
                  src={product.image}
                  alt={`${product.name} view ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product info */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold dark:text-white">{product.name}</h1>
            <p className="text-gray-600 dark:text-gray-300">{product.category}</p>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  ({product.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-3xl font-bold dark:text-white">${product.price}</div>

          <div className="space-y-4">
            <h3 className="font-medium dark:text-white">Select Color</h3>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className="px-4 py-2 border rounded-lg hover:border-black dark:hover:border-white dark:text-white"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium dark:text-white">Select Size</h3>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-lg hover:border-black dark:hover:border-white dark:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 rounded-full hover:bg-gray-800">
            <ShoppingBag className="w-5 h-5" />
            Add to Cart
          </button>

          <div className="space-y-4 border-t pt-6">
            <div className="space-y-2">
              <h3 className="font-medium dark:text-white">Description</h3>
              <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium dark:text-white">Features</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related products section */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6 border-t pt-12">
          <h2 className="text-2xl font-bold dark:text-white">
            More {product.category} Shoes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                onAddToCart={(product) => {
                  console.log("Adding to cart:", product);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

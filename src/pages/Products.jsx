import { useState, useRef } from "react";
import { ProductCard } from "../components/ProductCard";
import { FilterSidebar } from "../components/FilterSidebar";
import { featuredProducts } from "../data/products";
import { Filter } from "lucide-react";
import { useHoverOutside } from "../hooks/useHoverOutside";

export function Products() {
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: [0, 500],
    sizes: [],
  });
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterRef = useRef(null);

  useHoverOutside(filterRef, () => {
    if (isFilterOpen) {
      setIsFilterOpen(false);
    }
  }, window.innerWidth >= 1024); // Only enable hover behavior on desktop

  // Add this new function to filter products
  const getFilteredProducts = () => {
    return featuredProducts.filter(product => {
      // Filter by category
      if (filters.category !== "all" && product.category !== filters.category) {
        return false;
      }

      // Filter by price range
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      return true;
    });
  };

  // Get filtered products
  const filteredProducts = getFilteredProducts();

  return (
    <div className="pt-8 animate-fade-in">
      {/* Mobile filter button */}
      <button
        className="lg:hidden mb-4 flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow animate-fade-in"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        <Filter size={20} />
        <span className="dark:text-white">Filters</span>
      </button>

      <div className="flex gap-8">
        {/* Filter sidebar - mobile overlay */}
        <div
          className={`${
            isFilterOpen ? "fixed" : "hidden"
          } lg:relative lg:block inset-0 z-50 lg:z-0 bg-gray-900/50 lg:bg-transparent animate-fade-in animate-delay-100`}
        >
          <div 
            ref={filterRef}
            onMouseEnter={() => window.innerWidth >= 1024 && setIsFilterOpen(true)}
            className="absolute lg:relative left-0 top-0 h-full w-80 bg-white dark:bg-gray-800 p-4"
          >
            <div className="flex justify-between items-center lg:hidden mb-4">
              <h2 className="font-bold dark:text-white">Filters</h2>
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>
        </div>

        {/* Products grid */}
        <div className="flex-1 animate-fade-in animate-delay-200">
          {/* Add count of filtered products */}
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Showing {filteredProducts.length} products
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(product) => {
                  console.log("Adding to cart:", product);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

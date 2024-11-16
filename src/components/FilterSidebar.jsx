import { useState } from 'react';
import PropTypes from 'prop-types';
import { categories, getPriceRange } from "../data/categories";

export function FilterSidebar({ filters = {}, setFilters }) {
  const { min: minPrice, max: maxPrice } = getPriceRange();
  const [tempPriceRange, setTempPriceRange] = useState(filters.priceRange || [minPrice, maxPrice]);

  if (!filters?.priceRange) {
    filters = {
      ...filters,
      priceRange: [minPrice, maxPrice]
    };
  }

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.name === 'minPrice') {
      setTempPriceRange([value, tempPriceRange[1]]);
    } else {
      setTempPriceRange([tempPriceRange[0], value]);
    }
  };

  const handlePriceFilter = () => {
    setFilters({
      ...filters,
      priceRange: tempPriceRange
    });
  };

  return (
    <div className="w-64 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md dark:text-white">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      
      {/* Category Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Category</h3>
        <select 
          value={filters.category}
          onChange={(e) => setFilters({...filters, category: e.target.value})}
          className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:border-gray-600 
            dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>${tempPriceRange[0]}</span>
            <span>${tempPriceRange[1]}</span>
          </div>
          
          <div className="space-y-2">
            <input
              type="range"
              name="minPrice"
              min={minPrice}
              max={tempPriceRange[1]}
              value={tempPriceRange[0]}
              onChange={handlePriceChange}
              className="w-full accent-blue-500"
            />
            <input
              type="range"
              name="maxPrice"
              min={tempPriceRange[0]}
              max={maxPrice}
              value={tempPriceRange[1]}
              onChange={handlePriceChange}
              className="w-full accent-blue-500"
            />
          </div>

          <button
            onClick={handlePriceFilter}
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 
              transition-colors duration-200"
          >
            Apply Filter
          </button>
        </div>
      </div>

      {/* Reset Filters Button */}
      <button
        onClick={() => {
          const defaultPriceRange = [minPrice, maxPrice];
          setTempPriceRange(defaultPriceRange);
          setFilters({
            category: 'all',
            priceRange: defaultPriceRange
          });
        }}
        className="w-full mt-4 p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 
          dark:hover:bg-gray-600 transition-colors duration-200"
      >
        Reset Filters
      </button>
    </div>
  );
}

FilterSidebar.propTypes = {
  filters: PropTypes.shape({
    category: PropTypes.string,
    priceRange: PropTypes.arrayOf(PropTypes.number)
  }),
  setFilters: PropTypes.func.isRequired
};

FilterSidebar.defaultProps = {
  filters: {
    category: 'all',
    priceRange: null
  }
};

export const categories = [
  {
    id: 1,
    name: "Running",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    priceRange: {
      min: 80,
      max: 200
    },
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"]
  },
  {
    id: 2,
    name: "Lifestyle",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    priceRange: {
      min: 60,
      max: 150
    },
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11"]
  },
  {
    id: 3,
    name: "Basketball",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    priceRange: {
      min: 100,
      max: 250
    },
    sizes: ["US 8", "US 9", "US 10", "US 11", "US 12", "US 13"]
  },
  {
    id: 4,
    name: "Training",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
    priceRange: {
      min: 80,
      max: 180
    },
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"]
  },
  {
    id: 5,
    name: "Skateboarding",
    image: "https://images.unsplash.com/photo-1595461135849-bf08893fdc2c",
    priceRange: {
      min: 70,
      max: 160
    },
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"]
  }
];

// Add helper functions for the FilterSidebar
export const getPriceRange = () => {
  const prices = categories.flatMap(cat => [cat.priceRange.min, cat.priceRange.max]);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};

export const getAllSizes = () => {
  return [...new Set(categories.flatMap(cat => cat.sizes))].sort();
};

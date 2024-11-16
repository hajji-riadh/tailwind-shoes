import { categories } from "../data/categories";

export function Categories() {
  return (
    <div className="mt-20">
      <h2 className="text-gray-800 dark:text-white text-3xl font-bold mb-8">
        Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="relative group cursor-pointer">
            <div className="overflow-hidden rounded-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-gray-800 dark:text-white text-2xl font-bold">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

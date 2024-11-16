import nike1 from "../assets/n1-min.png";

export function ShoeDetail() {
  return (
    <div className="flex flex-col space-y-8 lg:space-y-0 lg:space-x-4 lg:flex-row-reverse">
      {/* Shoe image with animations */}
      <div className="flex-1 p-4">
        <div className="relative bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6] rounded-2xl p-8 overflow-hidden group">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img 
            src={nike1} 
            alt="Nike Air Max 270"
            className="hover:scale-110 transition-transform duration-700 ease-in-out animate-float"
          />
        </div>
      </div>

      {/* Product details with animations */}
      <div className="flex-1 space-y-8 p-4">
        <div 
          className="text-5xl font-black md:text-9xl text-gray-800 dark:text-white 
          hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r 
          hover:from-[#F637CF] hover:to-[#4DD4C6] transition-colors duration-300"
        >
          Nike Air Max 270
        </div>

        <div className="font-medium md:text-xl text-gray-800 dark:text-white opacity-90">
          The Nike Air Max 270 is a lifestyle shoe thats sure to turn heads with its vibrant color gradient.
        </div>

        <div className="text-3xl font-extrabold md:text-6xl text-gray-800 dark:text-white">
          $160 <span className="text-sm font-normal">USD</span>
        </div>

        {/* CTA buttons with animations */}
        <div className="space-x-6 flex items-center">
          <button className="h-14 w-44 bg-black text-white rounded-lg 
            transform transition-all duration-300 
            hover:bg-gray-900 hover:scale-105 hover:shadow-xl 
            active:scale-95 active:bg-gray-700">
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold text-gray-800 dark:text-white 
            relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
            after:w-full after:origin-left after:scale-x-0 after:bg-current 
            after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
}
import { ShoeDetail } from "../components/ShoeDetail";
import { Categories } from "../components/Categories";
import { FeaturedProducts } from "../components/FeaturedProducts";

export function Home() {
  return (
    <div className="space-y-16">
      <div className="animate-fade-in">
        <ShoeDetail />
      </div>
      <div className="animate-fade-in animate-delay-100">
        <Categories />
      </div>
      <div className="animate-fade-in animate-delay-200">
        <FeaturedProducts />
      </div>
    </div>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { ProductDetail } from "./pages/ProductDetail";
import { Services } from "./pages/Services";
import { Footer } from "./components/Footer";
import { Contact } from "./pages/Contact";
import { ScrollToTop } from "./components/ScrollToTop";

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="p-10 xl:px-24">
          <Nav />
          <main className="animate-fade-in">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
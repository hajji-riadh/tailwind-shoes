import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate total whenever cart items change
    const newTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">
          Your cart is empty
        </h2>
        <Link
          to="/products"
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8 dark:text-white">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />

              <div className="flex-grow text-center sm:text-left">
                <h3 className="font-bold dark:text-white">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  ${item.price}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex-center"
                >
                  -
                </button>
                <span className="w-8 text-center dark:text-white">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex-center"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="lg:w-80">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 dark:text-white">
              Order Summary
            </h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between dark:text-white">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between dark:text-white">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold mb-4 dark:text-white">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

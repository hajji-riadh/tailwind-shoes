import {
  Star,
  Truck,
  Package,
  Clock,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Premium Products",
      description:
        "Experience top-tier Nike footwear with authentic materials and innovative design.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Shipping",
      description:
        "Enjoy complimentary shipping on all orders over $100 within the continental US.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Get your Nike products delivered within 2-4 business days.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Secure Shopping",
      description:
        "Shop with confidence with our secure payment system and buyer protection.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Professional Runner",
      comment:
        "The quality and comfort of Nike shoes have been essential to my training routine.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Basketball Coach",
      comment:
        "Outstanding products and exceptional customer service. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Fitness Enthusiast",
      comment: "Fast delivery and the products always exceed my expectations.",
      rating: 4,
    },
  ];

  return (
    <div className="py-16 space-y-16">
      {/* Services Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center dark:text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center dark:text-white">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                &quot;{testimonial.comment}&quot;
              </p>
              <div>
                <p className="font-bold dark:text-white">{testimonial.name}</p>
                <p className="text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-4">
        <HeartHandshake className="w-16 h-16 mx-auto text-blue-500" />
        <h2 className="text-3xl font-bold dark:text-white">
          Ready to Experience Our Services?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust Nike for their
          athletic needs.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
}

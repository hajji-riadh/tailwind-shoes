import { Link } from "react-router-dom";
import NikeLogo from "../assets/nike-logo.svg?react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function Footer() {
  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Running", href: "/products?category=running" },
        { name: "Basketball", href: "/products?category=basketball" },
        { name: "Training", href: "/products?category=training" },
        { name: "Lifestyle", href: "/products?category=lifestyle" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "Order Status", href: "#" },
        { name: "Shipping & Delivery", href: "#" },
        { name: "Returns", href: "#" },
        { name: "Payment Options", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "Store Locator", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Youtube className="w-5 h-5" />, href: "#" },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "One Nike Way, Beaverton, OR 97005",
    },
    { icon: <Phone className="w-5 h-5" />, text: "1-800-806-6453" },
    { icon: <Mail className="w-5 h-5" />, text: "support@nike.com" },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="inline-block">
              <NikeLogo className="h-16 w-16 dark:filter dark:invert" />
            </Link>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-400"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="max-w-md">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
              Get the latest updates on new products and upcoming sales.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-r-lg hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="mt-4 md:mt-0 text-base text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()}{" "}
              <Link to="https://www-byhajji-com.onrender.com/" target="_blank">
                HajjiDev
              </Link>
              , Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    department: "general",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Add your form submission logic here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      details: ["One Nike Way", "Beaverton, OR 97005", "United States"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: [
        "Customer Service: 1-800-806-6453",
        "Corporate: 1-503-671-6453",
      ],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["customer.service@nike.com", "corporate.info@nike.com"],
    },
  ];

  return (
    <div className="py-16 space-y-16">
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="text-blue-500 mb-4">{info.icon}</div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">
              {info.title}
            </h3>
            {info.details.map((detail, idx) => (
              <p key={idx} className="text-gray-600 dark:text-gray-300">
                {detail}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg bg-white dark:bg-gray-800 dark:text-white
                  ${errors.firstName ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg bg-white dark:bg-gray-800 dark:text-white
                  ${errors.lastName ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg bg-white dark:bg-gray-800 dark:text-white
                  ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Department
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 dark:text-white"
            >
              <option value="general">General Inquiry</option>
              <option value="support">Customer Support</option>
              <option value="sales">Sales</option>
              <option value="technical">Technical Support</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full p-3 border rounded-lg bg-white dark:bg-gray-800 dark:text-white
                ${errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

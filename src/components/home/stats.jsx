import { FaUsers, FaTruck, FaBoxes, FaAward } from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      icon: <FaUsers className="text-4xl text-red-600" />,
      number: "1000+",
      title: "Happy Customers",
    },
    {
      icon: <FaTruck className="text-4xl text-red-600" />,
      number: "500+",
      title: "Deliveries Completed",
    },
    {
      icon: <FaBoxes className="text-4xl text-red-600" />,
      number: "13+",
      title: "Product Categories",
    },
    {
      icon: <FaAward className="text-4xl text-red-600" />,
      number: "5+",
      title: "Trusted Brands",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold text-blue-900">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-600 font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

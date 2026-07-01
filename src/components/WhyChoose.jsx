import {
  FaTruck,
  FaAward,
  FaHandshake,
  FaWarehouse,
  FaClock,
  FaHeadset,
} from "react-icons/fa";

export default function WhyChoose() {
  const features = [
    {
      icon: <FaAward className="text-5xl text-red-600" />,
      title: "Premium Quality Products",
      desc: "We supply genuine construction materials from trusted brands like JK Lakshmi, Nuvoco, Bangur, Yoddha, and our own Kalawati Bricks.",
    },
    {
      icon: <FaTruck className="text-5xl text-red-600" />,
      title: "Fast Delivery",
      desc: "Quick and reliable delivery across Raipur and nearby areas for homes, shops, contractors, and large construction projects.",
    },
    {
      icon: <FaWarehouse className="text-5xl text-red-600" />,
      title: "Wide Product Range",
      desc: "Everything from AAC Blocks, Cement, TMT Bars, Fly Ash Bricks, Sand, Stone Aggregates, Paver Blocks, Cover Blocks and more.",
    },
    {
      icon: <FaHandshake className="text-5xl text-red-600" />,
      title: "Competitive Pricing",
      desc: "Fair prices for retail customers, builders, contractors, and bulk construction projects.",
    },
    {
      icon: <FaClock className="text-5xl text-red-600" />,
      title: "Reliable Service",
      desc: "Timely supply, transparent communication, and dependable support for every order.",
    },
    {
      icon: <FaHeadset className="text-5xl text-red-600" />,
      title: "Customer Support",
      desc: "Friendly assistance to help you choose the right products and quantities for your project.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-red-600 uppercase tracking-widest font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold text-blue-900 mt-4">
            Why Builders Trust Kalawati Traders
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            We are committed to delivering quality building materials,
            competitive pricing, dependable service, and timely delivery
            to every customer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6">{item.icon}</div>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

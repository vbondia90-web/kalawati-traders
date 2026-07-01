import { FaWhatsapp, FaCheckCircle, FaStar } from "react-icons/fa";

const products = [
  {
    name: "AAC Blocks",
    category: "Blocks",
    image: "https://images.unsplash.com/photo-1513467655676-561b7d489a88?w=1000",
    desc: "Lightweight blocks for faster and cleaner construction.",
    features: ["Lightweight", "Thermal Insulation", "Fire Resistant"],
  },
  {
    name: "AAC Block Mortar",
    category: "Mortar",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1000",
    desc: "High bonding mortar designed for AAC block masonry.",
    features: ["Strong Bonding", "Easy Application", "Less Wastage"],
  },
  {
    name: "Fly Ash Bricks",
    category: "Bricks",
    image: "https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?w=1000",
    desc: "Eco-friendly bricks with uniform shape and high strength.",
    features: ["Eco Friendly", "Uniform Size", "High Strength"],
  },
  {
    name: "Fly Ash Solid Blocks",
    category: "Blocks",
    image: "https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?w=1000",
    desc: "Strong solid blocks for durable construction work.",
    features: ["Load Bearing", "Durable", "Cost Effective"],
  },
  {
    name: "Cement",
    category: "Cement",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1000",
    desc: "Premium cement brands for residential and commercial projects.",
    features: ["JK Lakshmi", "Bangur", "Nuvoco"],
  },
  {
    name: "TMT Bars",
    category: "Steel",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000",
    desc: "High strength steel bars for reinforced construction.",
    features: ["Yoddha TMT", "Strong Grip", "Reliable Quality"],
  },
  {
    name: "Paver Blocks",
    category: "Pavers",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1000",
    desc: "Durable paver blocks for outdoor and landscaping use.",
    features: ["Durable", "Multiple Designs", "Outdoor Use"],
  },
  {
    name: "River Sand",
    category: "Sand",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1000",
    desc: "Clean construction-grade sand for site requirements.",
    features: ["Construction Grade", "Clean Material", "Bulk Supply"],
  },
];

export default function Products() {
  const quote = (name) => {
    const text = `Hello Kalawati Traders,%0AI want a quote for ${name}.`;
    window.open(`https://wa.me/916269707000?text=${text}`, "_blank");
  };

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 uppercase tracking-widest font-bold">
            Product Catalogue
          </span>
          <h2 className="text-5xl font-extrabold text-blue-950 mt-4">
            Premium Construction Materials
          </h2>
          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">
            A complete range of trusted building materials for contractors,
            builders, shops and homeowners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.name} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                />
                <span className="absolute top-4 left-4 rounded-full bg-red-600 px-4 py-1 text-white text-sm font-bold">
                  {product.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex text-yellow-400 mb-3">
                  {[1,2,3,4,5].map((i) => <FaStar key={i} />)}
                </div>

                <h3 className="text-2xl font-extrabold text-blue-950">
                  {product.name}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {product.desc}
                </p>

                <div className="mt-5 space-y-2">
                  {product.features.map((feature) => (
                    <p key={feature} className="flex items-center gap-2 text-gray-700">
                      <FaCheckCircle className="text-red-600" />
                      {feature}
                    </p>
                  ))}
                </div>

                <button
                  onClick={() => quote(product.name)}
                  className="mt-7 w-full inline-flex items-center justify-center gap-3 rounded-xl bg-green-600 px-5 py-3 font-bold text-white hover:bg-green-700 transition"
                >
                  <FaWhatsapp />
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#quote"
            className="inline-flex rounded-2xl bg-blue-950 px-8 py-4 text-white font-bold hover:bg-blue-900"
          >
            Request Quote for Other Products
          </a>
        </div>
      </div>
    </section>
  );
}


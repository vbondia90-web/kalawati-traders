import { FaCheckCircle } from "react-icons/fa";

const brands = [
  {
    name: "JK Lakshmi Cement",
    logo: "/brands/jk-lakshmi.png",
    desc: "Premium cement for residential and commercial construction.",
  },
  {
    name: "Nuvoco",
    logo: "/brands/nuvoco.png",
    desc: "Trusted cement and construction solutions.",
  },
  {
    name: "Kalawati Bricks",
    logo: "/brands/Kalawati-bricks.png",
    desc: "Our own premium fly ash bricks and solid blocks.",
  },
  {
    name: "Yoddha ",
    logo: "/brands/yoddha.png",
    desc: "Reliable TMT bars for reinforced construction.",
  },
  {
    name: "Bangur Cement",
    logo: "/brands/bangur.png",
    desc: "High-strength cement for durable structures.",
  },
];

export default function Brands() {
  return (
    <section id="brands" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-red-600 uppercase tracking-widest font-bold">
            Trusted Brands
          </span>

          <h2 className="text-5xl font-extrabold text-blue-950 mt-4">
            We Deal in Genuine Products
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">
            We supply high-quality products from leading brands to ensure
            reliability and performance for every construction project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="rounded-3xl bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition hover:-translate-y-2"
            >
              <div className="h-20 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-16 object-contain"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-blue-950 text-center">
                {brand.name}
              </h3>

              <p className="mt-3 text-gray-600 text-center text-sm leading-6">
                {brand.desc}
              </p>

              <div className="mt-6 flex items-center justify-center gap-2 text-green-600 font-semibold">
                <FaCheckCircle />
                Genuine Products
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
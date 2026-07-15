import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaArrowRight, FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-blue-950 pt-32">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800"
          alt="Construction materials"
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-white border border-white/20 mb-6">
            <FaStar className="text-yellow-400" />
            Trusted Building Material Supplier in Raipur
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Build Strong.
            <span className="block text-red-500">Build Smart.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-blue-100 leading-8">
            Kalawati Traders supplies AAC Blocks, Cement, TMT Bars, Fly Ash Bricks,
            River Sand, Stone Aggregates, Paver Blocks, Cover Blocks and complete
            construction materials for builders, contractors and homeowners.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-red-600 px-8 py-4 text-white font-bold shadow-xl hover:bg-red-700 transition">
              Request Quote <FaArrowRight />
            </a>
            <a href="https://wa.me/916269707000" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-green-600 px-8 py-4 text-white font-bold shadow-xl hover:bg-green-700 transition">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="tel:+916269707000" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-blue-950 font-bold shadow-xl hover:bg-gray-100 transition">
              <FaPhoneAlt /> Call
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="grid grid-cols-2 gap-5">
          {[
            ["1000+", "Happy Customers"],
            ["4000+", "Deliveries"],
            ["13+", "Products"],
            ["5+", "Brands"],
          ].map(([number, label]) => (
            <div key={label} className="rounded-3xl bg-white/95 p-7 shadow-2xl border border-white/50">
              <h3 className="text-4xl font-extrabold text-red-600">{number}</h3>
              <p className="mt-2 font-semibold text-blue-950">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

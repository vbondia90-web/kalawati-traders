import {
  FaCheckCircle,
  FaTruck,
  FaBoxes,
  FaUsers,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200" alt="Construction" className="rounded-3xl shadow-2xl" />
        </div>
        <div>
          <span className="text-red-600 font-semibold uppercase tracking-widest">About Us</span>
          <h2 className="text-5xl font-bold text-blue-900 mt-3">Building Trust with Quality Construction Materials</h2>
          <p className="mt-6 text-gray-600 leading-8 text-lg">Kalawati Traders is a trusted supplier of premium building materials in Raipur. We serve homeowners, contractors, builders and commercial projects with quality products and reliable delivery.</p>
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="flex gap-3"><FaCheckCircle className="text-red-600 text-2xl mt-1" /><div><h3 className="font-bold text-blue-900">Premium Quality</h3><p className="text-gray-600">Only genuine branded materials.</p></div></div>
            <div className="flex gap-3"><FaTruck className="text-red-600 text-2xl mt-1" /><div><h3 className="font-bold text-blue-900">Fast Delivery</h3><p className="text-gray-600">Quick supply across Raipur.</p></div></div>
            <div className="flex gap-3"><FaBoxes className="text-red-600 text-2xl mt-1" /><div><h3 className="font-bold text-blue-900">Bulk Supply</h3><p className="text-gray-600">Builders & contractors welcome.</p></div></div>
            <div className="flex gap-3"><FaUsers className="text-red-600 text-2xl mt-1" /><div><h3 className="font-bold text-blue-900">Trusted Service</h3><p className="text-gray-600">Dedicated customer support.</p></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}


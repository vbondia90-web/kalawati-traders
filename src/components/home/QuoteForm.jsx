import { useState } from "react";
import { FaWhatsapp, FaCheckCircle, FaTruck, FaTags, FaWarehouse } from "react-icons/fa";

const products = [
  "AAC Blocks",
  "AAC Block Mortar",
  "Wall Putty",
  "Tiles Additive",
  "Cement",
  "TMT Bars",
  "Fly Ash Bricks",
  "Fly Ash Solid Blocks",
  "Red Bricks",
  "Paver Blocks",
  "Cover Blocks",
  "River Sand",
  "Stone Aggregates",
];

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "AAC Blocks",
    quantity: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const text = `Hello Kalawati Traders,%0A%0AI need a quotation.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AProduct: ${form.product}%0AQuantity: ${form.quantity}%0AProject Location: ${form.location}%0AMessage: ${form.message}`;

    window.open(`https://wa.me/916269707000?text=${text}`, "_blank");
  };

  return (
    <section id="quote" className="relative overflow-hidden bg-blue-950 py-24">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800"
          alt="Construction"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <span className="inline-block rounded-full bg-red-600 px-5 py-2 text-sm font-bold uppercase tracking-widest">
            Free Quotation
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight">
            Need Building Materials for Your Project?
          </h2>

          <p className="mt-6 text-blue-100 text-lg leading-8">
            Send your requirement directly to Kalawati Traders on WhatsApp.
            Our team will contact you with pricing, availability and delivery details.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              [<FaCheckCircle />, "Genuine Products"],
              [<FaTruck />, "Fast Delivery"],
              [<FaTags />, "Competitive Pricing"],
              [<FaWarehouse />, "Bulk Supply Available"],
            ].map(([icon, text]) => (
              <div key={text} className="rounded-2xl bg-white/10 border border-white/20 p-5 backdrop-blur">
                <div className="text-red-400 text-3xl">{icon}</div>
                <p className="mt-3 font-bold">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={sendToWhatsApp} className="rounded-3xl bg-white p-8 shadow-2xl">
          <h3 className="text-3xl font-extrabold text-blue-950">
            Request a Quote
          </h3>
          <p className="mt-2 text-gray-600">
            Fill details and send enquiry on WhatsApp.
          </p>

          <div className="mt-8 grid gap-5">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-red-600"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-red-600"
            />

            <select
              name="product"
              value={form.product}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-red-600"
            >
              {products.map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>

            <input
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="Quantity e.g. 5000 bricks / 100 bags"
              className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-red-600"
            />

            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Project Location"
              className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-red-600"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Additional Requirement"
              rows="4"
              className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-red-600"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-white font-extrabold hover:bg-green-700 transition"
            >
              <FaWhatsapp />
              Send Quote on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaDirections, FaFileInvoice } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-3xl font-extrabold">
            KALAWATI <span className="text-red-500">TRADERS</span>
          </h2>
          <p className="mt-3 text-blue-100 font-semibold">
            Building Materials & Construction Solutions
          </p>
          <p className="mt-5 text-gray-300 leading-7">
            Premium supplier of AAC Blocks, Fly Ash Bricks, Cement, TMT Bars,
            River Sand, Stone Aggregates, Paver Blocks and complete construction materials in Raipur.
          </p>
          <p className="mt-5 flex items-center gap-2 text-gray-300">
            <FaFileInvoice className="text-red-500" />
            GSTIN: <strong>22EJOPB4461H1ZC</strong>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5 text-white">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#home" className="hover:text-red-400">Home</a></li>
            <li><a href="#about" className="hover:text-red-400">About</a></li>
            <li><a href="#products" className="hover:text-red-400">Products</a></li>
            <li><a href="#brands" className="hover:text-red-400">Brands</a></li>
            <li><a href="#gallery" className="hover:text-red-400">Gallery</a></li>
            <li><a href="#contact" className="hover:text-red-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5 text-white">Contact</h3>
          <div className="space-y-4 text-gray-300">
            <p className="flex gap-3">
              <FaPhoneAlt className="text-red-500 mt-1" />
              <span>
                Anant Bondia: <strong>6269707000</strong><br />
                Virendra Agrawal: <strong>8815504177</strong>
              </span>
            </p>
            <p className="flex gap-3">
              <FaEnvelope className="text-red-500 mt-1" />
              <span>kalawatitreaders.raipur@gmail.com</span>
            </p>
            <p className="flex gap-3">
              <FaMapMarkerAlt className="text-red-500 mt-1" />
              <span>
                Infront of Bandhwa Talab (Rawan Murti), Beside HP Petrol Pump,
                Main Road, Kachna, Raipur, Chhattisgarh
              </span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5 text-white">Business Actions</h3>
          <div className="grid gap-4">
            <a href="https://wa.me/916269707000" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-600 px-5 py-3 font-bold hover:bg-green-700">
              <FaWhatsapp /> WhatsApp
            </a>

            <a href="tel:+916269707000" className="inline-flex items-center justify-center gap-3 rounded-xl bg-red-600 px-5 py-3 font-bold hover:bg-red-700">
              <FaPhoneAlt /> Call Now
            </a>

            <a href="https://maps.app.goo.gl/84mbUawKRErEfRWW8" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-5 py-3 font-bold text-blue-950 hover:bg-gray-100">
              <FaDirections /> Get Directions
            </a>

            <a href="#quote" className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 font-bold hover:bg-white/10">
              Request Quote
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800 py-6 text-center text-gray-400">
        © 2026 Kalawati Traders. All Rights Reserved.
      </div>
    </footer>
  );
}


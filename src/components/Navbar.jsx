import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Kalawati Traders"
            className="h-14"
          />

          <div>
            <h1 className="text-2xl font-bold">
              Kalawati Traders
            </h1>

            <p className="text-sm text-blue-200">
              Building Materials Supplier
            </p>
          </div>
        </div>

        <div className="hidden lg:flex gap-8">

          <a href="#">Home</a>

          <a href="#">Products</a>

          <a href="#">Brands</a>

          <a href="#">Gallery</a>

          <a href="#">Contact</a>

        </div>

        <a
          href="tel:6269707000"
          className="bg-red-600 px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-red-700 transition"
        >
          <FaPhoneAlt />
          Call Now
        </a>

      </div>
    </nav>
  );
}

import { useState } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Brands", href: "#brands" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex items-center justify-between rounded-2xl bg-white/90 backdrop-blur-xl shadow-xl border border-white/40 px-5 py-3">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="Kalawati Traders" className="h-14 w-auto" />
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-blue-950 leading-tight">
                Kalawati <span className="text-red-600">Traders</span>
              </h1>
              <p className="text-xs text-gray-500">Building Materials Supplier</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-semibold text-gray-700 hover:text-red-600 transition">
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="tel:+916269707000"
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-white font-bold shadow-lg hover:bg-red-700 transition"
          >
            <FaPhoneAlt />
            Call Now
          </a>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-2xl text-blue-950">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-3 rounded-2xl bg-white shadow-xl p-5">
            <div className="grid gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-semibold text-gray-700 hover:text-red-600"
                >
                  {link.name}
                </a>
              ))}
              <a href="tel:+916269707000" className="rounded-xl bg-red-600 px-5 py-3 text-white font-bold text-center">
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

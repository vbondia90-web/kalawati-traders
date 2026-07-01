import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

export default function FloatingButtons() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/916269707000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 text-3xl"
      >
        <FaWhatsapp />
      </a>

      {/* Call */}
      <a
        href="tel:+916269707000"
        className="fixed bottom-28 right-6 bg-red-600 hover:bg-red-700 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 text-2xl"
      >
        <FaPhoneAlt />
      </a>

      {/* Back To Top */}
      <button
        onClick={scrollTop}
        className="fixed bottom-50 right-6 bg-blue-900 hover:bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 text-2xl"
      >
        <FaArrowUp />
      </button>
    </>
  );
}

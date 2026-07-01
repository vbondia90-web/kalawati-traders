import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

export default function FloatingButtons() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <a
        href="https://wa.me/916269707000"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-2xl text-white shadow-2xl transition hover:scale-110 hover:bg-green-700"
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:+916269707000"
        aria-label="Call Kalawati Traders"
        className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-xl text-white shadow-2xl transition hover:scale-110 hover:bg-red-700"
      >
        <FaPhoneAlt />
      </a>

      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-42 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-950 text-xl text-white shadow-2xl transition hover:scale-110 hover:bg-blue-900"
      >
        <FaArrowUp />
      </button>
    </>
  );
}


import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-blue-950 text-white">
      <div className="text-center px-6">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-2xl">
          <img
            src="/logo.png"
            alt="Kalawati Traders Logo"
            className="h-20 w-auto object-contain"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide">
          KALAWATI <span className="text-red-500">TRADERS</span>
        </h1>

        <p className="mt-3 text-blue-100 font-medium">
          Building Materials & Construction Solutions
        </p>

        <div className="mx-auto mt-8 h-2 w-56 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-red-500"></div>
        </div>

        <p className="mt-4 text-sm text-blue-200">
          Loading website...
        </p>
      </div>
    </div>
  );
}

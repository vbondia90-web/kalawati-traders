import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaDirections,
  FaFileInvoice,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 uppercase tracking-widest font-bold">
            Contact Us
          </span>

          <h2 className="text-5xl font-extrabold text-blue-950 mt-4">
            Visit Kalawati Traders
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">
            For quotations, bulk supply, delivery support and product enquiries,
            contact our team or visit our office in Kachna, Raipur.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-3xl bg-white p-8 shadow-2xl">
            <h3 className="text-3xl font-extrabold text-blue-950">
              Business Information
            </h3>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">Address</h4>
                  <p className="mt-1 text-gray-600 leading-7">
                    Infront of Bandhwa Talab (Rawan Murti), Beside HP Petrol Pump,
                    Main Road, Kachna, Raipur, Chhattisgarh
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">Phone</h4>
                  <p className="mt-1 text-gray-600">
                    Anant Bondia: <strong>+91 6269707000</strong>
                  </p>
                  <p className="text-gray-600">
                    Virendra Agrawal: <strong>+91 8815504177</strong>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">Email</h4>
                  <p className="mt-1 text-gray-600">
                    kalawatitreaders.raipur@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <FaFileInvoice />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">GSTIN</h4>
                  <p className="mt-1 text-gray-600 font-semibold">
                    22EJOPB4461H1ZC
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <FaClock />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">Business Hours</h4>
                  <p className="mt-1 text-gray-600">
                    Monday – Saturday: 8:00 AM – 7:00 PM
                  </p>
                  <p className="text-gray-600">Sunday: Call before visit</p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              <a
                href="https://wa.me/916269707000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-4 font-bold text-white hover:bg-green-700 transition"
              >
                <FaWhatsapp /> WhatsApp
              </a>

              <a
                href="tel:+916269707000"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-4 font-bold text-white hover:bg-red-700 transition"
              >
                <FaPhoneAlt /> Call
              </a>

              <a
                href="https://maps.app.goo.gl/84mbUawKRErEfRWW8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-950 px-5 py-4 font-bold text-white hover:bg-blue-900 transition"
              >
                <FaDirections /> Directions
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl bg-white min-h-[520px]">
            <iframe
              title="Kalawati Traders Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5675.40267192065!2d81.7024191257291!3d21.267582720911797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd31b3e503a9%3A0x8e87be38906ab368!2sKalawati%20traders!5e0!3m2!1sen!2sin!4v1782969947996!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="min-h-[520px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFileInvoice } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-blue-900">Contact Us</h2>
          <p className="mt-4 text-gray-600">Get in touch for quotations, bulk orders and product enquiries.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <FaMapMarkerAlt className="text-red-600 text-2xl mt-1"/>
                <div>
                  <h3 className="font-bold text-blue-900">Address</h3>
                  <p>Infront of Bandhwa Talab (Rawan Murti), Beside HP Petrol Pump, Main Road, Kachna, Raipur, Chhattisgarh</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <FaPhoneAlt className="text-red-600"/>
                <div>
                  <p><strong>Anant Bondia:</strong> +91 6269707000</p>
                  <p><strong>Virendra Agrawal:</strong> +91 8815504177</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <FaEnvelope className="text-red-600"/>
                <p>kalawatitraders.raipur@gmail.com</p>
              </div>

              <div className="flex gap-4 items-center">
                <FaFileInvoice className="text-red-600"/>
                <p><strong>GST:</strong> 22EJOPB4461H1ZC</p>
              </div>

              <a
                href="https://wa.me/916269707000"
                target="_blank"
                className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <iframe
              title="Kalawati Traders Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2143.714527292211!2d81.7031202941879!3d21.266838587550396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd31b3e503a9%3A0x8e87be38906ab368!2sKalawati%20traders!5e0!3m2!1sen!2sin!4v1782893853614!5m2!1sen!2sin&output=embed"
              width="100%"
              height="500"
              style={{border:0}}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}


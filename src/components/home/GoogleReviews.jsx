import { FaStar, FaGoogle, FaExternalLinkAlt, FaPenAlt } from "react-icons/fa";

const reviews = [
  { text: "Trusted local supplier for building materials in Raipur." },
  { text: "Quality products with support for contractors, builders and homeowners." },
  { text: "Easy enquiry through phone, WhatsApp and Google Business Profile." },
];

export default function GoogleReviews() {
  const googleProfile = "https://maps.app.goo.gl/MTt5mw9bdDFYtLEM9";

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-red-600 uppercase tracking-widest font-extrabold text-sm">
            Google Reviews
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-blue-950">
            Trusted by Customers in Raipur
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-8">
            Visit our Google Business Profile to check latest ratings, customer reviews,
            business location and directions.
          </p>

          <div className="mt-7 flex items-center justify-center gap-2 text-yellow-400 text-3xl">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} />
            ))}
          </div>

          <p className="mt-3 text-blue-950 font-extrabold text-xl sm:text-2xl">
            Customer-Focused Building Material Supplier
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-3xl bg-gray-50 p-7 sm:p-8 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex gap-1 text-yellow-400 mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>

              <p className="text-gray-600 leading-7">
                “{review.text}”
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-blue-950 text-white flex items-center justify-center font-extrabold">
                  KT
                </div>

                <div>
                  <h3 className="font-bold text-blue-950">Kalawati Traders</h3>
                  <p className="text-sm text-gray-500">Google Business Profile</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={googleProfile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-950 px-7 py-4 text-white font-extrabold hover:bg-blue-900 transition"
          >
            <FaGoogle />
            View Reviews on Google
            <FaExternalLinkAlt className="text-sm" />
          </a>

          <a
            href={googleProfile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-red-600 px-7 py-4 text-white font-extrabold hover:bg-red-700 transition"
          >
            <FaPenAlt />
            Write a Review
          </a>
        </div>
      </div>
    </section>
  );
}


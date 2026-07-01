import { FaStar, FaGoogle, FaExternalLinkAlt } from "react-icons/fa";

const reviews = [
  {
    name: "Customer Review",
    text: "Quality building materials, fast delivery and professional service.",
  },
  {
    name: "Customer Review",
    text: "Good supplier for cement, bricks and construction materials in Raipur.",
  },
  {
    name: "Customer Review",
    text: "Reliable service for builders, contractors and homeowners.",
  },
];

export default function GoogleReviews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 uppercase tracking-widest font-bold">
            Google Reviews
          </span>

          <h2 className="text-5xl font-extrabold text-blue-950 mt-4">
            Trusted by Customers in Raipur
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">
            Customer trust is our biggest strength. View our Google Business profile
            for latest ratings, reviews and directions.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-yellow-400 text-3xl">
            {[1, 2, 3, 4, 5].map((i) => (
              <FaStar key={i} />
            ))}
          </div>

          <p className="mt-2 text-blue-950 font-extrabold text-2xl">
            5-Star Customer Focused Service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-3xl bg-gray-50 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <div className="flex gap-1 text-yellow-400 mb-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-600 leading-7">
                "{review.text}"
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-blue-950 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-bold text-blue-950">{review.name}</h3>
                  <p className="text-sm text-gray-500">Google Business</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://maps.app.goo.gl/84mbUawKRErEfRWW8"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-950 px-8 py-4 text-white font-bold hover:bg-blue-900"
          >
            <FaGoogle />
            View on Google
          </a>

          <a
            href="https://maps.app.goo.gl/84mbUawKRErEfRWW8"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-red-600 px-8 py-4 text-white font-bold hover:bg-red-700"
          >
            Write a Review
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
}


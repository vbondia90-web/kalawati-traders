import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
  "https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?w=1200",
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
  "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200"
];

export default function Gallery() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-blue-900">Project Gallery</h2>
          <p className="mt-4 text-gray-600">
            A glimpse of construction materials and projects we proudly support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              className="overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


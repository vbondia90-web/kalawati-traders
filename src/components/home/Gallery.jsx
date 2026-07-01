import { useState } from "react";
import { FaSearchPlus, FaTimes } from "react-icons/fa";

const gallery = [
  {
    title: "Construction Materials",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
  },
  {
    title: "Fly Ash Bricks",
    category: "Bricks",
    image: "https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?w=1200",
  },
  {
    title: "Paver Blocks",
    category: "Pavers",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200",
  },
  {
    title: "River Sand",
    category: "Sand",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200",
  },
  {
    title: "Cement Supply",
    category: "Cement",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200",
  },
  {
    title: "Building Project",
    category: "Projects",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-blue-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-400 uppercase tracking-widest font-bold">
            Photo Gallery
          </span>

          <h2 className="text-5xl font-extrabold text-white mt-4">
            Materials, Projects & Supply
          </h2>

          <p className="mt-5 text-blue-100 max-w-3xl mx-auto text-lg">
            A professional showcase of building materials, construction work and supply solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item) => (
            <button
              key={item.title}
              onClick={() => setSelected(item)}
              className="group relative overflow-hidden rounded-3xl shadow-2xl text-left"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block rounded-full bg-red-600 px-4 py-1 text-sm font-bold text-white">
                  {item.category}
                </span>

                <h3 className="mt-3 text-2xl font-extrabold text-white">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-950 opacity-0 group-hover:opacity-100 transition">
                <FaSearchPlus />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-12 right-0 text-white text-3xl"
            >
              <FaTimes />
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />

            <div className="mt-4 text-center text-white">
              <h3 className="text-3xl font-bold">{selected.title}</h3>
              <p className="text-blue-200">{selected.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


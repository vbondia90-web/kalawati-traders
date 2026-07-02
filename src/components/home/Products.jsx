import { useMemo, useState } from "react";
import { FaCheckCircle, FaSearch, FaShoppingCart, FaTrash, FaWhatsapp } from "react-icons/fa";

const categories = [
  "All",
  "AAC Products",
  "Bricks & Blocks",
  "Cement",
  "Steel",
  "Sand & Aggregates",
  "Pavers",
  "Construction Chemicals",
];

const products = [
  {
    name: "AAC Blocks",
    category: "AAC Products",
    image: "/products/aac-blocks.jpg",
    desc: "Lightweight, accurate and thermally efficient blocks for modern construction.",
    features: ["Lightweight", "Fire Resistant", "Fast Construction"],
  },
  {
    name: "AAC Block Mortar",
    category: "AAC Products",
    image: "/products/aac-mortar.jpg",
    desc: "High bonding mortar specially used for AAC block masonry work.",
    features: ["Strong Bond", "Less Wastage", "Easy Application"],
  },
  {
    name: "Fly Ash Bricks",
    category: "Bricks & Blocks",
    image: "/products/fly-ash-bricks.jpg",
    desc: "Eco-friendly fly ash bricks with high strength and uniform size.",
    features: ["Eco Friendly", "High Strength", "Uniform Size"],
  },
  {
    name: "Fly Ash Solid Blocks",
    category: "Bricks & Blocks",
    image: "/products/solid-blocks.jpg",
    desc: "Strong fly ash solid blocks suitable for durable wall construction.",
    features: ["Durable", "Load Bearing", "Cost Effective"],
  },
  {
    name: "Red Bricks",
    category: "Bricks & Blocks",
    image: "/products/red-bricks.jpg",
    desc: "Traditional clay red bricks for masonry and construction work.",
    features: ["Traditional", "Strong", "Reliable"],
  },
  {
    name: "Trade Cement",
    category: "Cement",
    image: "/products/cement.jpg",
    desc: "Premium cement from trusted brands for retail and construction projects.",
    features: ["JK Lakshmi", "Nuvoco", "Bangur"],
  },
  {
    name: "Non-Trade Cement",
    category: "Cement",
    image: "/products/non-trade-cement.jpg",
    desc: "Bulk non-trade cement supply for contractors, builders and large projects.",
    features: ["Bulk Supply", "Best Pricing", "Project Use"],
  },
  {
    name: "TMT Bars",
    category: "Steel",
    image: "/products/tmt-bars.jpg",
    desc: "High strength TMT bars for RCC and reinforced construction.",
    features: ["Yoddha TMT", "Strong Grip", "Reliable Quality"],
  },
  {
    name: "River Sand",
    category: "Sand & Aggregates",
    image: "/products/river-sand.jpg",
    desc: "Clean construction-grade river sand for plastering and masonry.",
    features: ["Clean Sand", "Bulk Supply", "Site Delivery"],
  },
  {
    name: "Stone Aggregates",
    category: "Sand & Aggregates",
    image: "/products/stone-aggregates.jpg",
    desc: "Stone aggregates available in different sizes for construction base and RCC work.",
    features: ["10mm", "20mm", "40mm"],
  },
  {
    name: "Paver Blocks",
    category: "Pavers",
    image: "/products/paver-blocks.jpg",
    desc: "Durable paver blocks for outdoor, parking, garden and pathway use.",
    features: ["Durable", "Multiple Designs", "Outdoor Use"],
  },
  {
    name: "Cover Blocks",
    category: "Pavers",
    image: "/products/cover-blocks.jpg",
    desc: "Concrete cover blocks for proper reinforcement spacing in RCC work.",
    features: ["Strong", "Accurate", "RCC Use"],
  },
  {
    name: "Wall Putty",
    category: "Construction Chemicals",
    image: "/products/wall-putty.jpg",
    desc: "Premium wall putty for smooth interior and exterior wall finish.",
    features: ["Smooth Finish", "White Finish", "Durable"],
  },
  {
    name: "Tile Adhesive",
    category: "Construction Chemicals",
    image: "/products/tile-adhesive.jpg",
    desc: "High strength tile adhesive for floor and wall tile fixing.",
    features: ["Strong Bond", "Floor & Wall", "Easy Use"],
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const addToCart = (product) => {
    if (cart.find((item) => item.name === product.name)) return;

    setCart([
      ...cart,
      {
        name: product.name,
        quantity: "",
      },
    ]);
  };

  const removeFromCart = (name) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  const updateQuantity = (name, quantity) => {
    setCart(
      cart.map((item) =>
        item.name === name
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  const sendQuoteCart = () => {
    if (cart.length === 0) return;

    const items = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} - Quantity: ${item.quantity || "Not specified"}`
      )
      .join("%0A");

    const message = `Hello Kalawati Traders,%0A%0AI need quotation for:%0A%0A${items}%0A%0APlease share price and delivery details.`;

    window.open(`https://wa.me/916269707000?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-red-600 uppercase tracking-widest font-extrabold text-sm">
            Product Catalogue
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-blue-950">
            Complete Building Material Solutions
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-8">
            Browse products by category, add items to your quote cart and send one
            enquiry directly on WhatsApp.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-5 sm:p-6 shadow-xl border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-2xl border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-red-600"
              />
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-5 py-3 text-sm font-bold transition ${
                    activeCategory === category
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-950 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000";
                  }}
                  className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <span className="absolute left-4 top-4 rounded-full bg-red-600 px-4 py-2 text-xs font-extrabold text-white">
                  {product.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-extrabold text-blue-950">
                  {product.name}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {product.desc}
                </p>

                <div className="mt-5 grid gap-2">
                  {product.features.map((feature) => (
                    <p key={feature} className="flex items-center gap-2 text-gray-700">
                      <FaCheckCircle className="text-red-600" />
                      {feature}
                    </p>
                  ))}
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <a
                    href="#quote"
                    className="rounded-xl bg-blue-950 px-4 py-3 text-center font-bold text-white hover:bg-blue-900"
                  >
                    View Details
                  </a>

                  <button
                    onClick={() => addToCart(product)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-bold text-white hover:bg-green-700"
                  >
                    <FaShoppingCart />
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="mt-14 rounded-3xl bg-blue-950 p-6 sm:p-8 text-white shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              <div>
                <h3 className="text-3xl font-extrabold">Quote Cart</h3>
                <p className="mt-2 text-blue-100">
                  Add quantities and send all selected products in one WhatsApp enquiry.
                </p>
              </div>

              <button
                onClick={sendQuoteCart}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-green-600 px-7 py-4 font-extrabold text-white hover:bg-green-700"
              >
                <FaWhatsapp />
                Send Quote Request
              </button>
            </div>

            <div className="mt-8 grid gap-4">
              {cart.map((item) => (
                <div
                  key={item.name}
                  className="grid gap-4 rounded-2xl bg-white/10 p-4 sm:grid-cols-[1fr_220px_48px] sm:items-center"
                >
                  <p className="font-bold">{item.name}</p>

                  <input
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.name, e.target.value)}
                    placeholder="Quantity"
                    className="rounded-xl border border-white/20 bg-white p-3 text-blue-950 outline-none"
                  />

                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white hover:bg-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


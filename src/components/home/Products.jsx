import { FaArrowRight } from "react-icons/fa";

const products = [
  { name:"AAC Blocks", img:"https://images.unsplash.com/photo-1513467655676-561b7d489a88?w=800", desc:"Lightweight, strong and thermally efficient blocks."},
  { name:"AAC Block Mortar", img:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800", desc:"High bonding mortar for AAC blocks."},
  { name:"Wall Putty", img:"https://images.unsplash.com/photo-1590650046871-92c887180603?w=800", desc:"Smooth premium wall finish."},
  { name:"Tiles Additive", img:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800", desc:"Improves tile bonding strength."},
  { name:"Cement", img:"https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800", desc:"Premium cement for every project."},
  { name:"TMT Bars", img:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800", desc:"High strength reinforcement bars."},
  { name:"Fly Ash Bricks", img:"https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?w=800", desc:"Eco-friendly quality bricks."},
  { name:"Fly Ash Solid Blocks", img:"https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?w=800", desc:"Durable solid concrete blocks."},
  { name:"Red Bricks", img:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800", desc:"Traditional strong clay bricks."},
  { name:"Paver Blocks", img:"https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=800", desc:"Decorative paving solutions."},
  { name:"Cover Blocks", img:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800", desc:"Concrete cover blocks."},
  { name:"River Sand", img:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800", desc:"Clean fine construction sand."},
];

export default function Products() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-blue-900">Our Products</h2>
          <p className="mt-4 text-gray-600">Complete range of quality building materials.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p)=>(
            <div key={p.name} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src={p.img} alt={p.name} className="h-52 w-full object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900">{p.name}</h3>
                <p className="text-gray-600 mt-3">{p.desc}</p>
                <button className="mt-6 bg-red-600 text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-red-700">
                  Request Quote <FaArrowRight/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


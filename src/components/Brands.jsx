import { motion } from "framer-motion";

const brands=[
"JK Lakshmi Cement",
"Nuvoco",
"Bangur Cement",
"Yoddha TMT",
"Kalawati Bricks"
];

export default function Brands(){
 return(
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-14">
<h2 className="text-5xl font-bold text-blue-900">Our Trusted Brands</h2>
<p className="mt-4 text-gray-600">We deal in genuine products from leading manufacturers.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
{brands.map((b,i)=>(
<motion.div key={b} whileHover={{y:-8,scale:1.03}} className="rounded-3xl border p-8 shadow-lg text-center bg-gray-50">
<div className="w-20 h-20 mx-auto rounded-full bg-blue-900 text-white flex items-center justify-center text-3xl font-bold">
{b.charAt(0)}
</div>
<h3 className="mt-6 text-xl font-bold text-blue-900">{b}</h3>
<p className="mt-2 text-gray-600 text-sm">Authorised quality supply for residential and commercial construction.</p>
</motion.div>
))}
</div>
</div>
</section>
 );
}


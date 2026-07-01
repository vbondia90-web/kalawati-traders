import { FaStar } from "react-icons/fa";

const reviews=[
{name:"Rahul Sharma",text:"Excellent quality materials and on-time delivery. Highly recommended!",rating:5},
{name:"Amit Verma",text:"Competitive prices and genuine brands. Great experience.",rating:5},
{name:"Pooja Agrawal",text:"Very professional service for our house construction.",rating:5},
];

export default function GoogleReviews(){
return(
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-14">
<h2 className="text-5xl font-bold text-blue-900">Google Reviews</h2>
<p className="mt-4 text-gray-600">Rated by our valued customers.</p>
<div className="flex justify-center items-center gap-2 mt-4">
{[1,2,3,4,5].map(i=><FaStar key={i} className="text-yellow-400 text-2xl"/>)}
<span className="text-xl font-bold text-blue-900">5.0</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">
{reviews.map((r,i)=>(
<div key={i} className="bg-gray-100 rounded-3xl p-8 shadow-lg">
<div className="flex mb-4">{[1,2,3,4,5].map(s=><FaStar key={s} className="text-yellow-400"/>)}</div>
<p className="text-gray-600">"{r.text}"</p>
<h3 className="mt-6 font-bold text-blue-900">{r.name}</h3>
</div>
))}
</div>
<div className="text-center mt-12">
<a href="https://maps.app.goo.gl/84mbUawKRErEfRWW8" target="_blank" className="bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700">
View on Google
</a>
</div>
</div>
</section>
)}


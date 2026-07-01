import { useState } from "react";

const products=[
"AAC Blocks","AAC Block Mortar","Wall Putty","Tiles Additive","Cement","TMT Bars","Fly Ash Bricks","Fly Ash Solid Blocks","Red Bricks","Paver Blocks","Cover Blocks","River Sand","Stone Aggregates"
];

export default function QuoteForm(){
const [form,setForm]=useState({name:"",phone:"",product:products[0],qty:"",city:"",message:""});
const submit=(e)=>{
e.preventDefault();
const text=`Hello Kalawati Traders,%0AName: ${form.name}%0APhone: ${form.phone}%0AProduct: ${form.product}%0AQuantity: ${form.qty}%0ACity: ${form.city}%0AMessage: ${form.message}`;
window.open(`https://wa.me/916269707000?text=${text}`,"_blank");
};
return(
<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-5xl font-bold text-blue-900 text-center">Request a Quote</h2>
<p className="text-center text-gray-600 mt-4">Fill in your requirement and send it directly to us on WhatsApp.</p>
<form onSubmit={submit} className="mt-10 space-y-5 bg-gray-100 p-8 rounded-3xl shadow-xl">
<input className="w-full p-4 rounded-xl" placeholder="Your Name" onChange={e=>setForm({...form,name:e.target.value})}/>
<input className="w-full p-4 rounded-xl" placeholder="Phone Number" onChange={e=>setForm({...form,phone:e.target.value})}/>
<select className="w-full p-4 rounded-xl" onChange={e=>setForm({...form,product:e.target.value})}>
{products.map(p=><option key={p}>{p}</option>)}
</select>
<input className="w-full p-4 rounded-xl" placeholder="Quantity" onChange={e=>setForm({...form,qty:e.target.value})}/>
<input className="w-full p-4 rounded-xl" placeholder="City" onChange={e=>setForm({...form,city:e.target.value})}/>
<textarea className="w-full p-4 rounded-xl h-36" placeholder="Additional Message" onChange={e=>setForm({...form,message:e.target.value})}/>
<button className="w-full bg-red-600 text-white py-4 rounded-xl hover:bg-red-700">Send Quote Request</button>
</form>
</div>
</section>
)}


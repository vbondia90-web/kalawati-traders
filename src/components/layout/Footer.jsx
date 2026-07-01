import { FaFacebook, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer(){
return(
<footer className="bg-blue-950 text-white pt-16">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

<div>
<h2 className="text-3xl font-bold text-red-500">Kalawati Traders</h2>
<p className="mt-4 text-gray-300">
Your trusted supplier of premium building materials in Raipur.
</p>
</div>

<div>
<h3 className="text-xl font-semibold mb-4">Quick Links</h3>
<ul className="space-y-2 text-gray-300">
<li>Home</li>
<li>Products</li>
<li>Brands</li>
<li>Gallery</li>
<li>Contact</li>
</ul>
</div>

<div>
<h3 className="text-xl font-semibold mb-4">Contact</h3>
<div className="space-y-3 text-gray-300">
<p className="flex gap-2"><FaPhoneAlt/> +91 6269707000</p>
<p className="flex gap-2"><FaEnvelope/> kalawatitreaders.raipur@gmail.com</p>
<p className="flex gap-2"><FaMapMarkerAlt/> Kachna, Raipur, Chhattisgarh</p>
<p><strong>GST:</strong> 22EJOPB4461H1ZC</p>
</div>
</div>

<div>
<h3 className="text-xl font-semibold mb-4">Follow Us</h3>
<div className="flex gap-4 text-2xl">
<a href="#"><FaFacebook/></a>
<a href="#"><FaInstagram/></a>
<a href="https://wa.me/916269707000"><FaWhatsapp/></a>
</div>
</div>

</div>

<div className="border-t border-blue-800 mt-12 py-6 text-center text-gray-400">
© 2026 Kalawati Traders. All Rights Reserved.
</div>
</footer>
)}


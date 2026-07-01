import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Stats from "./components/home/Stats";
import About from "./components/home/About";
import WhyChoose from "./components/home/WhyChoose";
import Products from "./components/home/Products";
import Brands from "./components/home/Brands";
import Gallery from "./components/home/Gallery";
import GoogleReviews from "./components/home/GoogleReviews";
import Contact from "./components/home/Contact";
import QuoteForm from "./components/home/QuoteForm";
import Footer from "./components/layout/Footer";
import FloatingButtons from "./components/layout/FloatingButtons";

export default function App() {
  return (
 <>
  <Navbar />
  <Hero />
  <Stats />
  <About />
  <WhyChoose />
  <Products />
  <Brands />
  <Gallery />
  <GoogleReviews />
  <Contact />
  <QuoteForm />
  <Footer />
<FloatingButtons />
</>
  );
}



import Navbar from "@/components/ui/Navbar";
import Schemes from "@/components/ui/Schemes";
import Hero from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Features } from "@/components/Features";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Schemes />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}

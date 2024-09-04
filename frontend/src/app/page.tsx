import Navbar from "@/components/ui/Navbar";
import Link from "next/link";
import Hero from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Schemes from "@/components/ui/Schemes";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Schemes />
      <Testimonials />
      <Footer />
    </>
  );
}

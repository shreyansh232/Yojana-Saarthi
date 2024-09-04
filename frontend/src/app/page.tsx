import Navbar from "@/components/ui/Navbar";
import Link from "next/link";
import Hero from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials"; 

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />  
      <Testimonials />
    </>
  );
}

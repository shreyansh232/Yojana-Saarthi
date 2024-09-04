import Navbar from "@/components//Navbar";
import Hero from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Schemes from "@/components/Schemes";
import PostOfficeNavigator from "@/components/PostOfficeNavigator";
import { Features } from "@/components/Features";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Schemes />
      <Features />
      <Testimonials />
      <PostOfficeNavigator />
      <Footer />
    </>
  );
}

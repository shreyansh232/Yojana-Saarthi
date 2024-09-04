import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen w-full bg-[#FFFCF2]">
      <div className="container mx-auto flex h-full flex-col-reverse items-center md:flex-row">
        <div className="px-4 text-center md:w-3/5 md:text-left">
          <h1
            className="text-4xl font-bold leading-tight text-gray-900 md:text-8xl"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
          >
            Empowering <br />
            Financial Inclusion <br />
            Across India
          </h1>

          <p
            className="mt-6 text-3xl text-gray-600"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}
          >
            Discover tailored financial solutions with India Post's AI-powered
            needs identifier.
          </p>
          <Button
            className="mt-5 h-[60px] w-[200px] text-xl"
            variant={"button"}
          >
            Get Started
          </Button>
        </div>
        <div className="flex justify-center px-4 md:w-1/2 md:justify-end">
          <Image
            src="/assets/post-office.png"
            alt="India Post"
            className=""
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

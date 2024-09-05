"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="h-screen w-full bg-[#FFFCF2]">
      <div className="container mx-auto flex h-full flex-col-reverse items-center justify-between md:flex-row">
        <div className="px-4 text-center md:w-3/5 md:text-left">
          <h1
            className="text-4xl font-bold leading-tight text-gray-900 md:text-8xl"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
          >
            {t("empowering")} <br />
            {t("financial_inclusion")} <br />
            {t("across_india")}
          </h1>

          <p
            className="mt-6 text-3xl text-gray-600"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}
          >
            {t("discover_solutions")}
          </p>
          <Link href={"/dashboard"}>
            <Button
              className="mt-5 h-[60px] w-[200px] text-xl"
              variant={"button"}
            >
              {t("get_started")}
            </Button>
          </Link>
        </div>
        <div className="flex justify-center px-4 md:w-1/2 md:justify-end">
          <Image
            src="/assets/yojana-saarthi-hero.png"
            alt="Yojana Saarthi"
            className="ml"
            width={1200}
            height={1200}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

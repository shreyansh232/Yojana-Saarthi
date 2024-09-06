"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useTranslation } from "react-i18next";

export function Testimonials() {
  const { t } = useTranslation();
  const testimonials = [
    {
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=500&h=500&q=80",
      quote: <div className="text-xl">{t("testimonial_amit")}</div>,
      name: t("amit_sharma"),
      title: t("farmer"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=500&h=500&q=80",
      quote: <div className="text-xl">{t("testimonial_neha")}</div>,
      name: t("neha_verma"),
      title: t("school_teacher"),
    },
  ];
  return (
    <div>
      <div className="dark:bg-grid-white/[0.05] relative m-5 flex flex-col items-center justify-center overflow-hidden rounded-md bg-transparent antialiased">
        <h1
          className="mb-24 text-center text-6xl font-bold text-[#EB5E28]"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}
        >
          {t("what_people_saying")}
        </h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default Testimonials;

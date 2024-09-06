"use client";

import { useTranslation } from "react-i18next";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Target, Briefcase, Star, Globe } from "lucide-react";

export function Features() {
  const { t } = useTranslation();
  const projects = [
    {
      title: `${t("targeted_service_delivery")}`,
      description: `${t("targeted_service_delivery_desc")}`,
      icon: <Target className="h-10 w-10" />,
    },
    {
      title: `${t("efficient_resource_allocation")}`,
      description: `${t("efficient_resource_allocation_desc")}`,
      icon: <Briefcase className="h-10 w-10" />,
    },
    {
      title: `${t("enhanced_financial_inclusion")}`,
      description: `${t("enhanced_financial_inclusion_desc")}`,
      icon: <Star className="h-10 w-10" />,
    },
    {
      title: `${t("improved_customer_experience")}`,
      description: `${t("improved_customer_experience_desc")}`,
      icon: <Globe className="h-10 w-10" />,
    },
  ];

  return (
    <div className="mt-20 h-screen bg-wheat">
      <div className="mx-auto max-w-5xl px-8">
        <h1
          className="mb-10 mt-10 text-center text-6xl font-bold text-[#EB5E28]"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}
        >
          {t("what_we_provide")}
        </h1>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

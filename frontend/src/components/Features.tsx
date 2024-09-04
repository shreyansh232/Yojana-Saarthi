"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Target, Briefcase, Star, Globe } from "lucide-react";

export function Features() {
  const projects = [
    {
      title: "Targeted Service Delivery",
      description:
        "Precisely meeting demographic needs will boost campaign effectiveness, leading to higher conversion rates and customer satisfaction.",
      icon: <Target className="h-10 w-10"/>,
    },
    {
      title: "Efficient Resource Allocation",
      description:
        "Optimizing resources based on demand patterns will reduce costs and enhance overall service efficiency.",
      icon: <Briefcase className="h-10 w-10"/>,
    },
    {
      title: "Enhanced Financial Inclusion",
      description:
        "Reaching underserved populations with tailored financial products will promote economic well-being and support national financial inclusion goals.",
      icon: <Star className="h-10 w-10"/>,
    },
    {
      title: "Improved Customer Experience",
      description:
        "Aligning services with customer needs and routines will strengthen loyalty and drive higher usage of postal financial services.",
      icon: <Globe className="h-10 w-10"/>,
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-8">
      <h1
        className="mb-10 mt-20 text-center text-6xl font-bold text-[#EB5E28]"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}
      >
        What do we provide?
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}

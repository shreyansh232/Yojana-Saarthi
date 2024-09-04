"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="dark:bg-grid-white/[0.05] relative mb-36 flex h-screen flex-col items-center justify-center overflow-hidden rounded-md bg-transparent antialiased">
      <h1
        className="mb-24 text-center text-6xl font-bold text-[#EB5E28]"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}
      >
        What are people saying about us?
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=500&h=500&q=80",
    quote: (
      <div>
        Using this platform has greatly enhanced my ability to access financial
        services tailored to my needs.
        <strong> The platform's insights into local needs are spot on!</strong>
        It’s a game-changer for anyone looking to manage their finances
        effectively.
      </div>
    ),
    name: "Amit Sharma",
    title: "Farmer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=500&h=500&q=80",
    quote: (
      <div>
        The platform identified the best savings scheme for my situation.
        <strong>
          {" "}
          I feel more secure about my future thanks to this tool.
        </strong>
      </div>
    ),
    name: "Neha Verma",
    title: "School Teacher",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=faces&fit=crop&w=500&h=500&q=80",
    quote: (
      <div>
        This platform made it easy to understand and choose the right insurance
        plan.
        <strong> It’s intuitive and highly user-friendly.</strong>I would
        recommend it to anyone.
      </div>
    ),
    name: "Rahul Gupta",
    title: "Small Business Owner",
  },
  {
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?crop=faces&fit=crop&w=500&h=500&q=80",
    quote: (
      <div>
        The insights provided by this platform have been invaluable.
        <strong> The accuracy of the recommendations is impressive.</strong>
      </div>
    ),
    name: "Sunita Rao",
    title: "Homemaker",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=faces&fit=crop&w=500&h=500&q=80",
    quote: (
      <div>
        Thanks to this platform, I’ve been able to better manage my savings and
        plan for the future.
        <strong>
          {" "}
          It’s like having a financial advisor at your fingertips.
        </strong>
      </div>
    ),
    name: "Prakash Singh",
    title: "Retired Government Officer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=500&h=500&q=80",
    quote: (
      <div>
        I’m really impressed with how this platform understands the needs of
        people like me.
        <strong> It’s helped me make better financial decisions.</strong>
      </div>
    ),
    name: "Kiran Patel",
    title: "Student",
  },
];

export default testimonials;

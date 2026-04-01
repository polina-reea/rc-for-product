"use client";

import { useState, useEffect } from "react";
import { ArrowIcon } from "./ArrowIcon";

const testimonials = [
  {
    company: "HOLYWATER",
    category: "Streaming & Entertainment",
    logo: "https://cdn.sanity.io/images/c3qnx9b0/production/b1ef2e2dfd9a9833d0f43a75c1c70da56e05f9dd-80x80.svg?w=128&q=75&auto=format",
    quote:
      "RevenueCat gave us the infrastructure to scale globally without rebuilding billing for every market.",
    metric: "$0 → $70M ARR",
    person: "HOLYWATER Team",
    title: "Streaming Platform",
    avatar:
      "https://cdn.sanity.io/images/c3qnx9b0/production/45965fc83cb46a53f04dd5f2b107e2cd2e0bb9bf-260x260.jpg?w=96&q=75&auto=format",
    link: "https://www.revenuecat.com/customers/holywater/",
  },
  {
    company: "Photoroom",
    category: "Photo Editing",
    logo: "https://cdn.sanity.io/images/c3qnx9b0/production/e9d2f1b892f133f44f694a6c6bf4ea237c918212-80x80.svg?w=128&q=75&auto=format",
    quote:
      "RevenueCat enables us to have one single source of truth for subscriptions and revenue data.",
    metric: null,
    person: "Olivier Lemarié",
    title: "Head of Growth",
    avatar:
      "https://cdn.sanity.io/images/c3qnx9b0/production/db23b1ed87d8d86608220b5a66612f56fcf8c595-96x96.jpg?w=96&q=75&auto=format",
    link: "https://www.revenuecat.com/customers/photoroom/",
  },
  {
    company: "VSCO",
    category: "Photo Filters",
    logo: "https://cdn.sanity.io/images/c3qnx9b0/production/75c4a4728e6b9721bb15ab36a6d601dfbfd9c9ec-80x80.svg?w=128&q=75&auto=format",
    quote:
      "The RevenueCat and Braze integration allowed us to implement fast winback messaging.",
    metric: "~5% churn reduction",
    person: "Shaheen Essabhoy",
    title: "Business Intelligence",
    avatar:
      "https://cdn.sanity.io/images/c3qnx9b0/production/40bcd4291888aba430c034c8f42f6250748160e5-144x145.jpg?w=96&q=75&auto=format",
    link: "https://www.revenuecat.com/customers/vsco/",
  },
];

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[488px] mx-auto">
      <div className="relative h-[380px]">
        {testimonials.map((t, i) => {
          const offset = (i - active + testimonials.length) % testimonials.length;
          const isActive = offset === 0;
          const isBehind1 = offset === 1;
          const isBehind2 = offset === 2;

          return (
            <article
              key={t.company}
              className="absolute inset-0 mx-auto flex min-h-[300px] max-w-[488px] flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-700 ease-in-out cursor-pointer"
              style={{
                transform: `translateY(${offset * 32}px) translateX(${offset * 24}px) scale(${1 - offset * 0.03})`,
                opacity: isActive ? 1 : isBehind1 ? 0.7 : 0.4,
                zIndex: testimonials.length - offset,
                pointerEvents: isActive ? "auto" : "none",
              }}
              onClick={() => setActive((active + 1) % testimonials.length)}
            >
              <header className="grid grid-cols-[64px_1fr] gap-x-4 gap-y-0.5">
                <div className="row-span-2 flex size-16 items-center justify-center overflow-hidden rounded-[20px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="size-full object-contain"
                    height={64}
                    width={64}
                    src={t.logo}
                    alt={t.company}
                  />
                </div>
                <h3 className="col-start-2 self-end text-lg leading-tight font-medium text-primary">
                  {t.company}
                </h3>
                <p className="col-start-2 truncate text-base text-gray-800">
                  {t.category}
                </p>
              </header>
              {t.metric && (
                <div className="mt-3 inline-flex items-center rounded-full bg-secondary-blue-1/10 px-3 py-1 w-fit">
                  <span className="font-object text-sm font-medium text-secondary-blue-1">{t.metric}</span>
                </div>
              )}
              <blockquote className="py-3 text-base leading-normal font-light text-gray-800">
                <p>&quot;{t.quote}&quot;</p>
              </blockquote>
              <footer className="mt-auto grid grid-cols-[40px_1fr_max-content] gap-x-4 gap-y-0.5 max-sm:grid-cols-[40px_1fr]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="row-span-2 size-10 rounded-full object-cover"
                  height={40}
                  width={40}
                  src={t.avatar}
                  alt={t.person}
                />
                <p className="col-start-2 self-end text-base leading-snug font-medium text-primary">
                  {t.person}
                </p>
                <p className="col-start-2 truncate text-base leading-tight font-light text-gray-750">
                  {t.title}
                </p>
                <a
                  className="font-object inline-flex items-center gap-x-1 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 col-start-3 row-span-2 row-start-1 self-end text-base font-medium max-sm:col-start-2 max-sm:row-start-3 max-sm:mt-4 max-sm:ml-auto"
                  href={t.link}
                  onClick={(e) => e.stopPropagation()}
                >
                  Read the case study
                  <ArrowIcon className="w-1.5!" />
                </a>
              </footer>
            </article>
          );
        })}
      </div>
    </div>
  );
}

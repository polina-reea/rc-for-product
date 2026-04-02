"use client";

import { useState, useRef, useCallback, type ReactNode } from "react";

const CARD_HEIGHT = 380; // fixed card height in px

const testimonials: {
  company: string;
  category: string;
  logo: string;
  quote: ReactNode;
  quoteClass: string;
  person: string;
  title: string;
  avatar: string;
  link: string;
}[] = [
  {
    company: "ChatGPT",
    category: "AI-Powered Conversational Assistant",
    logo: "https://cdn.sanity.io/images/c3qnx9b0/production/26753149521bfd2786c698504599908365f707f4-80x80.svg?w=128&q=75&auto=format",
    quote: (
      <>
        With RevenueCat, we{" "}
        <strong className="font-medium text-primary">never had to slow down</strong>.
        They made it easy to keep our focus on building the best product while
        ensuring our mission of accessible, safe AI for everyone.
      </>
    ),
    quoteClass: "text-lg",
    person: "Sara Conlon",
    title: "Head of Financial Engineering",
    avatar:
      "https://cdn.sanity.io/images/c3qnx9b0/production/11799f6c149ca96216c10ad887cfb2d546fba164-96x96.jpg?w=96&q=75&auto=format",
    link: "https://www.revenuecat.com/customers/revenuecat-openai",
  },
  {
    company: "HOLYWATER",
    category: "Streaming & Entertainment",
    logo: "https://cdn.sanity.io/images/c3qnx9b0/production/89186aeb48369a707fd6e2203f844f63fe4d2174-80x80.svg?w=128&q=75&auto=format",
    quote: (
      <>
        RevenueCat{" "}
        <strong className="font-medium text-primary">eliminates the manual work</strong>.
        We can set up new products, entitlements, and price tiers
        quickly&mdash;without spending days building backend logic.
      </>
    ),
    quoteClass: "text-lg",
    person: "Anatolii Kasianov",
    title: "CTO and Co-founder",
    avatar:
      "https://cdn.sanity.io/images/c3qnx9b0/production/71ea6ff5cd78c0ba1e3afcce90d83c7875974c61-72x72.webp?w=96&q=75&auto=format",
    link: "https://www.revenuecat.com/customers/holywater/",
  },
  {
    company: "dub",
    category: "Music Streaming",
    logo: "https://cdn.sanity.io/images/c3qnx9b0/production/14acecb4a197d80dfa7986b2d8155c6a62256ca4-80x80.svg?w=128&q=75&auto=format",
    quote: (
      <>
        Moving from monthly to annual subscriptions was the most important shift
        we made for our business. RevenueCat gave us the flexibility to{" "}
        <strong className="font-medium text-primary">
          run A/B tests without engineering overhead
        </strong>
        , which was a game changer.
      </>
    ),
    quoteClass: "text-base",
    person: "Brett Chereskin",
    title: "COO",
    avatar:
      "https://cdn.sanity.io/images/c3qnx9b0/production/6b050be5acd2b53a12419b06a9cb648a6fb7800b-80x80.jpg?w=96&q=75&auto=format",
    link: "https://www.revenuecat.com/customers/dub-app",
  },
  {
    company: "VSCO",
    category: "Photo Filters",
    logo: "https://cdn.sanity.io/images/c3qnx9b0/production/75c4a4728e6b9721bb15ab36a6d601dfbfd9c9ec-80x80.svg?w=128&q=75&auto=format",
    quote: (
      <>
        The RevenueCat and Braze integration allowed us to implement{" "}
        <strong className="font-medium text-primary">fast winback messaging</strong>.
      </>
    ),
    quoteClass: "text-xl",
    person: "Shaheen Essabhoy",
    title: "Business Intelligence",
    avatar:
      "https://cdn.sanity.io/images/c3qnx9b0/production/40bcd4291888aba430c034c8f42f6250748160e5-144x145.jpg?w=96&q=75&auto=format",
    link: "https://www.revenuecat.com/customers/vsco/",
  },
  {
    company: "RocketSim",
    category: "An essential tool for app developers",
    logo: "https://cdn.sanity.io/images/c3qnx9b0/production/39f531e18947f35909fa6c1dd5858d562f2b1db9-80x80.svg?w=128&q=75&auto=format",
    quote: (
      <>
        Using RevenueCat Experiments, I{" "}
        <strong className="font-medium text-primary">
          increased RocketSim&rsquo;s LTV by 47%
        </strong>
        . Experiments allowed me to quickly deploy tests for subscription
        duration mix and trial duration, all remotely without a new app
        submission.
      </>
    ),
    quoteClass: "text-base",
    person: "Antoine van der Lee",
    title: "Founder",
    avatar:
      "https://cdn.sanity.io/images/c3qnx9b0/production/681fa4aaa9574a6e693bc6fa348fdf5f6721710c-400x400.jpg?w=96&q=75&auto=format",
    link: "https://www.revenuecat.com/customers/rocketsim/",
  },
];

const GAP = 32; // gap between cards in px
const PEEK = 100; // how much of prev/next card is visible

function Card({ t, isActive }: { t: (typeof testimonials)[number]; isActive: boolean }) {
  return (
    <article
      className="w-full max-w-[488px] flex flex-col rounded-2xl border border-border bg-white p-6"
      style={{ boxShadow: "0 4px 12px rgba(144, 138, 208, 0.08)", height: CARD_HEIGHT }}
    >
      <header className="grid grid-cols-[64px_1fr] gap-x-4 gap-y-0.5">
        <div className="row-span-2 flex size-16 items-center justify-center overflow-hidden rounded-[20px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="size-full object-contain" height={64} width={64} src={t.logo} alt={t.company} />
        </div>
        <h3 className="col-start-2 self-end text-lg leading-tight font-medium text-primary">{t.company}</h3>
        <p className="col-start-2 truncate text-base text-gray-800">{t.category}</p>
      </header>

      <blockquote className={`py-4 leading-normal font-light text-gray-800 ${t.quoteClass}`}>
        <p>&ldquo;{t.quote}&rdquo;</p>
      </blockquote>

      <footer className="mt-auto grid grid-cols-[40px_1fr_max-content] gap-x-4 gap-y-0.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="row-span-2 size-10 rounded-full object-cover" height={40} width={40} src={t.avatar} alt={t.person} />
        <p className="col-start-2 self-end text-base leading-snug font-medium text-primary">{t.person}</p>
        <p className="col-start-2 truncate text-base leading-tight font-light text-gray-750">{t.title}</p>
        {isActive ? (
          <a
            className="font-object inline-flex items-center gap-x-1 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 col-start-3 row-span-2 row-start-1 self-end text-base font-medium"
            href={t.link}
          >
            Read Case Study
            <svg className="w-1.5! shrink-0" viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="m0 9.002 6.998-3.844V3.844L0 0v1.711l5.08 2.79L0 7.291z" fill="currentColor" fillRule="evenodd" />
            </svg>
          </a>
        ) : (
          <span className="font-object inline-flex items-center gap-x-1 text-secondary-blue-1 col-start-3 row-span-2 row-start-1 self-end text-base font-medium">
            Read Case Study
            <svg className="w-1.5! shrink-0" viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="m0 9.002 6.998-3.844V3.844L0 0v1.711l5.08 2.79L0 7.291z" fill="currentColor" fillRule="evenodd" />
            </svg>
          </span>
        )}
      </footer>
    </article>
  );
}

// Build infinite track: [clone-last, ...real, clone-first]
const track = [
  testimonials[testimonials.length - 1],
  ...testimonials,
  testimonials[0],
];

export function TestimonialCarousel() {
  // index into `track` — starts at 1 (first real card)
  const [pos, setPos] = useState(1);
  const [animate, setAnimate] = useState(true);
  const isTransitioning = useRef(false);

  const STEP = CARD_HEIGHT + GAP;
  const translateY = -(pos * STEP) + PEEK + GAP;
  const viewportHeight = PEEK + GAP + CARD_HEIGHT + GAP + PEEK;

  const maskGradient = `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) ${PEEK}px, black ${PEEK + GAP}px, black ${PEEK + GAP + CARD_HEIGHT}px, rgba(0,0,0,0.6) ${PEEK + GAP + CARD_HEIGHT + GAP}px, transparent 100%)`;

  const realIndex = (pos - 1 + testimonials.length) % testimonials.length;

  const handleTransitionEnd = useCallback(() => {
    isTransitioning.current = false;
    // If we landed on a clone, snap to the real card instantly
    if (pos === 0) {
      setAnimate(false);
      setPos(testimonials.length); // jump to real last
      requestAnimationFrame(() => setAnimate(true));
    } else if (pos === track.length - 1) {
      setAnimate(false);
      setPos(1); // jump to real first
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [pos]);

  const goNext = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setPos((p) => p + 1);
  };

  const goPrev = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setPos((p) => p - 1);
  };

  return (
    <div className="relative w-full max-w-[488px] mx-auto">
      {/* Viewport */}
      <div
        className="relative overflow-hidden"
        style={{
          height: viewportHeight,
          maskImage: maskGradient,
          WebkitMaskImage: maskGradient,
        }}
      >
        {/* Sliding track */}
        <div
          className={animate ? "transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]" : ""}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: GAP,
            transform: `translateY(${translateY}px)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {track.map((t, i) => (
            <Card
              key={`${t.company}-${i}`}
              t={t}
              isActive={i === pos}
            />
          ))}
        </div>
      </div>

      {/* Click zones */}
      <button
        type="button"
        className="absolute top-0 left-0 right-0 cursor-pointer"
        style={{ height: PEEK + GAP }}
        onClick={goPrev}
        aria-label="Previous testimonial"
      />
      <button
        type="button"
        className="absolute bottom-0 left-0 right-0 cursor-pointer"
        style={{ height: PEEK + GAP }}
        onClick={goNext}
        aria-label="Next testimonial"
      />
    </div>
  );
}

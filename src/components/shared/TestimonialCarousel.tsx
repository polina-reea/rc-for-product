"use client";

import { useState, useRef, useCallback, useEffect, type ReactNode } from "react";
import { testimonials as testimonialData } from "@/data/testimonials";

const CARD_HEIGHT_DESKTOP = 380;
const CARD_HEIGHT_MOBILE = 280;

const testimonials = testimonialData
  .filter((t) => t.id !== "floga") // carousel excludes floga
  .map((t) => ({
    company: t.company,
    category: t.category,
    logo: t.logo,
    quote: (
      <>
        {t.quoteParts.before}
        <strong className="font-medium text-primary">{t.quoteParts.bold}</strong>
        {t.quoteParts.after}
      </>
    ) as ReactNode,
    quoteClass: t.quoteClass || "text-base",
    person: t.person,
    title: t.title,
    avatar: t.avatar,
    link: t.link,
  }));

const GAP = 32; // gap between cards in px
const PEEK = 100; // how much of prev/next card is visible

function Card({ t, isActive, height }: { t: (typeof testimonials)[number]; isActive: boolean; height: number }) {
  return (
    <article
      className="w-full min-w-[420px] max-w-[480px] flex flex-col rounded-2xl border border-border bg-white p-6 max-md:min-w-0 max-md:max-w-[420px] max-md:p-4"
      style={{ boxShadow: "0 4px 12px rgba(144, 138, 208, 0.08)", height }}
    >
      <header className="grid grid-cols-[64px_1fr] gap-x-4 gap-y-0.5 max-md:grid-cols-[48px_1fr] max-md:gap-x-3">
        <div className="row-span-2 flex size-16 max-md:size-12 items-center justify-center overflow-hidden rounded-[20px] max-md:rounded-[14px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="size-full object-contain" height={64} width={64} src={t.logo} alt={t.company} />
        </div>
        <h3 className="col-start-2 self-end text-lg max-md:text-base leading-tight font-medium text-primary">{t.company}</h3>
        <p className="col-start-2 truncate text-base max-md:text-sm text-gray-800">{t.category}</p>
      </header>

      <blockquote className={`py-3 leading-normal font-light text-gray-800 max-md:text-sm ${t.quoteClass}`}>
        <p>&ldquo;{t.quote}&rdquo;</p>
      </blockquote>

      <footer className="mt-auto grid grid-cols-[40px_1fr_max-content] gap-x-4 gap-y-0.5 max-md:grid-cols-[32px_1fr_max-content] max-md:gap-x-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="row-span-2 size-10 max-md:size-8 rounded-full object-cover" height={40} width={40} src={t.avatar} alt={t.person} />
        <p className="col-start-2 self-end text-base max-md:text-sm leading-snug font-medium text-primary">{t.person}</p>
        <p className="col-start-2 truncate text-base max-md:text-xs leading-tight font-light text-gray-750">{t.title}</p>
        {isActive ? (
          <a
            className="font-object inline-flex items-center gap-x-1 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 col-start-3 row-span-2 row-start-1 self-end text-base max-md:text-xs font-medium"
            href={t.link}
          >
            Read Case Study
            <svg className="w-1.5! shrink-0" viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="m0 9.002 6.998-3.844V3.844L0 0v1.711l5.08 2.79L0 7.291z" fill="currentColor" fillRule="evenodd" />
            </svg>
          </a>
        ) : (
          <span className="font-object inline-flex items-center gap-x-1 text-secondary-blue-1 col-start-3 row-span-2 row-start-1 self-end text-base max-md:text-xs font-medium">
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
  const [cardHeight, setCardHeight] = useState(CARD_HEIGHT_DESKTOP);

  useEffect(() => {
    const update = () => setCardHeight(window.innerWidth < 768 ? CARD_HEIGHT_MOBILE : CARD_HEIGHT_DESKTOP);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const STEP = cardHeight + GAP;
  const translateY = -(pos * STEP) + PEEK + GAP;
  const viewportHeight = PEEK + GAP + cardHeight + GAP + PEEK;

  const maskGradient = `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) ${PEEK}px, black ${PEEK + GAP}px, black ${PEEK + GAP + cardHeight}px, rgba(0,0,0,0.6) ${PEEK + GAP + cardHeight + GAP}px, transparent 100%)`;

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
    <div className="relative w-full max-w-[480px] max-md:max-w-[420px] mx-auto">
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
              height={cardHeight}
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

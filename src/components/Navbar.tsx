"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { navItems, navDirectLinks, navAuth } from "@/data/navigation";

export function Navbar() {
  const [bgWhite, setBgWhite] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkBg = () => {
      // Sample a point just below the navbar (64px tall)
      const el = document.elementFromPoint(window.innerWidth / 2, 68);
      if (!el) return;

      // Walk up to find the nearest section/footer with a background
      let node: Element | null = el;
      while (node && node !== document.body) {
        const bg = getComputedStyle(node).backgroundColor;
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
          // rgb(249, 249, 251) is gray-50, rgb(255, 255, 255) is white
          const isWhite = bg.includes("255, 255, 255");
          setBgWhite(isWhite);
          return;
        }
        node = node.parentElement;
      }
    };

    window.addEventListener("scroll", checkBg, { passive: true });
    checkBg(); // initial check
    return () => window.removeEventListener("scroll", checkBg);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${bgWhite ? "bg-white" : "bg-gray-50"}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a
          className="font-object inline-flex items-center gap-x-1 rounded transition-colors duration-300 text-primary hover:text-secondary-red z-50 w-max pt-1.5"
          href="/"
        >
          <Image
            height={40}
            width={138}
            src="/logo.svg"
            alt="RevenueCat"
            style={{ color: "transparent" }}
          />
          <span className="sr-only">Back to the RevenueCat homepage</span>
        </a>

        <nav className="-ml-2 max-xl:hidden">
          <ul className="flex items-center">
            {navItems.map((item) => (
                <li key={item} className="group relative">
                  <button
                    className="inline-flex items-center gap-x-1.25 rounded px-3.5 font-object text-sm text-primary transition-colors duration-300 hover:text-secondary-red after:mt-1.25 after:size-0 after:origin-[center_20%] after:border-4 after:border-transparent after:border-t-current after:transition-transform after:duration-300"
                    type="button"
                  >
                    {item}
                  </button>
                </li>
              )
            )}
            {navDirectLinks.map((link) => (
              <li key={link.label} className="group relative">
                <a
                  className="font-object inline-flex items-center gap-x-1 rounded transition-colors duration-300 text-primary hover:text-secondary-red text-sm px-3.5"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-8 max-xl:hidden">
          <a
            className="font-object inline-flex items-center gap-x-1 rounded transition-colors duration-300 text-secondary-blue-1 hover:text-secondary-blue-2 text-sm font-medium tracking-dense"
            href={navAuth.login.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {navAuth.login.label}
          </a>
          <Button href={navAuth.signup.href} size="nav">{navAuth.signup.label}</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="relative -mr-3 size-10 flex-col items-center justify-center gap-1.25 z-50 hidden max-xl:flex"
          type="button"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-0.5 w-6 rounded-full bg-primary transition-transform duration-300 ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 rounded-full bg-primary transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 rounded-full bg-primary transition-transform duration-300 ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`hidden max-xl:block overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[500px]" : "max-h-0"}`}
      >
        <nav className={`container pb-6 pt-2 border-t border-border-light ${bgWhite ? "bg-white" : "bg-gray-50"}`}>
          <ul className="flex flex-col gap-1 mb-6">
            {[...navItems, ...navDirectLinks.map((l) => l.label)].map((item) => (
              <li key={item}>
                <a
                  className="font-object block rounded-lg px-3 py-2.5 text-sm text-primary transition-colors hover:bg-gray-50"
                  href={`https://www.revenuecat.com/${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 px-3">
            <a
              className="font-object text-center text-sm font-medium text-secondary-blue-1 hover:text-secondary-blue-2 transition-colors py-2.5"
              href={navAuth.login.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {navAuth.login.label}
            </a>
            <Button href={navAuth.signup.href} size="nav" className="w-full">{navAuth.signup.label}</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

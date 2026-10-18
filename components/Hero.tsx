"use client";

import { useState } from "react";
import ScrambleText from "./ScrambleText";
import GameOfLife from "./GameOfLife";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const firstPart = "Abinesh";
  const lastPart = ".S";

  return (
    <section id="hero" className="relative bg-transparent flex flex-col overflow-hidden">
      <GameOfLife />
      <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center py-6 md:py-10 pt-32 md:pt-36">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-rule pb-5 gap-4 md:gap-0">
          <span className="flex items-center gap-2 text-sm font-mono text-mist uppercase tracking-widest">
            Open To Work
          </span>
          <span className="text-sm font-mono text-mist uppercase tracking-widest">
            Tamil Nadu, India · {new Date().getFullYear()}
          </span>
        </div>

        <div
          className="group font-display font-semibold leading-none tracking-tighter uppercase select-none pt-8 cursor-default max-w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered((prev) => !prev)}
        >
          {/* The heading holds the full name for search engines and screen readers; the split-text visual below is decorative */}
          <h1 className="sr-only">Abinesh Selvarasu — Senior WordPress Developer &amp; Full Stack Engineer</h1>
          <span aria-hidden="true" className="relative block max-w-full">
            {/* Revealed Text (Center) */}
            <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-10 pointer-events-none">
              <span className="text-xs sm:text-base md:text-2xl lg:text-4xl xl:text-5xl text-accent tracking-[0.15em] md:tracking-widest uppercase font-mono font-bold whitespace-nowrap drop-shadow-md">
                <ScrambleText text="Full Stack Engineer" isHovered={isHovered} speed={0.3} />
              </span>
            </span>

            {/* Top Half */}
            <span
              className="block whitespace-nowrap text-6xl sm:text-7xl md:text-9xl lg:text-[200px] xl:text-[260px] text-ink transition-transform duration-500 ease-out group-hover:-translate-y-3 md:group-hover:-translate-y-6 clip-half-top"
            >
              {firstPart}<span className="text-accent">{lastPart}</span>
            </span>

            {/* Bottom Half */}
            <span
              className="absolute top-0 left-0 whitespace-nowrap text-6xl sm:text-7xl md:text-9xl lg:text-[200px] xl:text-[260px] text-ink transition-transform duration-500 ease-out group-hover:translate-y-3 md:group-hover:translate-y-6 clip-half-bottom"
            >
              {firstPart}<span className="text-accent">{lastPart}</span>
            </span>

          </span>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8 border-t border-rule items-start">
          <div>
            <p className="text-sm font-mono text-mist font-bold uppercase tracking-widest mb-2">Role &amp; Experience</p>
            <p className="text-ink font-semibold text-lg lg:whitespace-nowrap">Senior WordPress Developer &amp; Full Stack Engineer</p>
            <p className="text-mist text-base mt-1 font-mono">3+ Years Experience</p>
          </div>

          <div>
            <p className="text-sm font-mono text-mist font-bold uppercase tracking-widest mb-2">Specialises in</p>
            <p className="text-ink text-opacity-70 text-base leading-relaxed">
              Custom WordPress Architecture, Headless CMS, Core Web Vitals &amp; Performance Engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

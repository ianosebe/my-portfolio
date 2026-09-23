// src/components/Hero.jsx
import { NavLink } from 'react-router-dom';
import { FiArrowRight, FiBriefcase, FiUsers, FiCheckCircle } from 'react-icons/fi';
import heroImg from '../assets/hero1.jfif'; 
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#050505] bg-cover bg-center bg-no-repeat font-sans"
    >
      {/* Dark background base */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Subtle top-center glow to mimic the reference image */}
      <div className="absolute -top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 rounded-full bg-[#d4af37] opacity-[0.03] blur-[100px]" />

      <div className="relative mx-auto min-h-[calc(100vh-8.5rem)] max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl text-center lg:text-left">
            
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              {/* Avatar */}
              <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-[#d4af37] p-0.5">
                <img src={heroImg} alt="Ian Osebe" className="h-full w-full rounded-full object-cover" />
              </div>
              
              {/* Badge */}
              <span className="inline-flex items-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-2 text-xs font-semibold tracking-widest text-[#d4af37]">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                AVAILABLE FOR NEW PROJECTS
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-bold tracking-tight text-white font-serif sm:text-6xl lg:text-[4.5rem] leading-[1.1] lg:leading-[1.1]">
              Building polished <br className="hidden md:block"/>
              digital <span className="text-[#d4af37]">experiences</span> <br className="hidden md:block"/>
              for growth.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl font-light max-w-lg mx-auto lg:mx-0">
              I create modern, accessible web apps backed by React, Tailwind, and clean architecture. My focus is performance, usability, and professional design that earns trust.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
              <NavLink
                to="/projects"
                className="inline-flex items-center justify-center rounded bg-[#d4af37] px-8 py-4 text-sm font-semibold tracking-widest text-black shadow-lg shadow-[#d4af37]/20 transition hover:bg-[#e2c259] uppercase"
              >
                View My Work
                <FiArrowRight className="ml-3 h-5 w-5" />
              </NavLink>

              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center rounded border border-[#d4af37] bg-transparent px-8 py-4 text-sm font-semibold tracking-widest text-[#d4af37] transition hover:bg-[#d4af37]/10 uppercase"
              >
                Let&apos;s Talk
              </NavLink>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37]">Experience</p>
                <p className="mt-2 text-3xl font-serif text-white">5+ years</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37]">Projects delivered</p>
                <p className="mt-2 text-3xl font-serif text-white">50+</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37]">Client satisfaction</p>
                <p className="mt-2 text-3xl font-serif text-white">Trusted</p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl rounded-2xl border border-white/5 bg-white/[0.02] p-8 sm:p-10">
            <FadeIn delay={200}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37]">Featured services</p>
              <h2 className="mt-4 text-3xl font-serif text-white">Digital product design & scalable web apps</h2>
              <p className="mt-4 text-slate-400 leading-7 font-light">
                I partner with startups and small businesses to launch polished digital experiences that perform reliably and feel premium.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
                    <FiBriefcase className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-white tracking-wide">Product-focused development</p>
                    <p className="mt-1 text-sm text-slate-400 font-light leading-relaxed">Clean code, reusable components, and smooth interactions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
                    <FiUsers className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-white tracking-wide">Collaborative process</p>
                    <p className="mt-1 text-sm text-slate-400 font-light leading-relaxed">Transparent communication and fast iteration at every step.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
                    <FiCheckCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-white tracking-wide">High-quality delivery</p>
                    <p className="mt-1 text-sm text-slate-400 font-light leading-relaxed">Performance-driven builds with accessible, responsive design.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs tracking-widest uppercase text-slate-500" style={{ fontSize: "9px" }}>
          Scroll
        </span>
        <div
          className="w-px h-10 relative overflow-hidden"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          <div
            className="absolute top-0 left-0 w-full"
            style={{
              height: "40%",
              backgroundColor: "var(--accent)",
              animation: "scrollDrop 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}

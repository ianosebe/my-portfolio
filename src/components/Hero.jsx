// src/components/Hero.jsx
import heroBg from '../assets/hero1.jfif';
import { NavLink } from 'react-router-dom';
import { FiArrowRight, FiBriefcase, FiUsers, FiCheckCircle } from 'react-icons/fi';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-slate-950 bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-slate-950/80" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/65 via-slate-950/20 to-slate-950/75" />

      <div className="relative mx-auto min-h-[calc(100vh-5.5rem)] max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.8fr] lg:items-center">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-flex rounded-full bg-indigo-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-indigo-300 ring-1 ring-indigo-400/20">
              Software Engineer
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building polished digital experiences for growth-focused brands.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
              I create modern, accessible web apps backed by React, Tailwind, and clean architecture. My focus is performance, usability, and professional design that earns trust.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
              <NavLink
                to="/projects"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
              >
                View My Work
                <FiArrowRight className="ml-3 h-5 w-5" />
              </NavLink>

              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:border-indigo-300 hover:bg-white/15"
              >
                Let&apos;s Talk
              </NavLink>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30">
                <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Experience</p>
                <p className="mt-4 text-3xl font-semibold text-white">5+ years</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30">
                <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Projects delivered</p>
                <p className="mt-4 text-3xl font-semibold text-white">50+</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30">
                <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Client satisfaction</p>
                <p className="mt-4 text-3xl font-semibold text-white">Trusted</p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Featured services</p>
            <h2 className="mt-5 text-3xl font-semibold text-white">Digital product design & scalable web apps</h2>
            <p className="mt-5 text-slate-300 leading-7">
              I partner with startups and small businesses to launch polished digital experiences that perform reliably and feel premium.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-3xl bg-slate-950/70 p-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-white">
                  <FiBriefcase className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-white">Product-focused development</p>
                  <p className="mt-1 text-sm text-slate-400">Clean code, reusable components, and smooth interactions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-3xl bg-slate-950/70 p-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-white">
                  <FiUsers className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-white">Collaborative process</p>
                  <p className="mt-1 text-sm text-slate-400">Transparent communication and fast iteration at every step.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-3xl bg-slate-950/70 p-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-white">
                  <FiCheckCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-white">High-quality delivery</p>
                  <p className="mt-1 text-sm text-slate-400">Performance-driven builds with accessible, responsive design.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

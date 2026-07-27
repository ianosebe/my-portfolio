// src/pages/About.jsx
import aboutImg from '../assets/about.jfif';

export default function About() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-slate-950/90 to-slate-950/70" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-400">
            About
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Crafting thoughtful digital products with a polished front-end experience.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I build modern web applications with strong UX, maintainable code, and performance-first design. My focus is on solutions that look premium, feel smooth, and scale cleanly.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.85fr] items-center">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-white">About my work</h2>
                <p className="text-slate-300 leading-8">
                  I bridge design and engineering to create web products that are both beautiful and reliable. Every project is built with clarity, accessibility, and performance in mind.
                </p>
                <p className="text-slate-300 leading-8">
                  My toolkit includes React, Tailwind CSS, and modern front-end patterns that keep development efficient and maintainable.
                </p>
              </div>

              <div className="space-y-5 rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-indigo-400">Core strengths</p>
                <ul className="space-y-4 text-slate-300">
                  <li className="rounded-2xl bg-slate-900/80 p-4">React & component-driven architecture</li>
                  <li className="rounded-2xl bg-slate-900/80 p-4">Responsive UI with Tailwind CSS</li>
                  <li className="rounded-2xl bg-slate-900/80 p-4">Fast, accessible web experiences</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-center">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Experience</p>
                <p className="mt-4 text-3xl font-semibold text-white">5+ years</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-center">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Projects</p>
                <p className="mt-4 text-3xl font-semibold text-white">50+</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-center">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Clients</p>
                <p className="mt-4 text-3xl font-semibold text-white">Trusted</p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-10">
            <div className="overflow-hidden rounded-[1.75rem] bg-slate-950/80 p-6">
              <img src={aboutImg} alt="Portrait of me" className="h-full w-full rounded-[1.25rem] object-cover" />
            </div>
            <div className="mt-8 space-y-4 text-slate-300">
              <p>
                I enjoy working with founders, teams, and brands who want a polished, modern web presence. I’m especially passionate about clean interfaces, performance, and accessible product experiences.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-center">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Location</p>
                  <p className="mt-2 font-semibold text-white">Nairobi</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-center">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Availability</p>
                  <p className="mt-2 font-semibold text-white">Open for work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

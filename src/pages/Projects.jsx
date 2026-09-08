// src/pages/Projects.jsx
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const allProjects = [
  {
    id: 1,
    title: 'E-Commerce Storefront',
    description: 'A full-stack storefront with product discovery, cart experience, and secure checkout, optimized for conversions and performance.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Stripe', 'MongoDB'],
    github: 'https://github.com/ianosebe/e-commerce-storefront',
    live: '#',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    title: 'Task Management Dashboard',
    description: 'A productivity dashboard with task boards, authentication, and insight-driven workflows for modern teams.',
    tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    github: 'https://github.com/ianosebe/task-management-dashboard',
    live: '#',
    gradient: 'from-emerald-400 to-teal-600',
  },
  {
    id: 3,
    title: 'Weather Forecast Web App',
    description: 'A dynamic weather app with live location detection, hourly reports, and elegant forecast visualizations.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'REST API'],
    github: 'https://github.com/ianosebe/weather-forecast-web-app',
    live: '#',
    gradient: 'from-orange-400 to-pink-500',
  },
  {
    id: 4,
    title: 'AI Image Generator',
    description: 'A clean interface for generating custom images via OpenAI, complete with download support and prompt presets.',
    tech: ['React', 'Express', 'OpenAI API'],
    github: 'https://github.com/ianosebe/ai-image-generator',
    live: '#',
    gradient: 'from-purple-500 to-fuchsia-600',
  },
  {
    id: 5,
    title: 'DriveTrack Pro',
    description: 'A comprehensive driving school management system with student tracking, scheduling, and performance analytics.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/ianosebe/Driving-school-system',
    live: 'https://driving-school-system-gray.vercel.app/',
    gradient: 'from-indigo-500 to-blue-600',
  },
  {
    id: 6,
    title: 'Timberyard Website',
    description: 'A modern, responsive business website for a timberyard with product showcasing and contact information.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    github: '#',
    live: 'https://mily-ian-junior-timberyard-website-phi.vercel.app',
    gradient: 'from-yellow-500 to-orange-600',
  },
  {
    id: 7,
    title: 'Kazi Mashinani Kisii County Government',
    description: 'Platform that provides employment opportunities to people in Kisii to work for the government in different departments like community service.',
    tech: ['HTML', 'JavaScript'],
    github: '#',
    live: 'https://resonant-lebkuchen-243bfa.netlify.app/',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    id: 8,
    title: 'Nyanchwa SDA Church Website',
    description: 'A dynamic and engaging platform for the Nyanchwa SDA Church community, featuring event updates, spiritual resources, and announcements.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ianosebe/Nyanchwa-SDA-Dynamic-Website',
    live: 'https://nyanchwa-sda-dynamic-website.vercel.app/',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 9,
    title: "Victor & Brother's Ltd",
    description: "A modern, responsive business website for Victor & Brother's Ltd.",
    tech: ['React', 'Tailwind CSS', 'Vite'],
    github: '#',
    live: 'https://victor-brothers-ltd.vercel.app/',
    gradient: 'from-slate-600 to-slate-800',
  }
];

export default function Projects() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 via-slate-950/90 to-slate-950/80" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-400">
            Projects
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Projects that combine design, performance, and real-world impact.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            A selection of recent work showcasing interfaces, architecture, and product experiences built for modern web audiences.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {allProjects.map((project) => (
            <article key={project.id} className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-1 shadow-2xl shadow-slate-950/40 transition hover:-translate-y-1 hover:shadow-slate-950/60 font-sans text-black">
              <div className="h-full rounded-[1.75rem] bg-white p-8">
                <div className={`mb-6 flex h-44 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-r ${project.gradient} text-white`}>
                  <span className="text-sm font-semibold uppercase tracking-[0.32em] text-white/90">Project Preview</span>
                </div>

                <h2 className="text-2xl font-semibold tracking-tight text-black transition group-hover:text-indigo-600">
                  {project.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:border-indigo-400 hover:bg-slate-50 hover:text-indigo-600">
                    <FaGithub className="h-4 w-4" /> Code
                  </a>
                  {project.live && project.live !== '#' ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">
                      <FaExternalLinkAlt className="h-4 w-4" /> Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-500 cursor-not-allowed">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

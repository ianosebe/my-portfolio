// src/pages/Projects.jsx
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import FadeIn from '../components/FadeIn';

const allProjects = [
  {
    id: 1,
    title: 'E-Commerce Storefront',
    description: 'A full-stack storefront with product discovery, cart experience, and secure checkout, optimized for conversions and performance.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Stripe', 'MongoDB'],
    github: 'https://github.com/ianosebe/e-commerce-storefront',
    live: '#',
    gradient: 'from-blue-500 to-indigo-600',
    size: 'large',
  },
  {
    id: 2,
    title: 'Task Management Dashboard',
    description: 'A productivity dashboard with task boards, authentication, and insight-driven workflows for modern teams.',
    tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    github: 'https://github.com/ianosebe/task-management-dashboard',
    live: '#',
    gradient: 'from-emerald-400 to-teal-600',
    size: 'small',
  },
  {
    id: 3,
    title: 'Weather Forecast Web App',
    description: 'A dynamic weather app with live location detection, hourly reports, and elegant forecast visualizations.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'REST API'],
    github: 'https://github.com/ianosebe/weather-forecast-web-app',
    live: '#',
    gradient: 'from-orange-400 to-pink-500',
    size: 'small',
  },
  {
    id: 4,
    title: 'AI Image Generator',
    description: 'A clean interface for generating custom images via OpenAI, complete with download support and prompt presets.',
    tech: ['React', 'Express', 'OpenAI API'],
    github: 'https://github.com/ianosebe/ai-image-generator',
    live: '#',
    gradient: 'from-purple-500 to-fuchsia-600',
    size: 'large',
  },
  {
    id: 5,
    title: 'DriveTrack Pro',
    description: 'A comprehensive driving school management system with student tracking, scheduling, and performance analytics.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/ianosebe/Driving-school-system',
    live: 'https://driving-school-system-gray.vercel.app/',
    gradient: 'from-indigo-500 to-blue-600',
    size: 'large',
  },
  {
    id: 6,
    title: 'Timberyard Website',
    description: 'A modern, responsive business website for a timberyard with product showcasing and contact information.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    github: '#',
    live: 'https://mily-ian-junior-timberyard-website-phi.vercel.app',
    gradient: 'from-yellow-500 to-orange-600',
    size: 'small',
  },
  {
    id: 7,
    title: 'Kazi Mashinani Kisii County',
    description: 'Platform that provides employment opportunities to people in Kisii to work for the government in different departments like community service.',
    tech: ['HTML', 'JavaScript'],
    github: '#',
    live: 'https://resonant-lebkuchen-243bfa.netlify.app/',
    gradient: 'from-green-500 to-emerald-600',
    size: 'small',
  },
  {
    id: 8,
    title: 'Nyanchwa SDA Church Website',
    description: 'A dynamic and engaging platform for the Nyanchwa SDA Church community, featuring event updates, spiritual resources, and announcements.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ianosebe/Nyanchwa-SDA-Dynamic-Website',
    live: 'https://nyanchwa-sda-dynamic-website.vercel.app/',
    gradient: 'from-blue-500 to-cyan-600',
    size: 'large',
  },
  {
    id: 9,
    title: "Victor & Brother's Ltd",
    description: "A modern, responsive business website for Victor & Brother's Ltd.",
    tech: ['React', 'Tailwind CSS', 'Vite'],
    github: '#',
    live: 'https://victor-brothers-ltd.vercel.app/',
    gradient: 'from-slate-600 to-slate-800',
    size: 'large',
  }
];

export default function Projects() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-[var(--background)] min-h-screen pt-40" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-3">
            <FadeIn>
              <span
                className="font-mono text-xs tracking-widest uppercase inline-flex items-center gap-2"
                style={{ color: "var(--accent)" }}
              >
                <span style={{ fontSize: "6px" }}>◆</span> 04 / Work
              </span>
            </FadeIn>
          </div>
          <div className="lg:col-span-5">
            <FadeIn delay={100}>
              <h2 className="font-display text-5xl lg:text-6xl leading-tight text-white">
                Selected
                <br />
                <em className="italic">projects.</em>
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <FadeIn delay={150}>
              <p className="text-sm" style={{ color: "var(--muted-foreground)", lineHeight: "1.8" }}>
                A curated selection of recent client work and self-initiated projects across branding, product, and engineering.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 mt-16">
          {allProjects.map((project, i) => (
            <div
              key={project.id}
              className={`${project.size === "large" ? "lg:col-span-7" : "lg:col-span-5"} overflow-hidden rounded-md`}
              style={{
                opacity: 1,
                transition: "opacity 0.3s ease",
              }}
            >
              <FadeIn delay={i * 80}>
                <ProjectCard project={project} />
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden group h-[400px] lg:h-[500px]"
      style={{
        backgroundColor: "var(--secondary)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} w-full h-full opacity-80`}
        style={{
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          filter: hovered ? "brightness(0.5)" : "brightness(0.9)",
        }}
      />

      {/* ambient pattern layer to make gradients more interesting */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />

      {/* always-visible gradient + label */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)",
        }}
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between pointer-events-none z-10">
        <div>
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            {project.tech.slice(0, 3).join(' · ')}
          </p>
          <h3 className="font-display text-3xl lg:text-4xl text-white">
            {project.title}
          </h3>
        </div>
      </div>

      {/* hover CTA / Links */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          backgroundColor: "rgba(10,10,10,0.6)",
          backdropFilter: "blur(4px)",
        }}
      >
        <p className="text-slate-300 text-center max-w-sm px-6 font-light leading-relaxed transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
          {project.description}
        </p>

        <div className="flex gap-4 mt-4 transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase px-6 py-3 flex items-center gap-2 transition hover:bg-white/10"
            style={{
              border: "1px solid var(--border)",
              color: "white",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            <FaGithub size={14} /> Code
          </a>
          
          {project.live && project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest uppercase px-6 py-3 flex items-center gap-2 transition"
              style={{
                border: "1px solid var(--accent)",
                color: "var(--accent-foreground)",
                backgroundColor: "var(--accent)",
              }}
            >
              <FaExternalLinkAlt size={12} /> Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

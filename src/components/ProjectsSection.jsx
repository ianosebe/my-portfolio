import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectSection() {
  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Storefront',
      description:
        'A full-stack store with product discovery, cart flow, and checkout that feels premium on every screen.',
      tech: ['React', 'Tailwind CSS', 'Node.js', 'Stripe'],
      github: 'https://github.com/ianosebe/e-commerce-storefront',
      live: 'https://e-commerce-storefront.vercel.app',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description:
        'A polished productivity workspace with task boards, authentication, and data-driven performance metrics.',
      tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      github: 'https://github.com/ianosebe/task-management-dashboard',
      live: 'https://task-management-dashboard.vercel.app',
      gradient: 'from-emerald-400 to-teal-600',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 via-slate-950/90 to-slate-950/70" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-400">
              Featured Projects
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Launch-ready web experiences with polished UI and performance.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              A quick look at some recent builds that combine strong UI, clean architecture, and real-world value.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-6 py-3 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-500/20"
          >
            View all projects
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/85 p-1 shadow-2xl shadow-slate-950/40 transition hover:-translate-y-1 hover:shadow-slate-950/60"
            >
              <div className="h-full rounded-[1.75rem] bg-slate-950 p-8">
                <div className={`mb-6 h-52 overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} text-white`}>
                  <div className="flex h-full flex-col items-start justify-end p-6">
                    <span className="rounded-full bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur-sm">
                      Featured Build
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white transition group-hover:text-indigo-300">
                  {project.title}
                </h3>
                <p className="mt-4 text-slate-300 leading-7">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-indigo-400 hover:bg-slate-800 hover:text-white"
                  >
                    <FaGithub className="h-4 w-4" /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                  >
                    <FaExternalLinkAlt className="h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

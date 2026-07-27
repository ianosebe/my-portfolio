// src/components/SkillsSection.jsx
import { Link } from 'react-router-dom';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si';

export default function SkillsSection() {
  const topSkills = [
    { name: 'React', icon: FaReact, color: 'text-sky-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
    { name: 'Vite', icon: SiVite, color: 'text-violet-400' },
    { name: 'API Design', icon: FaDatabase, color: 'text-emerald-400' },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-slate-950/90 to-slate-950/70" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-400">
            Skills
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Technologies I use to build modern web experiences.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            A strong stack helps me deliver fast, reliable, and maintainable web applications.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-7 text-center shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-indigo-400/30">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-950/90 text-4xl shadow-inner shadow-slate-950/20">
                  <Icon className={`${skill.color}`} />
                </div>
                <p className="mt-6 text-base font-semibold text-white">{skill.name}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/skills"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
          >
            View All Skills
          </Link>
        </div>
      </div>
    </section>
  );
}

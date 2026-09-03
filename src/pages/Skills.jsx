// src/pages/Skills.jsx
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaFigma,
  FaRocket // Updated to use FaRocket
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiTypescript, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiVite, 
  SiDocker, 
  SiWebpack 
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: FaReact, color: 'text-sky-500' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
      { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
      { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
      { name: 'Express', icon: SiExpress, color: 'text-slate-500' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-500' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
      { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
      { name: 'Webpack', icon: SiWebpack, color: 'text-purple-500' },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
      { name: 'GitHub', icon: FaGithub, color: 'text-slate-900' },
      { name: 'Figma', icon: FaFigma, color: 'text-rose-500' },
      { name: 'Vite', icon: SiVite, color: 'text-violet-400' },
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-slate-950/90 to-slate-950/70" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-400">
            Skills
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Technical skills that power fast, scalable web experiences.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            A curated selection of tools, languages, and frameworks I rely on to build polished applications.
          </p>
        </div>

        <div className="grid gap-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl font-sans text-black">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-black">{category.title}</h2>
                  <p className="mt-3 max-w-2xl text-slate-600">
                    {category.title === 'Frontend Development' && 'Modern UI development with component-driven architecture and responsive styling.'}
                    {category.title === 'Backend & Databases' && 'Server-side and database technologies for reliable and scalable applications.'}
                    {category.title === 'Tools & Workflow' && 'Developer tooling and collaboration workflows that keep projects moving smoothly.'}
                  </p>
                </div>
                <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
                  {category.skills.length} items
                </span>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="group rounded-[1.75rem] border border-black/10 bg-slate-50 p-6 text-center transition hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-slate-100 text-black">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-4xl shadow-inner shadow-slate-950/20">
                        <Icon className={`${skill.color}`} />
                      </div>
                      <p className="mt-5 text-base font-semibold text-black">{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
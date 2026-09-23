// src/pages/Skills.jsx
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaFigma 
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
import FadeIn from '../components/FadeIn';

const SKILLS_MARQUEE = [
  "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB",
  "PostgreSQL", "Docker", "Figma", "Vite", "Git", "GitHub"
];

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'JavaScript', icon: FaJs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Docker', icon: SiDocker },
      { name: 'Webpack', icon: SiWebpack },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Figma', icon: FaFigma },
      { name: 'Vite', icon: SiVite },
    ],
  },
];

export default function Skills() {
  return (
    <section className="bg-[var(--background)] min-h-screen pt-40 pb-24" style={{ borderTop: "1px solid var(--border)" }}>
      {/* ─── MARQUEE ─── */}
      <div
        className="overflow-hidden py-5 border-y mb-20"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--secondary)" }}
      >
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {[...SKILLS_MARQUEE, ...SKILLS_MARQUEE, ...SKILLS_MARQUEE].map((skill, i) => (
            <span
              key={i}
              className="font-mono text-xs tracking-widest uppercase flex-shrink-0 flex items-center gap-3"
              style={{ color: "var(--muted-foreground)" }}
            >
              <span style={{ color: "var(--accent)", fontSize: "6px" }}>◆</span>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-3">
            <FadeIn>
              <span
                className="font-mono text-xs tracking-widest uppercase inline-flex items-center gap-2"
                style={{ color: "var(--accent)" }}
              >
                <span style={{ fontSize: "6px" }}>◆</span> 02 / Skills
              </span>
            </FadeIn>
          </div>
          <div className="lg:col-span-7">
            <FadeIn delay={100}>
              <h2 className="font-display text-5xl lg:text-6xl leading-tight text-white">
                Technical <em className="italic">arsenal.</em>
              </h2>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="mt-4 text-sm" style={{ color: "var(--muted-foreground)", lineHeight: "1.8" }}>
                A curated selection of tools, languages, and frameworks I rely on to build polished applications.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid gap-12">
          {skillCategories.map((category, idx) => (
            <div key={category.title}>
              <FadeIn delay={idx * 100}>
                <div className="flex items-end justify-between mb-6 pb-2" style={{ borderBottom: "1px solid var(--border)" }}>
                  <h3 className="font-display text-2xl lg:text-3xl text-white">
                    {category.title}
                  </h3>
                  <span className="font-mono text-xs tracking-widest uppercase text-[var(--accent)]">
                    {category.skills.length} Items
                  </span>
                </div>
              </FadeIn>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <FadeIn key={skill.name} delay={(idx * 100) + (i * 50)}>
                      <div 
                        className="group flex items-center gap-5 p-5 transition-all duration-300"
                        style={{ 
                          backgroundColor: "var(--secondary)", 
                          border: "1px solid var(--border)",
                        }}
                      >
                        <div 
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm transition-colors duration-300"
                          style={{
                            backgroundColor: "var(--background)",
                            border: "1px solid var(--border)",
                            color: "var(--accent)",
                          }}
                        >
                          <Icon className="text-xl" />
                        </div>
                        <p className="font-mono text-xs tracking-wider uppercase text-white">
                          {skill.name}
                        </p>
                      </div>
                    </FadeIn>
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
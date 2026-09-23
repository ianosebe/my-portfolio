import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import FadeIn from '../components/FadeIn';

export default function Certificates() {
  const certificates = [
    {
      id: "01",
      title: 'Meta Front-End Developer Professional',
      issuer: 'Coursera',
      date: 'December 2023',
      description: 'An in-depth program covering React, advanced UI/UX, version control, and responsive design principles.',
      link: '#',
    },
    {
      id: "02",
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'August 2023',
      description: 'Mastery of JavaScript fundamentals, object-oriented programming, and complex algorithm scripting.',
      link: '#',
    },
    {
      id: "03",
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'May 2023',
      description: 'Foundational understanding of AWS Cloud concepts, security, architecture, and core services.',
      link: '#',
    },
    {
      id: "04",
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'January 2023',
      description: 'Comprehensive training in modern HTML5, CSS3, CSS Grid, Flexbox, and mobile-first design.',
      link: '#',
    },
    {
      id: "05",
      title: 'AWS Billing and Cost Management',
      issuer: 'Simplilearn / AWS',
      date: 'August 2026',
      description: 'Comprehensive understanding of AWS billing, cost management tools, and strategies for optimizing cloud expenses.',
      link: '#',
    },
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-[var(--background)] min-h-screen pt-40 pb-32" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-3">
            <FadeIn>
              <span
                className="font-mono text-xs tracking-widest uppercase inline-flex items-center gap-2"
                style={{ color: "var(--accent)" }}
              >
                <span style={{ fontSize: "6px" }}>◆</span> 03 / Credentials
              </span>
            </FadeIn>
          </div>
          <div className="lg:col-span-7">
            <FadeIn delay={100}>
              <h2 className="font-display text-5xl lg:text-6xl leading-tight text-white">
                Verified <em className="italic">growth.</em>
              </h2>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="mt-4 text-sm" style={{ color: "var(--muted-foreground)", lineHeight: "1.8" }}>
                These certifications reflect the continuous learning and skills I apply to every product and project I build.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {certificates.map((cert, i) => (
            <FadeIn key={cert.id} delay={i * 80}>
              <div
                className="group p-8 lg:p-10 cursor-default transition-all duration-400 h-full flex flex-col justify-between"
                style={{ backgroundColor: "var(--background)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--secondary)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--background)")}
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <span
                      className="text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 inline-block"
                      style={{ color: "var(--accent)", lineHeight: 1 }}
                    >
                      <FaAward />
                    </span>
                    <span className="font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
                      {cert.id}
                    </span>
                  </div>
                  <h3
                    className="font-display text-3xl lg:text-4xl mb-4 transition-colors duration-300 text-white"
                  >
                    {cert.title}
                  </h3>
                  <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
                    {cert.issuer}
                  </p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--secondary-foreground)", lineHeight: "1.8" }}>
                    {cert.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-8 border-t border-white/5 pt-6">
                  <span className="font-mono text-xs tracking-wide text-slate-500">
                    {cert.date}
                  </span>
                  {cert.link !== '#' && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors"
                      style={{ color: "var(--accent)" }}
                    >
                      View <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

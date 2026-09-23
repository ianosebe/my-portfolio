// src/pages/About.jsx
import aboutImg from '../assets/about.jfif';
import FadeIn from '../components/FadeIn';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-[var(--background)] min-h-screen pt-40 pb-32" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <FadeIn>
                <span
                  className="font-mono text-xs tracking-widest uppercase inline-flex items-center gap-2"
                  style={{ color: "var(--accent)" }}
                >
                  <span style={{ fontSize: "6px" }}>◆</span> 01 / About
                </span>
              </FadeIn>
            </div>
          </div>

          <div className="lg:col-span-5">
            <FadeIn delay={100}>
              <h2 className="font-display text-5xl lg:text-6xl leading-tight mb-8 text-white">
                Crafting <br />thoughtful<br />digital <em className="italic">products.</em>
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--secondary-foreground)", lineHeight: "1.8" }}>
                I build modern web applications with strong UX, maintainable code, and performance-first design. My focus is on solutions that look premium, feel smooth, and scale cleanly.
              </p>
              <p className="text-base leading-relaxed mb-10" style={{ color: "var(--secondary-foreground)", lineHeight: "1.8" }}>
                I bridge design and engineering to create web products that are both beautiful and reliable. Every project is built with clarity, accessibility, and performance in mind using React, Tailwind CSS, and modern front-end patterns.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { label: "Location", value: "Nairobi, KE" },
                  { label: "Experience", value: "5+ Years" },
                  { label: "Focus", value: "Frontend & UI" },
                  { label: "Status", value: "Available" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="px-4 py-3"
                    style={{
                      backgroundColor: "var(--secondary)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: "var(--muted-foreground)" }}>
                      {item.label}
                    </p>
                    <p className="font-semibold text-sm text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-4">
            <FadeIn delay={150}>
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "3/4", backgroundColor: "var(--secondary)" }}
              >
                <img
                  src={aboutImg}
                  alt="Portrait of me"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{ objectPosition: "center top" }}
                />
                {/* gold frame accent */}
                <div
                  className="absolute top-4 right-4 w-16 h-16 pointer-events-none"
                  style={{
                    borderTop: "2px solid var(--accent)",
                    borderRight: "2px solid var(--accent)",
                    opacity: 0.6,
                  }}
                />
                <div
                  className="absolute bottom-4 left-4 w-16 h-16 pointer-events-none"
                  style={{
                    borderBottom: "2px solid var(--accent)",
                    borderLeft: "2px solid var(--accent)",
                    opacity: 0.6,
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-5"
                  style={{ background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 100%)" }}
                >
                  <p className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--muted-foreground)" }}>
                    Software Engineer · 2025
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

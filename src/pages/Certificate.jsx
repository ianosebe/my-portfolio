import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Coursera',
      date: 'December 2023',
      description:
        'An in-depth program covering React, advanced UI/UX, version control, and responsive design principles.',
      link: '#',
      color: 'text-sky-400',
      iconBg: 'bg-sky-500/10',
    },
    {
      id: 2,
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'August 2023',
      description:
        'Mastery of JavaScript fundamentals, object-oriented programming, and complex algorithm scripting.',
      link: '#',
      color: 'text-yellow-400',
      iconBg: 'bg-yellow-500/10',
    },
    {
      id: 3,
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'May 2023',
      description:
        'Foundational understanding of AWS Cloud concepts, security, architecture, and core services.',
      link: '#',
      color: 'text-orange-400',
      iconBg: 'bg-orange-500/10',
    },
    {
      id: 4,
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'January 2023',
      description:
        'Comprehensive training in modern HTML5, CSS3, CSS Grid, Flexbox, and mobile-first design.',
      link: '#',
      color: 'text-indigo-400',
      iconBg: 'bg-indigo-500/10',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-slate-950/90 to-slate-950/70" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-400">
            Certificates
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Verified credentials and professional growth.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            These certifications reflect the skills I apply to every product and project I build.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {certificates.map((cert) => (
            <article
              key={cert.id}
              className="group rounded-[2rem] border border-white/10 bg-slate-900/85 p-8 shadow-2xl shadow-slate-950/40 transition hover:-translate-y-1 hover:border-indigo-400/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-3xl ${cert.iconBg}`}>
                  <FaAward className={`text-3xl ${cert.color}`} />
                </div>
                <span className="rounded-full border border-slate-800 bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-400">
                  {cert.date}
                </span>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-2xl font-semibold text-white transition group-hover:text-indigo-300">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-indigo-300">Issued by: {cert.issuer}</p>
                <p className="text-slate-300 leading-relaxed">{cert.description}</p>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                View Credential <FaExternalLinkAlt className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

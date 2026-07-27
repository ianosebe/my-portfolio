// src/components/TopBar.jsx
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function TopBar() {
  const socials = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/ianosebe' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/IanLevis4' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/IanNyangau' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:ianosebe8@gmail.com' },
  ];

  return (
    <div className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md text-slate-100 shadow-sm shadow-slate-900/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="hidden md:block">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Ian Nyang'au
          </p>
          <p className="mt-1 text-sm font-medium text-slate-200">
            Let’s build something great together.
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center gap-4 sm:justify-end">
          <span className="text-sm font-medium text-slate-400 hidden sm:inline">
            Connect with me
          </span>

          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-slate-800 hover:text-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  aria-label={social.name}
                >
                  <Icon size={18} strokeWidth={2.2} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


// src/components/Navbar.jsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'SKILLS', path: '/skills' },
  { name: 'CERTIFICATES', path: '/certificates' },
  { name: 'PROJECTS', path: '/projects' },
  { name: 'CONTACT', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const linkClass = ({ isActive }) =>
    `text-sm tracking-wider font-semibold transition duration-200 ${
      isActive
        ? 'text-white'
        : 'text-slate-400 hover:text-white'
    }`;

  return (
    <nav className="sticky top-0 z-40 w-full bg-[#050505]/95 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-6 sm:px-6">
        <div className="hidden lg:flex items-center gap-10">
          {navItems.slice(0, 5).map((item) => (
            <NavLink key={item.name} to={item.path} className={linkClass}>
              {item.name}
            </NavLink>
          ))}
          <NavLink to="/contact" className={linkClass}>
            CONTACT
          </NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <NavLink
            to="/contact"
            className="rounded border border-[#d4af37] bg-transparent px-6 py-2 text-sm font-semibold tracking-widest text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black uppercase"
          >
            Hire Me
          </NavLink>
        </div>

        <button
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-white/10 bg-transparent text-white transition hover:border-[#d4af37] hover:text-[#d4af37] focus:outline-none lg:hidden"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden border-t border-white/5 bg-[#050505] transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-2 px-5 py-5">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded px-4 py-3 text-sm tracking-wider font-semibold transition ${
                  isActive
                    ? 'bg-white/5 text-white'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="mt-4">
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block rounded border border-[#d4af37] px-4 py-3 text-center text-sm font-semibold tracking-widest text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black uppercase"
            >
              Hire Me
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

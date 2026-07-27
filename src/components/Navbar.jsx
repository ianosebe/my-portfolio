// src/components/Navbar.jsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition duration-200 ${
      isActive
        ? 'text-indigo-300'
        : 'text-slate-400 hover:text-slate-100'
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <NavLink to="/" className="flex items-center gap-3 text-lg font-bold tracking-tight text-slate-100">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/30">
            IN
          </span>
          <span className="hidden sm:inline">My Portfolio</span>
        </NavLink>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.slice(0, 5).map((item) => (
            <NavLink key={item.name} to={item.path} className={linkClass}>
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <NavLink
            to="/contact"
            className="rounded-full border border-slate-800 bg-slate-900/90 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
          >
            Contact
          </NavLink>
        </div>

        <button
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 transition hover:border-indigo-500 hover:text-white focus:outline-none lg:hidden"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden border-t border-slate-800 bg-slate-950 transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-3 px-5 py-5">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-2xl px-4 py-3 text-base font-medium transition ${
                  isActive
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-100 hover:bg-slate-900/80'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="mt-2">
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block rounded-2xl bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

// src/components/ContactsSection.jsx
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-slate-950/90 to-slate-950/70" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-400">
              Let’s connect
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Ready to move your next digital project forward?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I help companies launch polished web applications with strong UX, fast performance, and scalable code. Reach out if you want a modern website, product MVP, or a trusted development partner.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500"
              >
                Start a project
              </Link>
              <a
                href="mailto:ianosebe8@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-indigo-300 hover:bg-white/10"
              >
                <FaEnvelope className="mr-2 h-4 w-4" />
                Email me
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl font-sans text-black">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Contact details</p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4 rounded-3xl bg-slate-100 p-5">
                <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">Email</p>
                  <p className="mt-1 text-slate-600">ianosebe8@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-3xl bg-slate-100 p-5">
                <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white">
                  <FaPhoneAlt className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">Phone</p>
                  <p className="mt-1 text-slate-600">+254 716 334 678</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-3xl bg-slate-100 p-5">
                <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white">
                  <FaMapMarkerAlt className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">Location</p>
                  <p className="mt-1 text-slate-600">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

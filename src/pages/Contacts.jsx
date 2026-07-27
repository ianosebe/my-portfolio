// src/pages/Contacts.jsx
import { BsWhatsapp } from 'react-icons/bs';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

export default function Contacts() {
  const contactInfo = {
    email: 'ianosebe8@gmail.com',
    location: 'Nairobi, Kenya',
    phone: '+254 716 334 678',
    github: 'https://github.com/ianosebe',
    linkedin: 'https://linkedin.com/in/IanNyangau',
    whatsapp: 'https://wa.me/254716334678',
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-slate-950/90 to-slate-950/70" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-400">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something great together.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you have a project, a partnership, or a new idea, I&apos;m always open to a conversation. Reach out and let&apos;s create a professional web experience that delivers.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.8fr] items-center">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact details</p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4 rounded-3xl bg-slate-950/80 p-5">
                <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="mt-1 block text-slate-400 transition hover:text-white">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-3xl bg-slate-950/80 p-5">
                <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white">
                  <FaPhoneAlt className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Phone</p>
                  <a href={`tel:${contactInfo.phone}`} className="mt-1 block text-slate-400 transition hover:text-white">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-3xl bg-slate-950/80 p-5">
                <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white">
                  <FaMapMarkerAlt className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Location</p>
                  <p className="mt-1 text-slate-400">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.32em] text-indigo-400">Reach me on</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-indigo-300 hover:text-white">
                  <FaGithub className="h-4 w-4" /> GitHub
                </a>
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-indigo-300 hover:text-white">
                  <FaLinkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-indigo-300 hover:text-white">
                  <BsWhatsapp className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Message me</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Drop a quick brief</h2>
            <p className="mt-4 text-slate-400">Send the details of your project and I&apos;ll get back to you fast with the next steps.</p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-300">Name</span>
                  <input type="text" placeholder="John Doe" className="w-full rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-300">Email</span>
                  <input type="email" placeholder="john@example.com" className="w-full rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-300">Subject</span>
                <input type="text" placeholder="Project brief" className="w-full rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-300">Message</span>
                <textarea rows="5" placeholder="Tell me about your project..." className="w-full rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
              </label>

              <button type="submit" className="w-full rounded-full bg-indigo-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-indigo-500">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import aboutImg from '../assets/about.jfif';

export default function About() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-slate-950/90 to-slate-950/70" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="space-y-8 text-center lg:text-left">
            <span className="inline-flex rounded-full bg-indigo-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-indigo-300 ring-1 ring-indigo-500/20">
              About Me
            </span>
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Crafting premium digital experiences with clarity and scale.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                I build web applications that look polished, perform reliably, and help brands connect with users through thoughtful interaction design.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/75 p-6 shadow-xl shadow-slate-950/30">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Years of experience</p>
                <p className="mt-4 text-3xl font-semibold text-white">5+</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/75 p-6 shadow-xl shadow-slate-950/30">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Projects launched</p>
                <p className="mt-4 text-3xl font-semibold text-white">50+</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-8">
            <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-br from-indigo-500/20 via-transparent to-transparent" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-6">
              <img src={aboutImg} alt="About section visual" className="h-72 w-full rounded-[1.5rem] object-cover shadow-2xl shadow-slate-950/40" />
              <div className="mt-8 space-y-4 text-slate-300">
                <p>
                  I started with simple HTML and CSS experiments and grew into building modern React applications with Tailwind, TypeScript, and expressive interfaces.
                </p>
                <p>
                  My goal is to create digital products that feel polished, work reliably, and make it easy for users to complete their tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

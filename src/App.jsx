import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VibeaAI from './components/VibeaAI';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      {/* Work highlight placeholder section to anchor nav - can be enhanced later */}
      <section id="work" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected work</h2>
          <p className="mt-3 text-white/70">A curated mix of interactive websites and product experiences delivered for forward-thinking teams.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-4">
              <div className="aspect-[4/3] w-full rounded-xl bg-[radial-gradient(300px_200px_at_20%_0%,rgba(99,102,241,0.2),transparent_60%)]" />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="font-medium">Project {i}</div>
                  <div className="text-sm text-white/60">Interactive website</div>
                </div>
                <div className="text-xs rounded-full border border-white/10 px-2 py-0.5 text-white/60">Case study</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <VibeaAI />

      {/* Process Section */}
      <section id="process" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Our process — engineered for momentum</h2>
          <p className="mt-4 text-white/80">Clear milestones, tight feedback cycles, and frequent deliveries keep projects moving without surprises.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: '01 — Discover', d: 'We align on goals, users, and constraints. Then we map the fastest path to value.' },
            { t: '02 — Design & Animate', d: 'We translate requirements into motion-rich interfaces that elevate your brand.' },
            { t: '03 — Build & Ship', d: 'We engineer with performance and accessibility in mind and ship to production.' },
          ].map((s) => (
            <div key={s.t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/60">{s.t}</div>
              <div className="mt-2 font-medium">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

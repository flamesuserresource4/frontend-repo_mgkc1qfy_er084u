import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-50%,rgba(124,58,237,0.35),transparent_60%)]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-28">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-wide">
            <Sparkles size={14} className="text-fuchsia-300" /> Premium Web Studio
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            We craft high‑velocity, future‑ready web experiences.
          </h1>
          <p className="mt-5 text-white/80 text-lg">
            SiteSmith Studio blends strategy, design, and engineering to ship products that feel fast, polished, and unmistakably premium.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition-colors">
              <Rocket size={18} /> Start a project
            </a>
            <a href="#vibea" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 text-white px-5 py-3 font-medium hover:bg-white/10 transition-colors">
              Explore Vibea AI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

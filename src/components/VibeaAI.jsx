import { motion } from 'framer-motion';
import { Wand2, Cpu, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'Text → Prototype',
    desc: 'Describe your idea in natural language and watch it become an interactive, on-brand prototype in seconds.',
  },
  {
    icon: Cpu,
    title: 'Design Intelligence',
    desc: 'Learns your visual system: spacing, components, tone, and applies it consistently across screens.',
  },
  {
    icon: Zap,
    title: 'Instant Iterations',
    desc: 'Ask for changes conversationally. Vibea regenerates layouts, copy, and flows without breaking structure.',
  },
  {
    icon: Shield,
    title: 'Enterprise Ready',
    desc: 'Version history, exports, and guardrails so teams can ship confidently and securely.',
  },
];

export default function VibeaAI() {
  return (
    <section id="vibea" className="relative bg-gradient-to-b from-black to-[#05050a] text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Vibea AI — Your text to prototype engine</h2>
          <p className="mt-4 text-white/80 text-lg">
            Turn raw ideas into polished product screens. From brand-new concepts to production-ready flows, Vibea AI accelerates the path from thought to thing.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(400px_200px_at_20%_-20%,rgba(168,85,247,0.15),transparent)]" />
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/30 to-cyan-400/30 p-2 border border-white/10">
                  <Icon className="text-white" size={20} />
                </div>
                <h3 className="font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">Live prompt</span>
              <span className="text-xs rounded-full border border-white/20 px-2 py-0.5 text-white/70">Preview</span>
            </div>
            <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-4">
              <PromptDemo />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">Generated UI</span>
              <span className="text-xs rounded-full border border-white/20 px-2 py-0.5 text-white/70">Concept</span>
            </div>
            <div className="mt-4 grid grid-cols-6 gap-3">
              <div className="col-span-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="h-4 w-32 rounded bg-white/20" />
                <div className="mt-3 h-8 w-full rounded bg-white/10" />
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="h-20 rounded bg-white/10" />
                  <div className="h-20 rounded bg-white/10" />
                  <div className="h-20 rounded bg-white/10" />
                </div>
              </div>
              <div className="col-span-2 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="space-y-2">
                  <div className="h-3 w-20 rounded bg-white/20" />
                  <div className="h-3 w-28 rounded bg-white/10" />
                  <div className="h-3 w-24 rounded bg-white/10" />
                  <div className="h-3 w-28 rounded bg-white/10" />
                </div>
                <div className="mt-4 h-24 rounded bg-white/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PromptDemo() {
  const lines = [
    'Design a sleek pricing section',
    '• Three plans with gradient accents',
    '• Annual toggle and featured plan',
    '• CTA buttons and subtle shadows',
  ];

  return (
    <div className="font-mono text-sm leading-relaxed text-white/90">
      {lines.map((l, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="flex items-start gap-2"
        >
          <span className="text-fuchsia-300">›</span>
          <span>{l}</span>
        </motion.div>
      ))}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="mt-3 h-px bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        Generating prototype…
      </motion.div>
    </div>
  );
}

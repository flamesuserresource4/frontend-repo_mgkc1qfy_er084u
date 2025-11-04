import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { href: '#work', label: 'Work' },
    { href: '#vibea', label: 'Vibea AI' },
    { href: '#process', label: 'Process' },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/30 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400"></div>
            <span className="font-semibold tracking-tight text-white">SiteSmith Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {items.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white transition-colors">{item.label}</a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition-colors">Start a project</a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-3">
            {items.map((item) => (
              <a key={item.href} href={item.href} className="block text-white/90" onClick={() => setOpen(false)}>{item.label}</a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 font-medium">Start a project</a>
          </div>
        </div>
      )}
    </header>
  );
}

import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400"></div>
              <span className="font-semibold tracking-tight">SiteSmith Studio</span>
            </div>
            <p className="mt-3 text-white/70 max-w-sm">
              A boutique webdev studio building premium, animated, high‑performance web products.
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col items-start md:items-end gap-4">
            <div className="text-white/70">Let’s build something exceptional.</div>
            <a href="mailto:hello@sitesmith.studio" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2 font-medium hover:bg-white/90 transition-colors">
              <Mail size={18} /> hello@sitesmith.studio
            </a>
            <div className="flex items-center gap-4 text-white/70">
              <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} SiteSmith Studio. All rights reserved.</div>
      </div>
    </footer>
  );
}

'use client';

import { Share2, Mail, Heart, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-background to-accent/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg" />
                <div className="absolute inset-1 bg-white dark:bg-slate-900 rounded-md flex items-center justify-center text-xs font-bold text-primary">
                  M
                </div>
              </div>
              <span className="font-bold text-lg text-foreground">Manufaktur</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Solusi manufaktur terdepan untuk transformasi digital industri Anda.
            </p>
            <div className="pt-4 flex gap-3">
              {[Share2, Mail, Heart, MessageCircle].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 border border-border hover:bg-primary/10 hover:border-primary/50 flex items-center justify-center text-foreground hover:text-primary transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Layanan</h4>
            <ul className="space-y-2">
              {['Otomasi Industri', 'Analitik Data', 'Keamanan Proses', 'Teknologi AI'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Perusahaan</h4>
            <ul className="space-y-2">
              {['Tentang Kami', 'Blog', 'Karir', 'Hubungi Kami'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2">
              {['Kebijakan Privasi', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} PT Manufaktur Indonesia. Semua hak dilindungi.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 opacity-0 hover:opacity-100 focus:opacity-100"
        aria-label="Scroll to top"
        style={{
          opacity: typeof window !== 'undefined' && window.scrollY > 300 ? 1 : 0,
          pointerEvents: typeof window !== 'undefined' && window.scrollY > 300 ? 'auto' : 'none',
        }}
      >
        ↑
      </button>
    </footer>
  );
}

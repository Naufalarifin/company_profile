'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Tentang', href: '#about' },
    { label: 'Divisi', href: '#divisions' },
    { label: 'Berita', href: '#news' },
    { label: 'Karir', href: '#careers' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-primary">PT Manufaktur</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex gap-4">
            <button className="px-6 py-2 bg-primary text-white rounded text-sm font-medium hover:bg-green-700 transition-colors">
              Hubungi Kami
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-foreground text-sm font-medium hover:bg-secondary rounded transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="mx-4 px-4 py-2 bg-primary text-white rounded text-sm font-medium hover:bg-green-700 transition-colors">
                Hubungi Kami
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

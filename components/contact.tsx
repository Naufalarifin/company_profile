'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@manufaktur.id',
      href: 'mailto:info@manufaktur.id',
    },
    {
      icon: Phone,
      title: 'Telepon',
      value: '+62 21 1234 5678',
      href: 'tel:+622112345678',
    },
    {
      icon: MapPin,
      title: 'Alamat',
      value: 'Jakarta, Indonesia',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-accent/5 to-primary/5" />
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-accent font-semibold text-lg">HUBUNGI KAMI</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">Mari Berkolaborasi</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Untuk Kesuksesan Bersama
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hubungi kami untuk mendiskusikan kebutuhan manufaktur Anda. Tim kami siap memberikan solusi terbaik.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.href}
                    className="group flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-slate-800 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm font-semibold text-foreground mb-4">Ikuti Kami</p>
              <div className="flex gap-4">
                {[
                  { name: 'LinkedIn', url: '#' },
                  { name: 'Twitter', url: '#' },
                  { name: 'Instagram', url: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 border border-border hover:bg-primary/10 hover:border-primary/50 flex items-center justify-center text-foreground hover:text-primary transition-all duration-300"
                    title={social.name}
                  >
                    {social.name.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-30" />
            <form
              onSubmit={handleSubmit}
              className="relative bg-white dark:bg-slate-800 rounded-2xl border border-border p-8 md:p-10 space-y-6 hover:border-primary/30 transition-all duration-300"
            >
              {/* Success Message */}
              {submitted && (
                <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center z-20 animate-in fade-in">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Terima Kasih!</h3>
                    <p className="text-muted-foreground">Kami akan segera menghubungi Anda.</p>
                  </div>
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-slate-900/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-slate-900/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Nomor Telepon</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+62 8XX XXXX XXXX"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-slate-900/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Pesan</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ceritakan kebutuhan Anda..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-slate-900/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 group"
              >
                <span>Kirim Pesan</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Privacy note */}
              <p className="text-xs text-muted-foreground text-center">
                Kami menghormati privasi Anda. Data Anda tidak akan dibagikan.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

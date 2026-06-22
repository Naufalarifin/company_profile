'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

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
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground">Hubungi Kami</h2>
          <p className="text-foreground/70 mt-4 max-w-2xl">
            Tim kami siap membantu Anda. Hubungi kami melalui berbagai saluran komunikasi di bawah.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <a
                key={idx}
                href={info.href}
                className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{info.title}</h3>
                <p className="text-foreground/70 text-sm">{info.value}</p>
              </a>
            );
          })}
        </div>

        {/* Simple Contact Form */}
        <div className="bg-white border border-border rounded-lg p-8 max-w-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-6">Kirim Pesan Langsung</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Nama Anda"
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email Anda"
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Nomor Telepon"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Pesan Anda..."
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              required
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white rounded font-bold hover:bg-green-700 transition-colors"
            >
              Kirim Pesan
            </button>
          </form>
          {submitted && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center font-semibold">
              Terima kasih! Kami akan segera menghubungi Anda.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

'use client';

import { Cog, BarChart3, Shield, Cpu } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Cog,
      title: 'Otomasi Industri',
      description: 'Sistem otomasi terpadu untuk meningkatkan efisiensi produksi hingga 80%',
      color: 'from-blue-500 to-primary',
    },
    {
      icon: BarChart3,
      title: 'Analitik Data',
      description: 'Dashboard real-time untuk monitoring dan optimasi proses produksi',
      color: 'from-primary to-accent',
    },
    {
      icon: Shield,
      title: 'Keamanan Proses',
      description: 'Sistem keamanan berlapis untuk menjaga kualitas dan konsistensi produk',
      color: 'from-accent to-green-500',
    },
    {
      icon: Cpu,
      title: 'Teknologi AI',
      description: 'Implementasi AI dan machine learning untuk predictive maintenance',
      color: 'from-purple-500 to-primary',
    },
  ];

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-lg">LAYANAN KAMI</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">Solusi Komprehensif</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Untuk Manufaktur
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Kami menyediakan rangkaian lengkap solusi manufaktur yang dirancang khusus untuk kebutuhan bisnis Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-border p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${service.color}`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 gap-1 transition-all duration-300">
                  Pelajari
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-16 border-t border-border text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Siap Mentransformasi Bisnis Anda?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hubungi tim kami hari ini untuk konsultasi gratis dan temukan solusi terbaik untuk kebutuhan manufaktur Anda
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transform hover:scale-105 transition-all duration-300">
            Dapatkan Konsultasi Gratis
          </button>
        </div>
      </div>
    </section>
  );
}

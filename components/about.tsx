'use client';

import { CheckCircle2, TrendingUp, Zap } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Zap,
      title: 'Teknologi Terdepan',
      description: 'Menggunakan teknologi otomasi dan AI untuk efisiensi maksimal',
    },
    {
      icon: TrendingUp,
      title: 'Pertumbuhan Berkelanjutan',
      description: 'Solusi yang scalable seiring berkembangnya bisnis Anda',
    },
    {
      icon: CheckCircle2,
      title: 'Kualitas Terjamin',
      description: 'Sertifikasi internasional dan standar industri tertinggi',
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/5 to-accent/5" />
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">Tentang</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">PT Manufaktur Indonesia</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lebih dari 25 tahun melayani industri manufaktur dengan dedikasi penuh terhadap inovasi dan kualitas
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Kami adalah pemimpin industri dalam solusi manufaktur yang mengintegrasikan teknologi terkini dengan pengalaman puluhan tahun.
            </p>
            <p className="text-foreground leading-relaxed text-muted-foreground">
              Dengan tim ahli yang berpengalaman, kami memahami tantangan unik setiap klien dan menyediakan solusi yang disesuaikan untuk kesuksesan mereka.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:shadow-lg"
                  >
                    <Icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Visual Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border hover:border-primary/50 flex items-center justify-center group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                    {item}
                  </div>
                  <p className="text-sm font-semibold text-foreground">Divisi {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-border p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Nilai-Nilai Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Kualitas Unggul', desc: 'Komitmen pada standar tertinggi dalam setiap produk' },
              { title: 'Inovasi Berkelanjutan', desc: 'Terus mengembangkan solusi untuk masa depan' },
              { title: 'Kepercayaan Klien', desc: 'Hubungan jangka panjang dibangun atas integritas' },
            ].map((value, idx) => (
              <div key={idx} className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-white dark:bg-slate-900 rounded-md flex items-center justify-center font-bold text-primary">
                    ✓
                  </div>
                </div>
                <h4 className="font-semibold text-foreground text-lg">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

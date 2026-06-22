export function Services() {
  return (
    <section id="divisions" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground">Program dan Kegiatan Astra</h2>
        </div>

        {/* Services Grid - 4 columns */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { title: 'Otomasi Produksi', desc: 'Sistem otomasi terpadu untuk efisiensi maksimal' },
            { title: 'Kontrol Kualitas', desc: 'Standar internasional dalam setiap produk' },
            { title: 'Logistik Terintegrasi', desc: 'Distribusi efisien ke seluruh wilayah' },
            { title: 'Inovasi Teknologi', desc: 'Investasi berkelanjutan dalam R&D' },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-foreground/70 text-sm">{service.desc}</p>
              <button className="mt-4 text-primary text-sm font-bold hover:underline">
                Selengkapnya →
              </button>
            </div>
          ))}
        </div>

        {/* News Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8">Berita Terbaru dari Astra</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Ekspansi Pabrik Baru', date: 'Januari 2024' },
              { title: 'Sertifikasi ISO Terbaru', date: 'Desember 2023' },
              { title: 'Partnership Global', date: 'November 2023' },
            ].map((news, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-border hover:border-primary transition-colors">
                <h4 className="font-bold text-foreground mb-2">{news.title}</h4>
                <p className="text-foreground/70 text-sm mb-4">{news.date}</p>
                <button className="text-primary text-sm font-bold hover:underline">
                  Baca Selengkapnya →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">Tertarik Bergabung dengan Kami?</h3>
          <button className="px-8 py-3 bg-primary text-white rounded font-bold hover:bg-green-700 transition-colors">
            Lihat Lowongan Karir
          </button>
        </div>
      </div>
    </section>
  );
}

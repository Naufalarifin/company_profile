export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Tentang PT Manufaktur</h2>
        </div>

        {/* Main About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <p className="text-foreground/70 leading-relaxed">
              PT Manufaktur Indonesia adalah pemimpin industri dalam solusi manufaktur terintegrasi. Dengan pengalaman lebih dari 25 tahun, kami telah melayani ribuan klien dengan komitmen penuh terhadap kualitas dan inovasi.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Kami menggunakan teknologi terdepan dan tim ahli berpengalaman untuk memberikan solusi yang disesuaikan dengan kebutuhan unik setiap klien.
            </p>
            <button className="mt-6 px-6 py-2 bg-primary text-white rounded font-medium hover:bg-green-700 transition-colors">
              Pelajari Lebih Lanjut
            </button>
          </div>
          <div className="bg-primary/5 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-4">🏢</div>
              <p className="text-primary font-bold">Pengalaman 25+ Tahun</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary text-white rounded-lg p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold">Sekilas Astra</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '68', label: 'Tahun Berdiri Indonesia' },
              { number: '195,759', label: 'Jumlah Karyawan' },
              { number: '3.0M', label: 'Juta Pertemuan Proyek' },
              { number: '50+', label: 'Venture Bersama dan Entitas Asosiasi' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divisions Section */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-8">Divisi Utama</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Manufaktur', desc: 'Solusi produksi terintegrasi' },
              { name: 'Distribusi', desc: 'Jaringan distribusi nasional' },
              { name: 'Teknologi', desc: 'Inovasi digital dan otomasi' },
              { name: 'Layanan', desc: 'Dukungan purna jual terpadu' },
            ].map((div, idx) => (
              <div key={idx} className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">#{idx + 1}</div>
                <h4 className="font-bold text-foreground mb-2">{div.name}</h4>
                <p className="text-foreground/70 text-sm">{div.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

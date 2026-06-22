export function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-primary to-green-600 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Untuk Hari ini dan Masa Depan Indonesia
            </h1>
            <p className="text-lg text-white/90">
              Mendorong pertumbuhan berkelanjutan melalui inovasi teknologi manufaktur dan komitmen terhadap keunggulan operasional.
            </p>
            <button className="px-8 py-3 bg-white text-primary font-bold rounded hover:bg-gray-100 transition-colors">
              Ketahui Lebih Lanjut
            </button>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm h-96 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30">
              <div className="text-center">
                <div className="text-6xl mb-4">🏭</div>
                <p className="text-white text-xl font-semibold">Solusi Manufaktur Modern</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

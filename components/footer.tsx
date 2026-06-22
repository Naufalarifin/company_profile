'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">PT Manufaktur</h3>
            <p className="text-white/80 text-sm">
              Solusi manufaktur terpadu untuk pertumbuhan Indonesia berkelanjutan.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#about" className="hover:text-white transition">Tentang Kami</a></li>
              <li><a href="#divisions" className="hover:text-white transition">Divisi</a></li>
              <li><a href="#news" className="hover:text-white transition">Berita</a></li>
              <li><a href="#careers" className="hover:text-white transition">Karir</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition">Manufaktur</a></li>
              <li><a href="#" className="hover:text-white transition">Distribusi</a></li>
              <li><a href="#" className="hover:text-white transition">Teknologi</a></li>
              <li><a href="#" className="hover:text-white transition">Layanan</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="mailto:info@manufaktur.id" className="hover:text-white transition">info@manufaktur.id</a></li>
              <li><a href="tel:+622112345678" className="hover:text-white transition">+62 21 1234 5678</a></li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-white/70 text-sm">
            &copy; {currentYear} PT Manufaktur Indonesia. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}

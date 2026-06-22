export const company = {
  name: 'PT. Bukit Kencana Mas',
  shortName: 'BKM',
  tagline: 'Produsen Tepung Tapioka Premium',
  founded: '2013',
  location: 'Bandar Lampung, Indonesia',
  address: 'Jl. Pangeran Tirtayasa No. 99 P, Bandar Lampung, Lampung',
  email: 'info@bukitkencanamas.co.id',
  phone: '+62 721 000 000',
}

export const nav = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Produk', href: '#produk' },
  { label: 'Proses', href: '#proses' },
  { label: 'Teknologi', href: '#teknologi' },
  { label: 'Kontak', href: '#kontak' },
]

export const stats = [
  { value: '2013', label: 'Berdiri sejak', suffix: '' },
  { value: '100', label: 'Pati murni alami', suffix: '%' },
  { value: '12', label: 'Tahun pengalaman', suffix: '+' },
  { value: '90', label: 'Tingkat keputihan', suffix: '%' },
]

export const products = [
  {
    id: '01',
    name: 'Tepung Tapioka Premium',
    en: 'Premium Tapioca Starch',
    desc: 'Pati singkong berwarna putih bersih dengan viskositas tinggi dan kadar air terjaga — standar industri makanan.',
    image: '/images/tapioca-starch.png',
    specs: ['Whiteness 90%+', 'Kadar air < 13%', 'Mesh halus'],
  },
  {
    id: '02',
    name: 'Tapioka Mutu Industri',
    en: 'Industrial Grade Starch',
    desc: 'Diformulasikan untuk kebutuhan industri kertas, tekstil, perekat, dan turunan pati lainnya.',
    image: '/images/packaging.png',
    specs: ['Konsistensi stabil', 'Daya rekat tinggi', 'Volume besar'],
  },
  {
    id: '03',
    name: 'Onggok & Produk Turunan',
    en: 'By-products',
    desc: 'Pemanfaatan ampas singkong sebagai bahan pakan dan energi — komitmen produksi rendah limbah.',
    image: '/images/cassava-roots.png',
    specs: ['Bahan pakan', 'Ramah lingkungan', 'Sirkular'],
  },
]

export const process = [
  {
    no: '01',
    title: 'Penerimaan Singkong',
    desc: 'Singkong segar dari petani Lampung disortir dan ditimbang untuk memastikan kadar pati terbaik.',
  },
  {
    no: '02',
    title: 'Pencucian & Pengupasan',
    desc: 'Akar dibersihkan dari tanah dan kulit menggunakan de-sanding cyclone agar pati tetap higienis.',
  },
  {
    no: '03',
    title: 'Pemarutan & Ekstraksi',
    desc: 'Rasper memarut singkong, lalu pati dipisahkan dari serat melalui centrifugal sieve.',
  },
  {
    no: '04',
    title: 'Pemurnian',
    desc: 'Hydrocyclone memurnikan susu pati hingga bersih dari protein dan kotoran halus.',
  },
  {
    no: '05',
    title: 'Pengeringan & Pengemasan',
    desc: 'Pati dikeringkan hingga kadar air ideal, diayak, lalu dikemas siap distribusi.',
  },
]

export const technology = [
  {
    name: 'De-sanding Cyclone',
    desc: 'Memisahkan pasir dan partikel kasar di tahap awal.',
  },
  {
    name: 'Rasper',
    desc: 'Memarut singkong secara maksimal untuk membebaskan butiran pati.',
  },
  {
    name: 'Centrifugal Sieve',
    desc: 'Memisahkan serat dari susu pati dengan presisi tinggi.',
  },
  {
    name: 'Hydrocyclone',
    desc: 'Memurnikan pati hingga tingkat keputihan optimal.',
  },
]

export const values = [
  {
    title: 'Kualitas Konsisten',
    desc: 'Setiap batch melewati kontrol mutu untuk memastikan keputihan, viskositas, dan kebersihan yang stabil.',
  },
  {
    title: 'Berbasis Lokal',
    desc: 'Bermitra langsung dengan petani singkong Lampung — menggerakkan ekonomi daerah.',
  },
  {
    title: 'Teknologi Eropa',
    desc: 'Lini produksi menggunakan mesin pengolahan pati standar Eropa untuk efisiensi maksimal.',
  },
  {
    title: 'Produksi Berkelanjutan',
    desc: 'Pengelolaan air dan limbah yang bertanggung jawab serta pemanfaatan produk samping.',
  },
]

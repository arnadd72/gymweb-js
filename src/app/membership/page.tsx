// src/app/membership/page.tsx
import Link from 'next/link';

// Komponen ikon centang kecil
const CheckIcon = () => (
  <svg className="w-6 h-6 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
  </svg>
);

export default function MembershipPage() {
  return (
    <section className="bg-gray-100 py-24 pt-32"> {/* pt-32 untuk memberi ruang di bawah navbar fixed */}
      <div className="container mx-auto px-4">

        {/* --- Judul --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Temukan Paket yang Tepat
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bergabunglah dengan komunitas kami dan mulai transformasi Anda hari ini. 
            Tanpa biaya tersembunyi, tanpa repot.
          </p>
        </div>

        {/* --- Tabel Harga (Pricing Table) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Paket 1: Harian */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-center mb-2">Daily Pass</h3>
            <p className="text-4xl font-extrabold text-center mb-6">Rp 50.000</p>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center gap-3">
                <CheckIcon /> <span>Akses Gym 1 Hari</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon /> <span>Akses 1 Kelas (Pilihan)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon /> <span>Loker Harian</span>
              </li>
            </ul>
            <Link 
              href="/kontak" 
              className="mt-auto block w-full text-center bg-gray-200 hover:bg-gray-300 text-black font-bold py-3 px-6 rounded-lg transition"
            >
              Kunjungi Kami
            </Link>
          </div>

          {/* Paket 2: Bulanan (Paling Populer) */}
          <div className="bg-gray-900 text-white rounded-lg shadow-2xl p-8 flex flex-col relative border-4 border-lime-500">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime-500 text-black text-sm font-bold px-4 py-1 rounded-full">
              POPULER
            </span>
            <h3 className="text-2xl font-bold text-center mb-2">Bulanan</h3>
            <p className="text-4xl font-extrabold text-center mb-6">Rp 300.000<span className="text-lg font-normal text-gray-400">/bln</span></p>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center gap-3">
                <CheckIcon /> <span>Akses Gym Tanpa Batas</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon /> <span>Akses Semua Kelas</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon /> <span>Loker Harian Gratis</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon /> <span>Gratis 1x Sesi Personal Trainer</span>
              </li>
            </ul>
            <Link 
              href="/kontak" 
              className="mt-auto block w-full text-center bg-lime-500 hover:bg-lime-600 text-black font-bold py-3 px-6 rounded-lg transition"
            >
              Daftar Sekarang
            </Link>
          </div>

          {/* Paket 3: Tahunan */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-center mb-2">Tahunan</h3>
            <p className="text-4xl font-extrabold text-center mb-6">Rp 3.000.000<span className="text-lg font-normal text-gray-500">/thn</span></p>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center gap-3">
                <CheckIcon /> <span>Semua di Paket Bulanan</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon /> <span>Gratis Handuk</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon /> <span>Gratis Merchandise (Baju/Shaker)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon /> <span>Gratis 3x Sesi Personal Trainer</span>
              </li>
            </ul>
            <Link 
              href="/kontak" 
              className="mt-auto block w-full text-center bg-gray-200 hover:bg-gray-300 text-black font-bold py-3 px-6 rounded-lg transition"
            >
              Daftar Sekarang
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
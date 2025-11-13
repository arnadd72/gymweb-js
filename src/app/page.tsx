// src/app/page.tsx

import Link from 'next/link';
import Image from 'next/image'; // Penting: import Image dari next/image

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-black text-white">
        <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-between">
          
          {/* Bagian Kiri: Teks dan Tombol */}
          <div className="w-full lg:w-1/2 text-center lg:text-left p-8 z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              ALL-IN GYM EXPERIENCE
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Bukan Sekadar Gym – Ini Adalah Upgrade Gaya Hidup Anda
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Link
                href="/paket-membership"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
              >
                Daftar Sekarang
              </Link>
              <Link
                href="/tentang-kn-fitness"
                className="border border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>

          {/* Bagian Kanan: Slot Gambar */}
          <div className="relative w-full lg:w-1/2 h-96 lg:h-full overflow-hidden">
            <Image
              src="/images/gyminteriorr.webp" // Ganti dengan path gambar Anda
              alt="Interior Gym KN Fitness"
              layout="fill"
              objectFit="cover"
              quality={90}
              className="object-right" // Bisa atur posisi gambar jika perlu
            />
             {/* Optional: overlay gelap agar teks di atas gambar lebih jelas jika ada */}
            <div className="absolute inset-0 bg-black opacity-30"></div> 
          </div>

        </div>
      </section>

      {/* Bagian Fitur (Contoh - biarkan seperti sebelumnya atau hapus dulu) */}
      <section className="py-16 text-center">
        {/* ... (konten fitur lainnya) ... */}
      </section>
    </div>
  );
}
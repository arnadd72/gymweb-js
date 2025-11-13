// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider"; 

// Komponen ikon centang kecil untuk daftar
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-lime-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

export default function HomePage() {
  const features = [
    "Personal Training",
    "Diet Plans",
    "Group Classes",
    "Free WIFI",
    "Fitness Test",
  ];

  return (
    <div>
      {/* 1. HERO SLIDER */}
      <HeroSlider /> 

      {/* 2. BAGIAN BANNERS (Info & Jam Buka) */}
      <section className="relative z-10 py-16 bg-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white text-gray-800 shadow-2xl rounded-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-3xl font-heading tracking-wide mb-4">
                KN FITNESS
              </h2>
              <ul className="space-y-3 mb-5">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon /> 
                    <span className="text-lg font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/membership" 
                className="text-lg font-bold text-lime-600 hover:underline"
              >
                JOIN TODAY
              </Link>
            </div>
            <div className="bg-lime-500 text-black text-center p-4">
              <h3 className="text-3xl font-heading tracking-tight">
                GET 50% OFF
              </h3>
            </div>
          </div>

          <div className="bg-gray-900 text-white shadow-2xl rounded-md overflow-hidden p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-heading tracking-wide mb-4 text-lime-400">
                WORKING HOURS
              </h2>
              <ul className="space-y-2 text-lg font-medium mb-6">
                <li className="flex justify-between border-b border-gray-700 py-2">
                  <span>Week Days</span>
                  <span>05:00 - 22:00</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 py-2">
                  <span>Saturday</span>
                  <span>08:00 - 18:00</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 py-2">
                  <span>Sunday</span>
                  <span>08:00 - 12:00</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold mb-1">Need Free Consultation?</p>
              <p className="text-2xl font-heading tracking-wide text-lime-400 mb-4">
                ASK OUR EXPERTS
              </p>
              <Link
                href="/kontak" 
                className="block w-full bg-lime-500 hover:bg-lime-600 text-black font-bold py-3 px-6 rounded-sm text-lg transition"
              >
                LETS TALK
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FASILITAS UNGGULAN */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-base font-heading tracking-widest text-lime-600">
            Fasilitas Kami
          </h2>
          <p className="text-4xl md:text-5xl font-heading tracking-wide text-gray-900 mt-2 mb-12">
            Dirancang Untuk Kemenangan Anda
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <Link href="/fasilitas/beban" className="group block">
              <div className="bg-white p-2 rounded-lg shadow-xl border border-gray-200">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/images/gyminteriorr.webp"
                    alt="Area Angkat Beban"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-heading tracking-wide mt-5 text-gray-900 group-hover:text-lime-600 transition">
                Area Angkat Beban
              </h3>
            </Link>

            <Link href="/fasilitas/kardio" className="group block">
              <div className="bg-white p-2 rounded-lg shadow-xl border border-gray-200">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/hero-gym-1.webp" 
                    alt="Area Fungsional"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-heading tracking-wide mt-5 text-gray-900 group-hover:text-lime-600 transition">
                Area Fungsional & Studio
              </h3>
            </Link>

            <Link href="/fasilitas/penunjang" className="group block">
              <div className="bg-white p-2 rounded-lg shadow-xl border border-gray-200">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/hero-gym-3.webp" 
                    alt="Locker Room"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-heading tracking-wide mt-5 text-gray-900 group-hover:text-lime-600 transition">
                Fasilitas Penunjang
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. TEMUKAN LATIHANMU */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="pr-4">
              <h2 className="text-base font-heading tracking-widest text-lime-400">
                Latihan
              </h2>
              <p className="text-4xl md:text-5xl font-heading tracking-wide mt-2 mb-6">
                Kelas Penuh Energi
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Dari HIIT, Yoga, hingga Muay Thai, temukan kelas yang membakar semangat Anda. 
                Dipandu oleh instruktur terbaik, kami jamin Anda akan berkeringat.
              </p>
              <Link
                href="/latihan/kelas" 
                className="bg-lime-500 hover:bg-lime-600 text-black font-bold py-3 px-8 rounded-lg transition"
              >
                Lihat Jadwal Kelas
              </Link>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-lg p-2 bg-gray-800">
              <Image
                src="/hero-gym-3.webp" 
                alt="Kelas Group"
                width={800}
                height={700}
                className="w-full h-auto object-cover rounded-md transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            <div className="group overflow-hidden rounded-lg shadow-lg p-2 bg-gray-800 order-last md:order-first">
              <Image
                src="/hero-gym-2.webp" 
                alt="Personal Trainer"
                width={800}
                height={700}
                className="w-full h-auto object-cover rounded-md transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="pl-4 order-first md:order-last">
              <h2 className="text-base font-heading tracking-widest text-lime-400">
                1-ON-1
              </h2>
              <p className="text-4xl md:text-5xl font-heading tracking-wide mt-2 mb-6">
                Personal Training
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Capai target Anda lebih cepat. Trainer bersertifikasi kami akan 
                membuat program yang didesain khusus untuk Anda.
              </p>
              <Link
                href="/latihan/pt" 
                className="bg-lime-500 hover:bg-lime-600 text-black font-bold py-3 px-8 rounded-lg transition"
              >
                Temui Trainer Kami
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. TENTANG KAMI (KOMUNITAS) */}
      <section className="py-24" style={{ backgroundImage: `url('/hero-gym-1.webp')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading tracking-wide text-white mb-6">
            Bukan Sekadar Gym. <br />Ini Komunitas.
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Di KN Fitness, kami percaya bahwa lingkungan yang suportif adalah kunci. 
            Temukan teman baru, tantang dirimu, dan jadi versi terbaikmu bersama kami.
          </p>
          <Link
            href="/tentang" 
            className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-10 rounded-lg transition text-lg"
          >
            Tentang KN Fitness
          </Link>
        </div>
      </section>

    </div>
  );
}
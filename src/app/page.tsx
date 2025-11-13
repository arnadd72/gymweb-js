// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider"; // <-- TAMBAHKAN IMPORT INI

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
      {/* Hero Section - Ganti dengan HeroSlider */}
      <HeroSlider /> {/* <-- GANTI SELURUH BAGIAN HERO SEBELUMNYA DENGAN INI */}

      {/* Bagian Banners (di bawah Hero) */}
      <section className="relative z-20 -mt-24 pb-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Banner Kiri: KN Fitness */}
          <div className="bg-white text-gray-800 shadow-2xl rounded-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-3xl font-extrabold mb-4">
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
                href="/packages"
                className="text-lg font-bold text-lime-600 hover:underline"
              >
                JOIN TODAY
              </Link>
            </div>
            <div className="bg-lime-500 text-black text-center p-4">
              <h3 className="text-3xl font-extrabold tracking-tight">
                GET 50% OFF
              </h3>
            </div>
          </div>

          {/* Banner Kanan: Working Hours */}
          <div className="bg-gray-900 text-white shadow-2xl rounded-md overflow-hidden p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold mb-4 text-lime-400">
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
              <p className="text-2xl font-extrabold text-lime-400 mb-4">
                ASK OUR EXPERTS
              </p>
              <Link
                href="/contact"
                className="block w-full bg-lime-500 hover:bg-lime-600 text-black font-extrabold py-3 px-6 rounded-sm text-lg transition duration-300"
              >
                LETS TALK
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
// src/components/HeroSlider.tsx
"use client"; // Penting: Swiper membutuhkan client-side rendering

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Impor Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Impor Swiper modules yang dibutuhkan
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

// Impor Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Untuk animasi fade smooth

interface Slide {
  id: number;
  image: string; // Path ke gambar
  alt: string;
  headline: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/hero-gym-1.webp", // Ganti dengan path gambar slide pertama Anda
    alt: "Modern gym interior with diverse people exercising",
    headline: "BENTUK MASA DEPANMU",
    buttonText: "JELAJAHI PAKET",
    buttonLink: "/harga",
  },
  {
    id: 2,
    image: "/images/hero-gym-2.webp", // Ganti dengan path gambar slide kedua Anda
    alt: "Group fitness class in action with energetic atmosphere",
    headline: "ENERGI TAK TERBATAS",
    buttonText: "LIHAT KELAS",
    buttonLink: "/latihan",
  },
  {
    id: 3,
    image: "/images/hero-gym-3.webp", // Ganti dengan path gambar slide ketiga Anda
    alt: "Personal trainer assisting client with weights",
    headline: "RAIH POTENSI TERBAIKMU",
    buttonText: "KONSULTASI GRATIS",
    buttonLink: "/kontak",
  },
  // Tambahkan slide ke-4 jika Anda mau:
  // {
  //   id: 4,
  //   image: "/images/hero-gym-4.webp",
  //   alt: "State-of-the-art cardio machines in a spacious gym",
  //   headline: "FASILITAS PRIMA",
  //   buttonText: "LIHAT FASILITAS",
  //   buttonLink: "/fasilitas",
  // },
];

export default function HeroSlider() {
  const [swiperLoaded, setSwiperLoaded] = useState(false);

  useEffect(() => {
    setSwiperLoaded(true); // Pastikan Swiper dimuat di client-side
  }, []);

  if (!swiperLoaded) {
    return (
      <div className="relative h-screen bg-gray-900 flex items-end justify-center">
        <Image
          src={slides[0].image} // Gambar placeholder pertama saat loading
          alt={slides[0].alt}
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 text-center pb-32 md:pb-40 text-white">
          <h1 className="text-6xl md:text-8xl font-extrabold uppercase tracking-wider mb-6">
            LOADING...
          </h1>
          <div className="bg-lime-500 text-black font-extrabold py-3 px-10 rounded-sm text-lg opacity-50">
            BUY NOW
          </div>
        </div>
      </div>
    );
  }

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, EffectFade]}
      spaceBetween={0} // Tidak ada spasi antar slide
      slidesPerView={1}
      autoplay={{
        delay: 5000, // Otomatis geser setiap 5 detik
        disableOnInteraction: false, // Lanjutkan autoplay setelah user interaksi
      }}
      loop={true} // Geser terus menerus
      navigation={true} // Aktifkan tombol panah (kiri/kanan)
      pagination={{ clickable: true }} // Aktifkan indikator titik (bawah)
      effect="fade" // Transisi efek fade
      fadeEffect={{
        crossFade: true, // Untuk transisi yang lebih smooth
      }}
      className="h-screen w-full relative" // Full tinggi layar
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative h-full w-full flex items-end justify-center text-white">
            <Image
              src={slide.image}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              quality={90}
              priority={slide.id === 1} // Prioritaskan gambar pertama
              className="z-0"
            />
            {/* Overlay Gelap */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Konten Hero */}
            <div className="relative z-20 text-center pb-32 md:pb-40">
              <h1 className="text-6xl md:text-8xl font-extrabold uppercase tracking-wider mb-6">
                {slide.headline}
              </h1>
              <Link
                href={slide.buttonLink}
                className="bg-lime-500 hover:bg-lime-600 text-black font-extrabold py-3 px-10 rounded-sm text-lg transition duration-300"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
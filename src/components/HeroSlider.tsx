// src/components/HeroSlider.tsx
"use client"; 

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; 

interface Slide {
  id: number;
  image: string; 
  alt: string;
  headline: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/hero-gym-1.webp",
    alt: "KN Fitness Find Your Fire",
    headline: "BENTUK MASA DEPANMU",
    buttonText: "JELAJAHI PAKET",
    buttonLink: "/harga",
  },
  {
    id: 2,
    image: "/hero-gym-2.webp",
    alt: "KN Fitness Team",
    headline: "ENERGI TAK TERBATAS",
    buttonText: "LIHAT KELAS",
    buttonLink: "/latihan",
  },
  {
    id: 3,
    image: "/hero-gym-3.webp",
    alt: "KN Fitness Members",
    headline: "RAIH POTENSI TERBAIKMU",
    buttonText: "KONSULTASI GRATIS",
    buttonLink: "/kontak",
  },
];

export default function HeroSlider() {
  const [swiperLoaded, setSwiperLoaded] = useState(false);

  useEffect(() => {
    setSwiperLoaded(true); 
  }, []);

  // Style Teks
  const headlineStyles = [
    "font-extrabold", // <-- Gunakan ketebalan font
    "text-5xl md:text-7xl", // <-- Ukuran besar seperti FTL
    "text-white uppercase tracking-tight mb-6", // tracking-tight agar lebih rapat
    // HAPUS text-stroke dan text-shadow
  ].join(" ");

  if (!swiperLoaded) {
    return (
      <div className="relative h-[60vh] md:h-[90vh] bg-gray-900 flex items-end justify-center">
        <Image
          src={slides[0].image} 
          alt={slides[0].alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center" 
          quality={90}
          priority
          className="z-0" 
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div> {/* <-- Overlay */}
        <div className="relative z-20 text-center pb-12 md:pb-16 text-white">
          <h1 className={headlineStyles}> 
            LOADING...
          </h1>
          <div className="bg-lime-500 text-black font-extrabold py-3 px-10 rounded-sm text-lg opacity-50">
            LIHAT KELAS
          </div>
        </div>
      </div>
    );
  }

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      className="h-[60vh] md:h-[90vh] w-full relative" 
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative h-full w-full flex items-end justify-center text-white">
            <Image
              src={slide.image}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center" 
              quality={90}
              priority={slide.id === 1} 
              className="z-0"
            />
            
            {/* 5. KEMBALIKAN OVERLAY GELAP AGAR TEKS TERBACA */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            <div className="relative z-20 text-center pb-12 md:pb-16 px-4">
              <h1 className={headlineStyles}> 
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
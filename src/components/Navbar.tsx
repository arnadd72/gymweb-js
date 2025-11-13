// src/components/Navbar.tsx
"use client";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Image from "next/image"; 
// Impor komponen dropdown baru
import FasilitasDropdown from "./FasilitasDropdown";
import LatihanDropdown from "./LatihanDropdown";

// Helper untuk mengubah nama menu menjadi path URL
const getPathFromMenu = (item: string) => {
  switch (item) {
    case "Beranda":
      return "/";
    case "Fasilitas":
      return "/fasilitas";
    case "Latihan":
      return "/latihan";
    case "Membership":
      return "/membership";
    case "Tentang Kami":
      return "/tentang";
    case "Kontak":
      return "/kontak";
    default:
      return `/${item.toLowerCase()}`;
  }
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // State untuk mengontrol dropdown desktop
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    "Beranda",
    "Fasilitas",
    "Latihan",
    "Membership",
    "Tentang Kami",
    "Kontak",
  ];

  return (
    <nav 
      className="fixed top-0 left-0 w-full bg-black text-white z-50"
      // Ini akan menutup dropdown saat mouse keluar dari area navbar
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-2xl font-extrabold text-white">
          <Image
            src="/logo-kn1.png" // Path ini dari file Anda
            alt="KN Fitness Logo"
            width={40}
            height={40}
          />
          <span>KN FITNESS</span>
        </Link>

        {/* Menu desktop */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {menuItems.map((item) => (
            <li
              key={item}
              // 'relative' penting agar dropdown bisa diposisikan
              className="relative hover:text-lime-400 cursor-pointer transition flex items-center gap-1.5"
              // Logika untuk membuka menu saat di-hover
              onMouseEnter={() => (item === "Fasilitas" || item === "Latihan") && setOpenDropdown(item)}
            >
              <Link href={getPathFromMenu(item)}>
                {item}
              </Link>

              {(item === "Fasilitas" || item === "Latihan") && (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              )}

              {/* Render Dropdown secara Kondisional */}
              {item === "Fasilitas" && openDropdown === "Fasilitas" && (
                <FasilitasDropdown onClose={() => setOpenDropdown(null)} />
              )}
              {item === "Latihan" && openDropdown === "Latihan" && (
                <LatihanDropdown onClose={() => setOpenDropdown(null)} />
              )}
            </li>
          ))}
        </ul>

        {/* Tombol Join Now */}
        <button className="hidden lg:block bg-lime-500 hover:bg-lime-600 text-black px-5 py-2 rounded-md font-bold text-sm">
          Join Now
        </button>

        {/* Tombol mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {menuOpen && <MobileMenu menuItems={menuItems} onClose={() => setMenuOpen(false)} />}
    </nav>
  );
}
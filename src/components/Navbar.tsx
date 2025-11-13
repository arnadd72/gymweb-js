// src/components/Navbar.tsx
"use client";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Image from "next/image"; 

// Helper untuk mengubah nama menu menjadi path URL
const getPathFromMenu = (item: string) => {
  switch (item) {
    case "Beranda":
      return "/";
    case "Fasilitas":
      return "/fasilitas";
    case "Latihan":
      return "/latihan";
    case "Pricelist":
      return "/Membership";
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

  const menuItems = [
    "Beranda",
    "Fasilitas",
    "Latihan",
    "Membership",
    "Tentang Kami",
    "Kontak",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-2xl font-extrabold text-white">
          {/* PERBARUI BAGIAN INI UNTUK LOGO */}
          <Image
            src="/logo-kn1.png" // Ganti dengan path logo Anda di folder /public
            alt="KN Fitness Logo"
            width={60}
            height={60}
          />
          <span>KN FITNESS</span>
        </Link>

        {/* Menu desktop */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {menuItems.map((item) => (
            <li
              key={item}
              className="hover:text-lime-400 cursor-pointer transition flex items-center gap-1.5"
            >
              <Link href={getPathFromMenu(item)}>
                {item}
              </Link>

              {/* TAMBAHKAN PANAH INI */}
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
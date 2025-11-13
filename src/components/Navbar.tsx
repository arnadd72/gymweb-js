"use client";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-sm text-white z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">KN FITNESS</h1>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6">
          {["Tentang", "Fasilitas", "Latihan", "Paket", "Blog", "Trainer", "FAQ", "Kontak"].map(
            (item) => (
              <li key={item} className="hover:text-red-500 cursor-pointer transition">
                {item}
              </li>
            )
          )}
        </ul>

        {/* Tombol join */}
        <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
          Join Now
        </button>

        {/* Tombol mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </nav>
  );
}

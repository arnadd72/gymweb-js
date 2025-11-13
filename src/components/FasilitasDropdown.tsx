// src/components/FasilitasDropdown.tsx
import Link from 'next/link';

// Ini adalah item-item submenu Anda
// Anda bisa ganti nama dan link-nya nanti
const dropdownItems = [
  { name: 'Area Kardio', href: '/fasilitas/kardio' },
  { name: 'Area Angkat Beban (Weights)', href: '/fasilitas/beban' },
  { name: 'Area Fungsional', href: '/fasilitas/fungsional' },
  { name: 'Ruang Kelas (Studio)', href: '/fasilitas/studio' },
  { name: 'Loker & Kamar Mandi', href: '/fasilitas/penunjang' },
];

interface Props {
  onClose: () => void; // Fungsi untuk menutup menu saat item di-klik
}

export default function FasilitasDropdown({ onClose }: Props) {
  return (
    // 'dropdown-menu' adalah class animasi dari globals.css
    <div className="dropdown-menu absolute top-full left-0 w-64 bg-black text-white shadow-lg rounded-b-md p-4">
      <ul className="space-y-3">
        {dropdownItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              onClick={onClose} // Menutup dropdown setelah diklik
              className="block hover:text-lime-400 transition"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
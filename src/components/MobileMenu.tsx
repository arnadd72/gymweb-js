// src/components/MobileMenu.tsx
import Link from "next/link";
import { useState } from 'react'; // <-- TAMBAHKAN IMPORT

// Helper yang sama untuk path URL
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

interface Props {
  onClose: () => void;
  menuItems: string[]; 
}

export default function MobileMenu({ onClose, menuItems }: Props) {
  // State untuk accordion mobile
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleMenuClick = (item: string) => {
    // Jika item adalah dropdown, toggle submenu-nya
    if (item === "Fasilitas" || item === "Latihan") {
      setOpenSubMenu(openSubMenu === item ? null : item);
    } else {
      // Jika link biasa, tutup seluruh menu mobile
      onClose();
    }
  };

  // Definisikan konten submenu di sini
  const fasilitasSubMenu = [
    { name: 'Area Kardio', href: '/fasilitas/kardio' },
    { name: 'Area Angkat Beban', href: '/fasilitas/beban' },
    { name: 'Area Fungsional', href: '/fasilitas/fungsional' },
    { name: 'Fasilitas Penunjang', href: '/fasilitas/penunjang' },
  ];
  const latihanSubMenu = [
    { name: 'Kelas (Group Class)', href: '/latihan/kelas' },
    { name: 'Personal Training', href: '/latihan/pt' },
  ];

  return (
    <div className="lg:hidden bg-black/95 text-white absolute top-full left-0 w-full py-4 space-y-2 text-center">
      {menuItems.map((item) => {
        const isDropdown = item === "Fasilitas" || item === "Latihan";
        
        return (
          <div key={item} className="border-b border-gray-700 last:border-b-0">
            {/* Jika ini BUKAN dropdown, gunakan Link.
              Jika INI dropdown, gunakan Button untuk toggle.
            */}
            {isDropdown ? (
              <button
                onClick={() => handleMenuClick(item)}
                className="w-full block py-3 hover:bg-lime-500 hover:text-black cursor-pointer text-lg"
              >
                <div className="flex items-center justify-center gap-1.5">
                  <span>{item}</span>
                  {/* Ikon Panah */}
                  <svg
                    className={`w-4 h-4 transition-transform ${openSubMenu === item ? 'rotate-180' : 'rotate-0'}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
            ) : (
              <Link
                href={getPathFromMenu(item)}
                onClick={onClose}
                className="block py-3 hover:bg-lime-500 hover:text-black cursor-pointer text-lg"
              >
                {item}
              </Link>
            )}

            {/* Render Submenu untuk Fasilitas */}
            {isDropdown && item === "Fasilitas" && openSubMenu === "Fasilitas" && (
              <div className="bg-gray-800 py-2">
                {fasilitasSubMenu.map(subItem => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    onClick={onClose} // Tutup menu setelah sub-item diklik
                    className="block py-2 text-sm text-gray-300 hover:text-lime-400"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
            
            {/* Render Submenu untuk Latihan */}
            {isDropdown && item === "Latihan" && openSubMenu === "Latihan" && (
              <div className="bg-gray-800 py-2">
                {latihanSubMenu.map(subItem => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    onClick={onClose} // Tutup menu setelah sub-item diklik
                    className="block py-2 text-sm text-gray-300 hover:text-lime-400"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
      
      {/* Tombol Join Now di luar loop */}
      <div className="pt-4">
        <button className="bg-lime-500 hover:bg-lime-600 text-black px-6 py-2 rounded-lg font-bold">
          Join Now
        </button>
      </div>
    </div>
  );
}
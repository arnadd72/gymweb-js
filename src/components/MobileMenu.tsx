// src/components/MobileMenu.tsx
import Link from "next/link";

// Helper yang sama untuk path URL
const getPathFromMenu = (item: string) => {
  switch (item) {
    case "Beranda":
      return "/";
    case "Tentang Kami":
      return "/tentang";
    case "Fasilitas":
      return "/fasilitas";
    case "Latihan":
      return "/latihan";
    case "Harga":
      return "/harga";
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
  return (
    <div className="lg:hidden bg-black/95 text-white absolute top-full left-0 w-full py-4 space-y-2 text-center">
      {menuItems.map((item) => (
        <Link
          key={item}
          href={getPathFromMenu(item)}
          onClick={onClose}
          className="block py-3 hover:bg-lime-500 hover:text-black cursor-pointer text-lg"
        >
          <div className="flex items-center justify-center gap-1.5">
            <span>{item}</span>
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
          </div>
        </Link>
      ))}
      <button className="bg-lime-500 hover:bg-lime-600 text-black px-6 py-2 rounded-lg mt-4 font-bold">
        Join Now
      </button>
    </div>
  );
}
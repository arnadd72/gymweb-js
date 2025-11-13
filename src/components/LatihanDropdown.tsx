// src/components/LatihanDropdown.tsx
import Link from 'next/link';

// Item-item untuk submenu Latihan
const dropdownItems = [
  { name: 'Kelas (Group Class)', href: '/latihan/kelas' },
  { name: 'Personal Training (PT)', href: '/latihan/pt' },
  { name: 'Program Latihan Online', href: '/latihan/program' },
];

interface Props {
  onClose: () => void;
}

export default function LatihanDropdown({ onClose }: Props) {
  return (
    <div className="dropdown-menu absolute top-full left-0 w-64 bg-black text-white shadow-lg rounded-b-md p-4">
      <ul className="space-y-3">
        {dropdownItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              onClick={onClose}
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
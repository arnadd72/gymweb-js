interface Props {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: Props) {
  return (
    <div className="md:hidden bg-black/90 text-white absolute top-14 left-0 w-full py-4 space-y-3 text-center">
      {["Tentang", "Fasilitas", "Latihan", "Paket", "Blog", "Trainer", "FAQ", "Kontak"].map(
        (item) => (
          <div
            key={item}
            onClick={onClose}
            className="py-2 hover:bg-red-600 cursor-pointer"
          >
            {item}
          </div>
        )
      )}
      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg mt-2">
        Join Now
      </button>
    </div>
  );
}

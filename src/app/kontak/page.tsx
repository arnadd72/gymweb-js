// src/app/kontak/page.tsx

// Komponen Ikon (kita buat di sini agar rapi)
const PhoneIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth={2}></rect>
    <path strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2}></line>
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
  </svg>
);

export default function ContactPage() {
  return (
    <section className="py-24 pt-32"> {/* pt-32 untuk memberi ruang di bawah navbar fixed */}
      <div className="container mx-auto px-4">

        {/* --- Judul --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Hubungi Kami
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ada pertanyaan? Kami siap membantu Anda memulai perjalanan fitness Anda.
          </p>
        </div>

        {/* --- Konten (Grid 2 Kolom) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* Kolom Kiri: Info Kontak */}
          <div className="space-y-8">
            {/* Info Card: Telepon / WA */}
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 bg-lime-500 text-black p-4 rounded-lg">
                <PhoneIcon />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Telepon & WhatsApp</h3>
                <p className="text-gray-600 text-lg mb-2">
                  Hubungi kami untuk respon cepat.
                </p>
                <a 
                  href="https://wa.me/628123456789" // GANTI DENGAN NOMOR WA ANDA
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg font-bold text-lime-600 hover:underline"
                >
                  +62 812-3456-7890 {/* GANTI DENGAN NOMOR WA ANDA */}
                </a>
              </div>
            </div>
            
            {/* Info Card: Instagram */}
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 bg-lime-500 text-black p-4 rounded-lg">
                <InstagramIcon />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Instagram</h3>
                <p className="text-gray-600 text-lg mb-2">
                  Lihat update harian dan promo kami.
                </p>
                <a 
                  href="https://instagram.com/knfitness" // GANTI DENGAN LINK IG ANDA
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg font-bold text-lime-600 hover:underline"
                >
                  @knfitness {/* GANTI DENGAN USERNAME IG ANDA */}
                </a>
              </div>
            </div>

            {/* Info Card: Alamat */}
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 bg-lime-500 text-black p-4 rounded-lg">
                <MapPinIcon />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Alamat Gym</h3>
                <p className="text-gray-600 text-lg">
                  Jl. Jenderal Soedirman No. 123,<br/>
                  Purwokerto, Jawa Tengah, 53182 {/* GANTI DENGAN ALAMAT ANDA */}
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Peta */}
          <div className="w-full h-80 md:h-full rounded-lg overflow-hidden shadow-lg">
            {/* PENTING: GANTI 'src' DI BAWAH INI DENGAN KODE EMBED GOOGLE MAPS ANDA
              1. Buka Google Maps
              2. Cari lokasi gym Anda
              3. Klik "Share" (Bagikan)
              4. Klik "Embed a map" (Sematkan peta)
              5. Klik "Copy HTML"
              6. Ambil HANYA bagian URL di dalam src="..." dan tempel di bawah ini.
            */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.27376783939!2d109.23191567499999!3d-7.434994292592318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e886d3e331b%3A0x6d92634b3e61c393!2sAlun-Alun%20Purwokerto!5e0!3m2!1sen!2sid!4v1731484196884!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
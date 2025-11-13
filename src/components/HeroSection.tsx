export default function HeroSection() {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center items-start px-8 md:px-24 text-white"
      style={{
        backgroundImage:
          "url('/your-image.jpg')", // ganti dengan gambar gym kamu
      }}
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        ALL-IN GYM EXPERIENCE
      </h2>
      <p className="text-lg md:text-2xl mb-6">
        Bukan Sekadar Gym – Ini Adalah Upgrade Gaya Hidup Anda
      </p>
      <div className="flex gap-4">
        <button className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg">
          Daftar Sekarang
        </button>
        <button className="border border-white px-5 py-3 rounded-lg hover:bg-white hover:text-black">
          Pelajari Lebih Lanjut
        </button>
      </div>
    </section>
  );
}

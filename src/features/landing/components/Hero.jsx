import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white via-blue to-blue-50">
      <header className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-800 md:text-5xl lg:text-6xl">
          Solusi <span className="text-blue-600">Manajemen Apotek</span> Modern 💊
        </h1>

        <p className="mb-8 text-lg lg:text-xl sm:space-y-0 sm:space-x-4">
          Kelola <span className="text-medium text-blue-500">stok obat, transaksi, dan laporan penjualan Apotek Anda </span> dengan
          mudah hanya dalam satu platform!
        </p>

        <div className="flex flex-row sm:flex-row justify-center gap-4 mt-6">
          <Link to="/signup" className="btn-primary text-sm">
            Daftar sekarang
          </Link>

          <a href="#feature" className=" btn-secondary text-sm">
            ⬇️Pelajari lebih lanjut
          </a>
        </div>
      </header>
    </div>
  );
};

import { FaCashRegister, FaChartBar, FaClipboard, FaPills } from "react-icons/fa";

export const Feature = () => {
  return (
    <div>
      <section
        id="feature"
        className="min-h-screen flex items-center relative bg-blue-50 py-16 px-4"
      >
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl mb-4">
            ✨Our Best Features✨
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Semua fitur yang Anda butuhkan untuk mempermudah pengelolaan apotek modern - simple, cepat, dan efisien.
          </p>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4">
            <div className="p-6 rounded-xl border border-blue-400 hover:shadow-lg transition duration-300">
              <FaPills className="text-blue-400 text-4xl mb-4 mx-auto"/>
              <h3 className="font-semibold text-xl mb-2">Manajemen Stok Opname</h3>
              <p className="text-lg mb-12 max-w-2xl mx-auto">
              Pantau persediaan obat secara real-time, termasuk notifikasi stok habis.
              </p>
            </div>

          
            <div className="p-6 rounded-xl border border-blue-400 hover:shadow-lg transition duration-300">
              <FaCashRegister className="text-blue-400 text-4xl mb-4 mx-auto"/>
              <h3 className="font-semibold text-xl mb-2">Transaksi Cepat</h3>
              <p className="text-lg mb-12 max-w-2xl mx-auto">
                Proses penjualan dengan efisien, dilengkapi sistem kasir modern.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-blue-400 hover:shadow-lg transition duration-300">
              <FaChartBar className="text-blue-400 text-4xl mb-4 mx-auto"/>
              <h3 className="font-semibold text-xl mb-2">Manajemen Stok Opname</h3>
              <p className="text-lg mb-12 max-w-2xl mx-auto">
                Analisis performa  apotek dengan laporan penjualan dan grafik mudah dipahami.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-blue-400 hover:shadow-lg transition duration-300">
              <FaClipboard className="text-blue-400 text-4xl mb-4 mx-auto"/>
              <h3 className="font-semibold text-xl mb-2">Manajemen Stok Opname</h3>
              <p className="text-lg mb-12 max-w-2xl mx-auto">
              Input resep dari dokter secara digital untuk mempermudah pencatatan & pelayanan.
              </p>
            </div>
        </div>
        </div>
      </section>
    </div>
  );
};

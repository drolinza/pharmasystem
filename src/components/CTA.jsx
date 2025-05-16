import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <div>
      <section
        id="cta"
        className="text-white py-16 px-4 text-center bg-gradient-to-b from-blue-50 via-white to-white-50"
      >
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Siap Upgrade Apotekmu?
          </h2>
          <p className="text-lg mb-6">
            Coba aplikasi kami dan rasakan kemudahan dalam mengelola apotek
            tanpa ribet.
          </p>
          <Link to="/signup" className="btn-primary">
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
};

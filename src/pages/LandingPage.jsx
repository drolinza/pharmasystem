import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    // navbar
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full z-40 top-0 left-0 border-b border-gray-200 bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary-600 text-blue-400">
              Pharma<span className="text-gray-700">System</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/home"
              className="btn-primary text-gray-700 font-medium hover:text-blue-400 focus:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/help"
              className="btn-secondary text-gray-700 font-medium hover:text-blue-400 transition-colors"
            >
              Help
            </Link>
            <Link
              to="/signup"
              className="btn-secondary text-blue-400 font-medium border border-blue-400 py-1 px-2 rounded hover:text-blue-400 transition-all duration-200 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-400 hover:text-white"
            >
              Signup
            </Link>
            <Link
              to="/login"
              className="btn-secondary text-blue-400 font-medium border border-blue-400 py-1 px-3 rounded bg-blue- hover:text-blue-400 transition-all duration-200 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-400 hover:text-white"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <header className="pt-24 pb-12 px-4 mx-auto max-w-screen-xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-800 md:text-5xl lg:text-6xl">
          Solusi Manajemen Apotek Modern
        </h1>
        <p className="mb-8 text-lg text-gray-500 lg:text-xl sm:space-y-0 sm:space-x-4">
          Kelola Apotek Anda lebih efisien, akurat, dan mudah digunakan dengan
          PharmaSystem
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="/signup"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-3xl bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-400"
          >
            Mulai bergabung
          </a>

          <a
            href="/feature"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-blue-400 rounded-3xl border border-blue-400  focus:ring-4 focus:ring-blue-300"
          >
            Pelajari lebih lanjut
          </a>
        </div>
      </header>

      {/* Feature Section */}
        <section id="feature" className="bg-gray-50 py-16">
          <div>
            
          </div>
        </section>
    </div>
  );
};

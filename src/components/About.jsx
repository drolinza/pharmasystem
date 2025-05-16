export const About = () => {
  return (
    <section className="bg-blue-300 py-14 px-4">
      <div className="max-w-screen-md mx-auto text-center">
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">About Us</h2>
        <p className="text-gray-800">
          Kami adalah tim yang peduli dengan efisiensi dunia kesehatan,
          khususnya di apotek. Aplikasi ini dibuat untuk membantu pemilik apotek
          mengelola bisnisnya dengan lebih cepat, terorganisir, dan modern.
        </p>
      </div>

      <div className="text-gray-800 flex justify-center mt-8 gap-4">
      <a href="#" className="hover:text-blue-400 text-sm">Privacy Policy</a>
      <a href="#" className="hover:text-blue-400 text-sm">Terms of Service</a>
      </div>
    </section>
  );
};

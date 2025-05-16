export const Footer = () => {
  return (
    <footer className="bg-blue-300 text-white py-2 px-4 text-center">
      <p className="text-white text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-white">Pharma</span>System. All rights
        reserved.
      </p>
    </footer>
  );
};

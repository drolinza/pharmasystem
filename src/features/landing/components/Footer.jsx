export const Footer = () => {
  return (
    <footer className="bg-blue-300 text-gray-900 py-2 px-4 text-center">
      <p className="text-gray-900 text-xs">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-gray-900">Pharma</span>System. All rights
        reserved.
      </p>
    </footer>
  );
};

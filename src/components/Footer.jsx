import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="mt-16 border-t border-gray-200 bg-white">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <Link to="/" className="text-xl font-bold text-gray-900">
          eCom
        </Link>
        <p className="mt-2 text-sm text-gray-500">
          A frontend ecommerce demo powered by DummyJSON.
        </p>
      </div>
      <div className="flex flex-wrap gap-5 text-sm text-gray-600">
        <Link to="/about" className="hover:text-indigo-700">
          About
        </Link>
        <Link to="/services" className="hover:text-indigo-700">
          Services
        </Link>
        <Link to="/cart" className="hover:text-indigo-700">
          Cart
        </Link>
      </div>
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} eCom
      </p>
    </div>
  </footer>
);

export default Footer;

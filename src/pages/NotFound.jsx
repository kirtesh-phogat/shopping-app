import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="grid min-h-96 place-items-center px-6 py-16 text-center">
    <div>
      <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold text-gray-900">Page not found</h1>
      <p className="mt-3 text-gray-500">
        The page you requested does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
      >
        Return home
      </Link>
    </div>
  </section>
);

export default NotFound;

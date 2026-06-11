import { Link } from "react-router-dom";

const services = [
  {
    title: "Fast delivery",
    description:
      "Products are prepared for quick and reliable delivery through trusted shipping partners.",
  },
  {
    title: "Secure payments",
    description:
      "The storefront is designed to support safe payment providers when a backend is connected.",
  },
  {
    title: "Customer support",
    description:
      "Clear product information and support-friendly order experiences keep shopping simple.",
  },
];

const Service = () => (
  <div className="bg-white text-gray-900">
    <section className="bg-gray-100 px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
        What we offer
      </p>
      <h1 className="mt-3 text-5xl font-bold md:text-6xl">Our services</h1>
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
        A straightforward shopping experience focused on useful products,
        reliable delivery, and clear customer support.
      </p>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-indigo-50 font-bold text-indigo-700">
              {index + 1}
            </span>
            <h2 className="mt-6 text-2xl font-bold">{service.title}</h2>
            <p className="mt-4 leading-7 text-gray-600">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-gray-950 px-6 py-20 text-center text-white">
      <h2 className="text-4xl font-bold">Explore the collection</h2>
      <p className="mx-auto mt-4 max-w-2xl text-gray-400">
        Browse products and categories from the main storefront.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-full bg-indigo-600 px-10 py-4 font-medium hover:bg-indigo-700"
      >
        Shop now
      </Link>
    </section>
  </div>
);

export default Service;

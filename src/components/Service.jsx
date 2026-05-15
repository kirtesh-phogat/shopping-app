import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* Hero Section */}
      <section className="bg-zinc-100 py-24 px-6 text-center">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Our Services
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-8">
          We provide premium ecommerce solutions and services
          to deliver the best shopping experience for our customers.
        </p>

      </section>

      {/* Services Cards */}
      <section className="py-20 px-6 md:px-20">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 border">

            <div className="text-5xl mb-6">
              🚚
            </div>

            <h2 className="text-2xl font-bold mb-4">
              Fast Delivery
            </h2>

            <p className="text-gray-600 leading-7">
              Get your products delivered quickly and safely
              with our trusted shipping partners.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 border">

            <div className="text-5xl mb-6">
              🔒
            </div>

            <h2 className="text-2xl font-bold mb-4">
              Secure Payments
            </h2>

            <p className="text-gray-600 leading-7">
              We provide secure payment gateways to ensure
              safe and protected transactions.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 border">

            <div className="text-5xl mb-6">
              💬
            </div>

            <h2 className="text-2xl font-bold mb-4">
              24/7 Support
            </h2>

            <p className="text-gray-600 leading-7">
              Our support team is always ready to help you
              with your queries and orders.
            </p>

          </div>

        </div>

      </section>

      {/* Extra Services */}
      <section className="bg-zinc-50 py-20 px-6 md:px-20">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold mb-4">
            Why Choose Us
          </h2>

          <p className="text-gray-600">
            We focus on quality, trust, and customer satisfaction
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-3xl shadow-md">

            <h3 className="text-2xl font-bold mb-4">
              Premium Quality Products
            </h3>

            <p className="text-gray-600 leading-7">
              We carefully select high-quality products
              to ensure the best experience for our customers.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md">

            <h3 className="text-2xl font-bold mb-4">
              Easy Return Policy
            </h3>

            <p className="text-gray-600 leading-7">
              Hassle-free return and exchange policies
              to make your shopping experience stress-free.
            </p>

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="py-20 px-6 md:px-20">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div className="bg-zinc-100 p-8 rounded-3xl">

            <h2 className="text-4xl font-bold text-blue-600">
              10K+
            </h2>

            <p className="text-gray-600 mt-2">
              Orders Delivered
            </p>

          </div>

          <div className="bg-zinc-100 p-8 rounded-3xl">

            <h2 className="text-4xl font-bold text-blue-600">
              5K+
            </h2>

            <p className="text-gray-600 mt-2">
              Happy Customers
            </p>

          </div>

          <div className="bg-zinc-100 p-8 rounded-3xl">

            <h2 className="text-4xl font-bold text-blue-600">
              24/7
            </h2>

            <p className="text-gray-600 mt-2">
              Customer Support
            </p>

          </div>

          <div className="bg-zinc-100 p-8 rounded-3xl">

            <h2 className="text-4xl font-bold text-blue-600">
              100%
            </h2>

            <p className="text-gray-600 mt-2">
              Secure Shopping
            </p>

          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-24 px-6 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Explore Our Products
        </h2>

        <p className="max-w-2xl mx-auto text-gray-400 leading-8 mb-8">
          Discover the latest collections and experience
          premium online shopping with us.
        </p>

        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-full text-lg transition duration-300 inline-block"
        >
          Shop Now
        </Link>

      </section>

    </div>
  );
};

export default Service;
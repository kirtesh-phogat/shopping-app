import React from "react";
import { Link } from "react-router";

const Aboout = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center bg-zinc-100">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our Store</h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-8">
          Welcome to our ecommerce platform where quality products, modern
          shopping experience, and customer satisfaction come together.
        </p>
      </section>

      {/* About Store */}
      <section className="grid md:grid-cols-2 gap-14 items-center px-6 md:px-20 py-20">
        <div>
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546"
            alt="ecommerce"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>

          <p className="text-gray-600 leading-8 mb-5">
            We are passionate about providing premium quality products with
            affordable prices and fast delivery services.
          </p>

          <p className="text-gray-600 leading-8">
            Our mission is to make online shopping easy, secure, and enjoyable
            for everyone.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-20 py-20 bg-zinc-50">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Why Shop With Us</h2>

          <p className="text-gray-600 mt-4">
            We provide the best shopping experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Premium Quality</h3>

            <p className="text-gray-600 leading-7">
              Carefully selected products with top quality standards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Fast Delivery</h3>

            <p className="text-gray-600 leading-7">
              Quick and secure shipping for all your orders.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Secure Payment</h3>

            <p className="text-gray-600 leading-7">
              100% secure payment methods for safe transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-zinc-100 p-8 rounded-3xl">
            <h3 className="text-4xl font-bold text-blue-600">5K+</h3>

            <p className="text-gray-600 mt-2">Happy Customers</p>
          </div>

          <div className="bg-zinc-100 p-8 rounded-3xl">
            <h3 className="text-4xl font-bold text-blue-600">1K+</h3>

            <p className="text-gray-600 mt-2">Products</p>
          </div>

          <div className="bg-zinc-100 p-8 rounded-3xl">
            <h3 className="text-4xl font-bold text-blue-600">24/7</h3>

            <p className="text-gray-600 mt-2">Support</p>
          </div>

          <div className="bg-zinc-100 p-8 rounded-3xl">
            <h3 className="text-4xl font-bold text-blue-600">100%</h3>

            <p className="text-gray-600 mt-2">Secure Shopping</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-black text-white px-6">
        <h2 className="text-5xl font-bold mb-6">Start Shopping Today</h2>

        <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-8">
          Explore our latest collections and enjoy a premium online shopping
          experience.
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

export default Aboout;

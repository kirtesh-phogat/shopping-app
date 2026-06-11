import { useEffect, useState } from "react";
import productsApi from "../config/productApiConfig";
import Card from "./Card";

const CardGallery = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        const response = await productsApi.get("/", {
          signal: controller.signal,
        });
        const nextProducts = response.data?.products;

        setProducts(Array.isArray(nextProducts) ? nextProducts : []);
        setStatus("success");
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setStatus("error");
        }
      }
    };

    fetchProducts();
    return () => controller.abort();
  }, []);

  return (
    <section className="pb-16 pt-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative mb-10 overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white shadow-2xl shadow-slate-200 sm:px-10 lg:px-14">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
          <div className="absolute -bottom-32 right-1/3 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                Curated essentials
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Shop our collection
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Explore carefully selected products across technology, style,
                home, beauty, and everyday essentials.
              </p>
            </div>
            {status === "success" && products.length > 0 && (
              <div className="flex gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur">
                  <p className="text-2xl font-bold">{products.length}</p>
                  <p className="text-xs text-slate-300">Products</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur">
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-xs text-slate-300">Shopping</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        {status === "loading" && (
          <StatusMessage>Loading products...</StatusMessage>
        )}
        {status === "error" && (
          <StatusMessage>
            Products could not be loaded. Please refresh and try again.
          </StatusMessage>
        )}
        {status === "success" && products.length === 0 && (
          <StatusMessage>No products are available right now.</StatusMessage>
        )}
        {status === "success" && products.length > 0 && (
          <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product) => (
              <Card product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const StatusMessage = ({ children }) => (
  <div className="rounded-2xl bg-white p-10 text-center text-gray-500 shadow-sm">
    {children}
  </div>
);

export default CardGallery;

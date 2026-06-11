import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      setStatus("loading");

      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${encodeURIComponent(categoryName)}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Unable to load category");
        }

        const data = await response.json();
        setProducts(Array.isArray(data.products) ? data.products : []);
        setStatus("success");
      } catch (error) {
        if (error.name !== "AbortError") {
          setStatus("error");
        }
      }
    };

    fetchProducts();
    return () => controller.abort();
  }, [categoryName]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <Link
        to="/"
        className="inline-flex rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:text-indigo-700"
      >
        Back to shop
      </Link>

      <div className="my-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
          Category
        </p>
        <h1 className="mt-2 text-3xl font-bold capitalize text-gray-900">
          {categoryName.replaceAll("-", " ")}
        </h1>
        {status === "success" && (
          <p className="mt-2 text-gray-500">
            {products.length} product(s) found
          </p>
        )}
      </div>

      {status === "loading" && <p>Loading products...</p>}
      {status === "error" && (
        <p className="rounded-xl bg-red-50 p-6 text-red-700">
          This category could not be loaded.
        </p>
      )}
      {status === "success" && products.length === 0 && (
        <p className="rounded-xl bg-white p-6 text-gray-500">
          No products were found in this category.
        </p>
      )}
      {status === "success" && products.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoryProducts;

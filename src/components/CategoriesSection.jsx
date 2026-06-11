import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories",
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Unable to load categories");
        }

        const data = await response.json();
        setCategories(Array.isArray(data) ? data : []);
        setStatus("success");
      } catch (error) {
        if (error.name !== "AbortError") {
          setStatus("error");
        }
      }
    };

    fetchCategories();
    return () => controller.abort();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-600">
            Find your style
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Shop by category
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Jump straight into curated departments and discover products made
            for everyday life.
          </p>
        </div>
        {status === "success" && (
          <p className="text-sm font-medium text-slate-400">
            {categories.length} departments
          </p>
        )}
      </div>

      {status === "loading" && (
        <p className="rounded-xl bg-white p-6 text-gray-500">
          Loading categories...
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl bg-red-50 p-6 text-red-700">
          Categories could not be loaded.
        </p>
      )}
      {status === "success" && (
        <div className="grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoriesSection;

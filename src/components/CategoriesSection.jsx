import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="px-4 md:px-8 my-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Shop By Category
      </h2>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${categoryName}`
        );

        const data = await response.json();

        setProducts(data.products || []);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    }

    fetchProducts();
  }, [categoryName]);

  return (
    <div className="px-4 md:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
      >
        ← Back
      </button>

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold capitalize">
          {categoryName}
        </h1>

        <p className="text-gray-500 mt-2">
          {products.length} Products Found
        </p>
      </div>

      {/* Products */}
      {loading ? (
        <h2 className="text-xl font-semibold">Loading...</h2>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
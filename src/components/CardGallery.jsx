import { useEffect, useState } from "react";
import Card from "./Card";
import productsApi from "../config/productApiConfig";


const CardGallery = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await productsApi.get("/");
        console.log(response);
        if (response.status == 200) {
          const data = response.data.products;
          setProducts(Array.isArray(data) ? data : []);
          // setProducts(data)
        }
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : products.length > 0 ? (
        <>
          {/* <h1 className="text-4xl text-center underline bold mt-3 text-indigo-500"> */}
          <h1 className="text-2xl sm:text-3xl font-bold text-center mt-8 mb-8 text-gray-900">
  Shop Our Collection
</h1>
          {/* <div className="px-12 py-4 gap-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6"> */}
          <div className="px-3 sm:px-5 md:px-8 lg:px-12 py-6 gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Array.isArray(products) &&
              products.map((product) => (
              <Card product={product} key={product.id} />
            ))}
          </div>
        </>
      ) : (
        <h1 className="text-3xl text-center">No Products to display</h1>
      )}
    </div>
  );
};

export default CardGallery;

const Spinner = () => {
  return <h1 className="text-center my-12">Loading....</h1>;
};

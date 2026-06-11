import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ProductRating from "../components/ProductRating";
import { addProductIntoCart } from "../redux/slices/cartSlice";
import { formatPrice, getOriginalPrice } from "../utils/product";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    const fetchProduct = async () => {
      setStatus("loading");

      try {
        const response = await fetch(
          `https://dummyjson.com/products/${encodeURIComponent(productId)}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Unable to load product");
        }

        setProduct(await response.json());
        setStatus("success");
      } catch (error) {
        if (error.name !== "AbortError") {
          setStatus("error");
        }
      }
    };

    fetchProduct();
    return () => controller.abort();
  }, [productId]);

  if (status === "loading") {
    return <div className="min-h-96 p-8 text-center">Loading product...</div>;
  }

  if (status === "error" || !product) {
    return (
      <section className="mx-auto min-h-96 max-w-3xl px-6 py-16 text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <p className="mt-3 text-gray-500">
          The product may be unavailable or the link may be incorrect.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
        >
          Return to shop
        </Link>
      </section>
    );
  }

  const discount = Math.round(product.discountPercentage || 0);

  const addToCart = () => {
    dispatch(addProductIntoCart(product));
    toast.success(`${product.title} added to cart`);
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <Link
        to="/"
        className="inline-flex rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:text-indigo-700"
      >
        Back to shop
      </Link>

      <div className="mt-6 grid gap-10 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
        <div className="grid min-h-96 place-items-center rounded-2xl bg-gray-50 p-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-96 w-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            {product.category}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            {product.title}
          </h1>
          <div className="mt-4">
            <ProductRating rating={Number(product.rating) || 0} />
          </div>
          <p className="mt-6 leading-7 text-gray-600">{product.description}</p>

          <div className="mt-6 flex flex-wrap items-baseline gap-3">
            <span className="text-4xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {discount > 0 && (
              <>
                <span className="text-xl text-gray-400 line-through">
                  {formatPrice(
                    getOriginalPrice(product.price, product.discountPercentage),
                  )}
                </span>
                <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
                  {discount}% off
                </span>
              </>
            )}
          </div>

          <p className="mt-4 text-sm font-medium text-green-700">
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </p>

          <button
            type="button"
            onClick={addToCart}
            disabled={product.stock <= 0}
            className="mt-8 w-full rounded-xl bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300 sm:w-fit"
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

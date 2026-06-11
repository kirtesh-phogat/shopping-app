import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addProductIntoCart } from "../redux/slices/cartSlice";
import { formatPrice, getOriginalPrice } from "../utils/product";
import ProductRating from "./ProductRating";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const discount = Math.round(product.discountPercentage || 0);

  const addToCart = () => {
    dispatch(addProductIntoCart(product));
    toast.success(`${product.title} added to cart`);
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-indigo-100 hover:shadow-2xl hover:shadow-slate-200/80">
      <Link
        to={`/product/${product.id}`}
        className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white p-5"
      >
        {discount > 0 && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-emerald-500 px-2.5 py-1 text-[11px] font-bold text-white shadow-sm">
            {discount}% OFF
          </span>
        )}
        <img
          className="h-full w-full object-contain transition duration-500 group-hover:scale-108"
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-500">
          {product.category}
        </p>
        <Link
          to={`/product/${product.id}`}
          className="mt-2 line-clamp-2 min-h-12 font-bold leading-6 text-slate-900 transition hover:text-indigo-700"
        >
          {product.title}
        </Link>

        <div className="mt-3">
          <ProductRating rating={Number(product.rating) || 0} />
        </div>

        <div className="mt-auto pt-5">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              {formatPrice(product.price)}
            </span>
            {discount > 0 && (
              <>
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(
                    getOriginalPrice(product.price, product.discountPercentage),
                  )}
                </span>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={addToCart}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
          >
            Add to cart
            <span aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;

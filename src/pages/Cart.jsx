import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addProductIntoCart,
  clearCart,
  decreaseQuantity,
  removeFromCart,
} from "../redux/slices/cartSlice";
import { formatPrice } from "../utils/product";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cartItem);
  const totalItems = products.reduce(
    (total, product) => total + product.quantity,
    0,
  );
  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  if (products.length === 0) {
    return (
      <section className="mx-auto grid min-h-96 max-w-4xl place-items-center px-6 py-16 text-center">
        <div>
          <h1 className="text-3xl font-bold">Your cart is empty</h1>
          <p className="mt-3 text-gray-500">
            Add a few products and they will appear here.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
          >
            Continue shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold">Shopping cart</h1>
          <p className="mt-1 text-gray-500">{totalItems} item(s)</p>
        </div>
        <button
          type="button"
          onClick={() => dispatch(clearCart())}
          className="rounded-lg px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
        >
          Clear cart
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="grid gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:grid-cols-[120px_1fr]"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-28 w-full rounded-xl object-contain"
                />
              </Link>
              <div className="flex flex-col justify-between gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Link
                      to={`/product/${product.id}`}
                      className="font-semibold text-gray-900 hover:text-indigo-700"
                    >
                      {product.title}
                    </Link>
                    <p className="mt-1 text-sm capitalize text-gray-500">
                      {product.category}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => dispatch(removeFromCart(product.id))}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center rounded-lg border border-gray-200">
                    <button
                      type="button"
                      onClick={() => dispatch(decreaseQuantity(product.id))}
                      className="px-3 py-1.5 text-lg hover:bg-gray-100"
                      aria-label={`Decrease ${product.title} quantity`}
                    >
                      -
                    </button>
                    <span className="min-w-10 text-center font-medium">
                      {product.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => dispatch(addProductIntoCart(product))}
                      className="px-3 py-1.5 text-lg hover:bg-gray-100"
                      aria-label={`Increase ${product.title} quantity`}
                    >
                      +
                    </button>
                  </div>
                  <span className="font-bold text-gray-900">
                    {formatPrice(product.price * product.quantity)}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Order summary</h2>
          <div className="mt-5 flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div className="mt-3 flex justify-between text-gray-600">
            <span>Delivery</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="mt-5 flex justify-between border-t border-gray-200 pt-5 text-lg font-bold">
            <span>Total</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <button
            type="button"
            className="mt-6 w-full rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
          >
            Proceed to checkout
          </button>
          <p className="mt-3 text-center text-xs text-gray-400">
            Checkout is not connected in this frontend demo.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default Cart;

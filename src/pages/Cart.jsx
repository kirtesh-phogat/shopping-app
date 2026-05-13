import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cartItem);

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold text-center mb-10">
        Items List in Cart
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Cart is empty
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              dispatch={dispatch}
            />
          ))}
        </div>
      )}
    </div>
  );
};





/* ------------------- Cart Item Component ------------------- */

const CartItem = ({ product, dispatch }) => {

  const removeHandler = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="border rounded-xl shadow-md p-5 flex flex-col justify-between">

      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mb-4"
      />

      <h2 className="font-semibold text-lg line-clamp-1">
        {product.title}
      </h2>

      <p className="text-gray-600 text-sm mt-2 line-clamp-3">
        {product.description}
      </p>

      <div className="flex items-center justify-between mt-4">
        <span className="text-xl font-bold text-green-600">
          ${product.price}
        </span>

        <span className="text-sm text-yellow-600">
          ⭐ {product.rating?.rate} ({product.rating?.count})
        </span>
      </div>

      <button
        onClick={removeHandler}
        className="mt-5 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
      >
        Remove From Cart
      </button>
    </div>
  );
};

export default Cart;
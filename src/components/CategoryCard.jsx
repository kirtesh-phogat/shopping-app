import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const icons = {
    beauty: "💄",
    fragrances: "🌸",
    furniture: "🛋️",
    groceries: "🛒",
    laptops: "💻",
    smartphones: "📱",
    tablets: "📱",
    "mens-shirts": "👔",
    "mens-shoes": "👟",
    "mens-watches": "⌚",
    "womens-bags": "👜",
    "womens-dresses": "👗",
    "womens-jewellery": "💍",
    "womens-shoes": "👠",
    "womens-watches": "⌚",
    "mobile-accessories": "🎧",
    motorcycle: "🏍️",
    "sports-accessories": "⚽",
    sunglasses: "🕶️",
    vehicle: "🚗",
    "home-decoration": "🏠",
    "kitchen-accessories": "🍽️",
    "skin-care": "🧴",
    tops: "👕",
  };

  return (
    <Link
      to={`/category/${category.slug}`}
      className="
        bg-white
        rounded-2xl
        shadow-md
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        p-4
        text-center
        border
        border-gray-100
      "
    >
      <div className="text-4xl mb-3">
        {icons[category.slug] || "🛍️"}
      </div>

      <h3 className="font-semibold text-gray-800 capitalize text-sm sm:text-base">
        {category.name}
      </h3>
    </Link>
  );
};

export default CategoryCard;
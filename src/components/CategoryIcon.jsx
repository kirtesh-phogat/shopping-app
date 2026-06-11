const icons = {
  beauty: "beauty",
  fragrances: "beauty",
  furniture: "home",
  groceries: "cart",
  "home-decoration": "home",
  "kitchen-accessories": "home",
  laptops: "computer",
  "mens-shirts": "fashion",
  "mens-shoes": "shoe",
  "mens-watches": "watch",
  "mobile-accessories": "phone",
  motorcycle: "vehicle",
  "skin-care": "beauty",
  smartphones: "phone",
  "sports-accessories": "sport",
  sunglasses: "glasses",
  tablets: "computer",
  tops: "fashion",
  vehicle: "vehicle",
  "womens-bags": "bag",
  "womens-dresses": "fashion",
  "womens-jewellery": "jewellery",
  "womens-shoes": "shoe",
  "womens-watches": "watch",
};

const paths = {
  bag: (
    <>
      <path d="M6 8h12l1 12H5L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  beauty: (
    <>
      <path d="m9 3 6 6" />
      <path d="m7 5 2-2 6 6-2 2" />
      <path d="M7 9h6v12H7z" />
      <path d="M9 14h2" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2l2 11h10l2-7H6" />
      <circle cx="9" cy="19" r="1" />
      <circle cx="17" cy="19" r="1" />
    </>
  ),
  computer: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  fashion: (
    <>
      <path d="m8 4 4 2 4-2 4 4-3 3v10H7V11L4 8l4-4Z" />
      <path d="M10 5a2 2 0 0 0 4 0" />
    </>
  ),
  glasses: (
    <>
      <circle cx="7" cy="13" r="4" />
      <circle cx="17" cy="13" r="4" />
      <path d="M11 13h2M3 11l1-5M21 11l-1-5" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v11h14V10M9 21v-7h6v7" />
    </>
  ),
  jewellery: (
    <>
      <path d="m7 4 5-2 5 2 3 5-8 12L4 9l3-5Z" />
      <path d="M4 9h16M7 4l5 5 5-5" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M10 5h4M11 19h2" />
    </>
  ),
  shoe: (
    <>
      <path d="M4 15c4 0 6-3 7-8l3 2c1 3 3 5 6 6v4H4v-4Z" />
      <path d="M10 13h5" />
    </>
  ),
  sport: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 5 3 4-1 5-5 1M16 5l-3 4 1 5 5 1M10 14l2 4 2-4" />
    </>
  ),
  vehicle: (
    <>
      <path d="m5 11 2-5h10l2 5" />
      <path d="M3 11h18v7H3z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  watch: (
    <>
      <path d="M9 2h6l1 5H8l1-5ZM8 17h8l-1 5H9l-1-5Z" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 9v3l2 1" />
    </>
  ),
};

const CategoryIcon = ({ category }) => {
  const iconName = icons[category] || "cart";

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden="true"
    >
      {paths[iconName]}
    </svg>
  );
};

export default CategoryIcon;

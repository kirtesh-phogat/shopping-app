const ProductRating = ({ rating = 0 }) => {
  const roundedRating = Math.round(rating);

  return (
    <div
      className="flex items-center gap-2"
      aria-label={`${rating.toFixed(1)} out of 5 stars`}
    >
      <span className="text-amber-500" aria-hidden="true">
        {"*".repeat(Math.max(0, Math.min(5, roundedRating)))}
        <span className="text-gray-300">
          {"*".repeat(5 - Math.max(0, Math.min(5, roundedRating)))}
        </span>
      </span>
      <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-700">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default ProductRating;

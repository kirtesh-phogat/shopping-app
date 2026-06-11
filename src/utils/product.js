const USD_TO_INR = 80;

export const formatPrice = (price = 0) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price * USD_TO_INR);

export const getOriginalPrice = (price = 0, discountPercentage = 0) => {
  if (discountPercentage <= 0 || discountPercentage >= 100) {
    return price;
  }

  return price / (1 - discountPercentage / 100);
};

export function formatPrice(price) {
  const numericPrice = Number(price);

  if (!Number.isFinite(numericPrice)) {
    return '€0.00';
  }

  return `€${numericPrice.toFixed(2)}`;
}

export const priceStringToNumber = (price: string): number => {
  const priceConvert = price.replace(',', '.');
  return parseFloat(priceConvert);
}

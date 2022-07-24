export const numberToMoney = (value: number): string => {
  const floatString = value.toFixed(2);
  const final = floatString.replace('.', ',');
  return `R$ ${final}`;
}

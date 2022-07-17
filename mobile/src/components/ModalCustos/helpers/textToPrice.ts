export const textToPrice = (text: string): string => {
  if (text[text.length - 1 ] === ',') {
    return text.substring(0, text.length - 1 );
  }
  const numberIntString = parseInt(text.replace(',', ''))
  const numberFloatString = numberIntString.toString().padStart(4, '0').replace(/\d{2}$/g, (value) => `.${value}`)
  const numberFloat = parseFloat(numberFloatString)
  const numberFinal = numberFloat.toFixed(2).replace('.', ',');
  return numberFinal;
}

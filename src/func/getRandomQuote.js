export const getRandomQuote = (data, index) => {
  const quote = data.find((q, i) => {
    return i === index ?? q;
  });
  return quote;
};
